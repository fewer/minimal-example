import { Router } from 'express';
import Posts from '../repositories/Posts';

export const router = Router();

router.get('/', async (req, res) => {
  const posts = await Posts;
  res.render('posts/index', { posts });
});

router.post('/', async (req, res) => {
  const post = await Posts.create({
    title: req.body.title,
    subtitle: req.body.subtitle,
    content: req.body.content,
    comments_enabled: req.body.comments_enabled === 'on',
  });

  res.redirect(`posts/${post.id}`);
});

router.get('/new', (req, res) => {
  res.render('posts/new');
});

router.get('/:id', (req, res) => {
  res.render('posts/show', { post: { id: 123, title: 'foobar' } });
});
