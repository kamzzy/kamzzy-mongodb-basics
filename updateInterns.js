var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/kamzzy";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var interns = db.db("kamzzy");
  var myquery = {movie: "The Transporter", year: "2006", rating: 9};
  var newvalues = { $set: {movie: "The Banker", year: "2020", rating: 8}};
  interns.collection("myMovies").updateOne(myquery, newvalues, function(err,result) {
    if (err) throw err;
    console.log("collection file updated");
  })
    db.close();
   
  });