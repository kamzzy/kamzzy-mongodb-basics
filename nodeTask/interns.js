var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ziri";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database of interns");
  db.close();
});