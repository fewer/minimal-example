import { Router } from 'express';
import Users from '../repositories/Users';

export const router = Router();

router.get('/login', (req, res) => {
  res.render('users/login');
});

router.post('/login', async (req, res) => {
  // await Users.where({ email: req.body.email });
  res.redirect('/');
});

router.get('/signup', (req, res) => {
  res.render('users/signup');
});

router.post('/signup', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});
