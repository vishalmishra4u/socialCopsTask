var csvjson = require('csvjson'),
  csv=require('csvtojson'),
  fs = require('fs'),
  _ = require('lodash'),
  spawn = require('child_process').spawn,
  job = null
  Q = require('q');

module.exports = {

  attributes: {
    policyID:{
      type : 'String'
    },
    statecode :{
      type : 'String'
    },
    tiv :{
      type : 'String'
    },
    latitude :{
      type : 'String'
    },
    longitude :{
      type : 'String'
    },
    construction :{
      type : 'String'
    },
    granularity :{
      type : 'String'
    }
  },
  insertInDB : insertInDB,
  stopProcess : stopProcess,
  updatePolicyId : updatePolicyId
};

function insertInDB(date){
  return Q.promise(function(resolve, reject){

    var fileToSearch = 'insurance-date-'+date+'.csv';
    var data = fs.readFileSync('./'+fileToSearch, { encoding : 'utf8'});

    if(data == null){
      return reject('File Not found');
    }

    var options = {
      delimiter : ','
    };

    var result = csvjson.toObject(data, options);

    job = spawn('node', ['api/models/CSVReader.js'],
    {
        detached: false,
        stdio: [process.stdin, process.stdout, process.stderr]
    });

    _.forEach(result, function(data){
      CSVReader
        .create(data)
        .then()
        .catch(function(err){
          sails.log.error('CSVReader#insertInDB ::',err);
          return reject(err);
        });
    });

    job.on('close', function(code) {
      job = null;
    });

    return resolve();
  });
}

function stopProcess(){
  return Q.promise(function(resoove, reject){
    if(!job || !job.pid){
      return reject({
        code : 400,
        message : 'No job running!!'
      });
    }

     job.kill('SIGTERM');
     job = null;
     return resolve();
  });
}

function updatePolicyId(){
  return Q.promise(function(resolve, reject){
    var data = fs.readFileSync('./insurance.csv', { encoding : 'utf8'});
    var options = {
      delimiter : ','
    };
    var result = csvjson.toArray(data, options);
    CSVReader
      .find()
      .then(function(allDocs){
        for(var rowCount = 0; rowCount < result.length; rowCount++){
          if(rowCount > 10){//since the row was shifted down 10 rows; plus first row is header
            allDocs[rowCount - 11].policyID = result[rowCount][0];
            allDocs[rowCount - 11].save(function(err){
              console.log(err);
            });
          }
        }
      })
      .catch(function(err){
        sails.log.error('CSVReader#updatePolicyId :: error', err);
        return reject(err);
      });

    return resolve();
  });
}
