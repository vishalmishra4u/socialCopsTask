const shell = require('shelljs');

module.exports = function runDBBackupScript(req, res, next){
  shell.exec('./takemongobackup.sh');

  return next();
}
