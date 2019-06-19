const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async(req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect('mongodb+srv://abc123:VHjAjpkE%5Fv4PB95@vue-express-ge7ip.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
  });

  return client.db('vue-express').collection('posts');
}

module.exports = router;
