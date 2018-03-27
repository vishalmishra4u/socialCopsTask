module.exports.policies = {

  '*': 'runDBBackUpScript',

  CSVReaderController : {
		addDataIntoDB : ['runDBBackUpScript','checkDateOfUpload']
	}
};
