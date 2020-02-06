import {useQuery} from '@apollo/react-hooks';
import {ALL_USERS_QUERY} from '../../../lib/queries';
import {Select} from './';

const SelectAuthor = () => {
  // Fetch the current item by query parameter id.
  const { loading, error, data } = useQuery(ALL_USERS_QUERY);
  
  const options = [
    'lucy', 'anne', 'jerry'
  ];

  return (
    <Select 
      id="author" 
      label="Author" 
      options={options} 
      defaultValue="jerry"
    />
  );
}

export default SelectAuthor;
