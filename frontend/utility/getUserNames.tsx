import {pluck} from 'ramda';
import {UserData} from '../lib/types';

/**
 * Returns an array of user names from queried user data.
 * 
 * @param users UserData[]
 *   Array of user data from graphql query.
 * 
 * @returns string[]
 *   Array of names from the queried data.
 */
const getUserNames = (users: UserData[]): string[] => 
  pluck('name')(users);

export default getUserNames;
