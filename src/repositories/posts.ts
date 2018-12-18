import { createRepository } from 'fewer';
import schema from '../schema';

export default createRepository(schema.tables.posts);
