import { createMigration } from 'fewer';
import database from '../database';

export default createMigration(20190202203114, database, {
  change: (m, t) =>
    m.createTable('posts', null, {
      id: t.bigserial({ primaryKey: true }),
      title: t.varchar(),
      subtitle: t.varchar(),
      content: t.text(),
      comments_enabled: t.boolean(),
    }),
});
