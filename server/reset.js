// Used to reset and rebuild the database for testing purposes or whenever the schema is edited.

import { deleteSchema } from './db.js';
import { createSchema } from './db.js';

deleteSchema();
createSchema();