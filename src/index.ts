import express from 'express';
import db from './db';
import posts from './repositories/posts';

const app = express();

app.get('/', (req, res) => {
  res.send('ok');
});

app.get('/posts/create', async (req, res) => {
    const post = await posts.create({ title: req.query.title || 'Hello World' });
    res.send('OK');
});

app.get('/posts', async (req, res) => {
  const allPosts = await posts.where({});
  const data = (allPosts as any).rows;
  res.json(data);
});

app.listen(8081, () => {
  db.connect();
  console.log('App started.');
});
