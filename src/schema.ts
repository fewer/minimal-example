import { createSchema } from 'fewer';

const VERSION = 1;

export default createSchema(VERSION).table('posts', {}, t => ({
  title: t.text(),
}));
