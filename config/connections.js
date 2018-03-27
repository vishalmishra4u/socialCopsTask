module.exports.connections = {
  localDiskDb: {
    adapter: 'sails-disk'
  },

  /***************************************************************************
  *                                                                          *
  * MongoDB is the leading NoSQL database.                                   *
  * http://en.wikipedia.org/wiki/MongoDB                                     *
  *                                                                          *
  * Run: npm install sails-mongo@for-sails-0.12 --save                       *
  *                                                                          *
  ***************************************************************************/
  socialCopsServer: {
    adapter: 'sails-mongo',
    host: 'localhost',
    port: 27017,
    // user: 'username', //optional
    // password: 'password', //optional
    database: 'socialCopsDb' //optional
  }
};
