/* This module creates a database named test
and creates a collection in the database if the collection already exists
it will raise an error.
it also inserts the data into the collection.
*/
var mongoclient = require('mongodb');
var url = 'mongodb://127.0.0.1:27017/test';
var db;
module.exports = {
  //connect to mongodb and creates collection
connect: function(collection_name){
  mongoclient.connect(url,function(err,_db){
  if(err)  throw err;
  db = _db;
  console.log('connection success');
  db.createCollection(collection_name,function(err,coll){
    if(err)
    throw err;
    console.log('collection created');

    console.log(coll);
  });
});
},
//inserts the data into the collection
    insert: function(collection_name,data){
      db.collection(collection_name).insertOne(data, function(err, res) {
       if (err) throw err;
       console.log(data);
});
}
};
