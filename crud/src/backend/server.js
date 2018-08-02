import express from 'express';
import mongodb from 'mongodb';

// initialize express
const app = express();
// db name is crudwithredux
const dburl = 'mongodb://localhost:8080/crudwithredux';

// connect mongodb tot he dburl
mongodb.MongoClient.connect(dburl, {useNewUrlParser: true}, (err, db) => {
  
  app.get('/api/games', (req, res) => {
    db.collection('games').find({}).toArray((err, games) => {
      res.json({ games });
    });
  });


  // connect db and at the end, run server
  app.listen(8080, () => console.log('server running on localhost:8080'));
});


