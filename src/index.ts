// Import the fewer database:
import database from './database';
// Import the express application:
import app from './app';
// Import our controllers:
import { router as posts } from './controllers/posts';
import { router as users } from './controllers/users';

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/posts', posts);
app.use('/users', users);

// Set up top-level app routes:
app.get('/login', (req, res) => res.redirect('/users/login'));
app.get('/signup', (req, res) => res.redirect('/users/signup'));

const port = process.env.PORT || 8081;
app.listen(port, async () => {
  await database.connect();
  console.log(`App started on port ${port}.`);
});
