var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/kamzzy";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var interns = db.db("kamzzy");
  // return first document in a collection
  interns.collection("myMovies").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
   
  });
/**
 * RETURNS all movies with rating of 7
 *  */  
  interns.collection("myMovies").find({rating:7}).toArray(function(err,result) {
    if(err) throw err;
    console.log(result);
  })
  /*
  * RETURNS ONLY MOVIE TITLE
  */
  interns.collection("myMovies").find({}, {projection: {_id:0, movie:1}}).toArray(function(err,result) {
    if(err) throw err;
    console.log(result);
  })
  db.close();

});

 