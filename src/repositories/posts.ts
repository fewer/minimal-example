import { createRepository } from 'fewer';
import { presence } from '@fewer/validations';
import schema from '../schema';

export default createRepository(schema.tables.posts).pipe(presence('title'));
