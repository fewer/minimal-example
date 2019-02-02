import path from 'path';
import express from 'express';
import database from './database';
import Posts from './repositories/Posts';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('/posts');
});

// app.get('/posts/create', async (req, res) => {
//     const post = await posts.create({ title: req.query.title || 'Hello World' });
//     res.send('OK');
// });

app.get('/posts', async (req, res) => {
  const posts = await Posts;
  res.render('posts', { posts });
});

app.listen(8081, async () => {
  await database.connect();
  console.log('App started.');
});
