import {prop} from 'ramda';

/**
 * Returns an array of user names from queried user data.
 * 
 * @param data any
 *   Array of user data from graphql query.
 * 
 * @returns any
 *   Array of names from the queried data.
 */
const getJoke = (data: any): any => 
  prop('joke')(data);

export default getJoke;
