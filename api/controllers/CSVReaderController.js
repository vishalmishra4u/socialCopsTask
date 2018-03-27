module.exports = {
	addDataIntoDB : addDataIntoDB,
	stopUploadProcess : stopUploadProcess,
	UpdateDocumentsSingleField : UpdateDocumentsSingleField
};

function addDataIntoDB(req, res){
	var date = req.param('date');

	CSVReader
		.insertInDB(date)
		.then(function(){
			return res.ok('Upload Done');
		})
		.catch(function(err){
			sails.log.error('CSVReaderController#addDataIntoDB :: error', error);
			return res.badRequest();
		});
}

function stopUploadProcess(req, res){
	CSVReader
		.stopProcess()
		.then(function(){
			return res.ok('Upload process stopped');
		})
		.catch(function(err){
			sails.log.error('CSVReaderController#stopUploadProcess :: error', err);
			return res.badRequest('No job running');
		});
}

function UpdateDocumentsSingleField(req, res){
	CSVReader
		.updatePolicyId()
		.then(function(){
			return res.ok();
		})
		.catch(function(err){
			sails.log.error('CSVReaderController#UpdateDocumentsSingleField :: error', err);
			return res.badRequest('Error found!!');
		});
}
