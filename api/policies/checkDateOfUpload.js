const maxDays = sails.config.maxDays,
 moment = require('moment');

module.exports = function checkUploadDate(req, res, next){
  const date = req.param('date'),
    given = moment(date, "YYYY-MM-DD"),
    current = moment().startOf('day');

    //Difference in number of days
   if(Math.abs(moment.duration(given.diff(current)).asDays()) > maxDays.MAX_DAYS){
     return res.badRequest('File Upload Not allowed');
   }
   else{
     return next();
   }

}
