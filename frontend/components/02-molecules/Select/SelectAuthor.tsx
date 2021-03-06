import {useQuery} from '@apollo/react-hooks';
import {propOr} from 'ramda';
import {ALL_USERS_QUERY} from '../../../lib/queries';
import {getUserNames} from '../../../utility';
import Message from '../../02-molecules/Message';
import {Select} from './';

type Props = {
  defaultValue?: string,
  handleChange: Function
}

const SelectAuthor = ({defaultValue, handleChange}: Props) => {
  // Fetch the current item by query parameter id.
  const { loading, error, data } = useQuery(ALL_USERS_QUERY);

  // Get the user names from the data or empty array.
  const options = getUserNames(propOr([], 'users')(data));

  return (
    <div>
      {error && (
        <Message 
          message={error.message}
          type='error'
        />
      )}
      <Select 
        id="author" 
        label="Author" 
        options={options} 
        defaultValue={defaultValue}
        loading={loading}
        handleChange={handleChange}
      />
    </div>
  );
}

export default SelectAuthor;
