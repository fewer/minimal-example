import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'hbs');

export default app;
