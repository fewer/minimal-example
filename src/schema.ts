/* eslint-disable */
// THIS FILE IS AUTO-GENERATED BY FEWER.
// Generally this file should not be modified manually, but instead should be
// re-generated from the state of the Database.
// You can use the fewer CLI to re-generate this by running:
//   * `fewer db:schema` - Generate the schema using the current state of the database.
//   * `fewer db:schema --offline` - Generates the schema offline by running through the migrations.

import { createSchema } from 'fewer';
import database from './database';

export default createSchema()
  .table(database, 'posts', t => ({
    id: t.bigserial(),
    title: t.varchar(),
    subtitle: t.varchar(),
    content: t.text(),
    comments_enabled: t.boolean(),
  }))
  .table(database, 'users', t => ({
    id: t.bigserial(),
    name: t.varchar(),
    password_hash: t.varchar(),
  }));
