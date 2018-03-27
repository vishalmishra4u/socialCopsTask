module.exports.routes = {
  'POST /api/v1/socialCops/insertData' : {
    controller : 'CSVReaderController',
    action : 'addDataIntoDB'
  },
  'GET /api/v1/socialCops/stopUploadData' : {
    controller : 'CSVReaderController',
    action : 'stopUploadProcess'
  },
  'PUT /api/v1/socialCops/UpdateDocumentsSingleField' :{
    controller : 'CSVReaderController',
    action : 'UpdateDocumentsSingleField'
  }
};
