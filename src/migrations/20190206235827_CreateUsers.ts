import { createMigration } from 'fewer';
import database from '../database';

export default createMigration(20190206235827, database, {
  change: (m, t) =>
    m.createTable('users', null, {
      id: t.bigserial({ primaryKey: true }),
      email: t.varchar({ unique: true }),
      name: t.varchar(),
      password_hash: t.varchar(),
    }),
});
