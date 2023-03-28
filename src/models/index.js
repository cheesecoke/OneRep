// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Entry, Exercise, Users } = initSchema(schema);

export {
  Entry,
  Exercise,
  Users
};