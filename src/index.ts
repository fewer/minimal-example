import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import expressHandlebars from 'express-handlebars';
import database from './database';
import Posts from './repositories/Posts';

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.engine('hbs', expressHandlebars({ extname: '.hbs' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.redirect('/posts');
});

app.get('/posts', async (req, res) => {
  const posts = await Posts;
  res.render('posts', { posts });
});

app.post('/posts', async (req, res) => {
  await Posts.create({ title: req.body.title });
  res.redirect('/posts');
});

app.get('/posts/:id', async (req, res) => {
  const post = await Posts.find(req.params.id);
  // @ts-ignore Bug in fewer:
  res.render('post', { post: post[0] });
});

app.listen(8081, async () => {
  await database.connect();
  console.log('App started.');
});
