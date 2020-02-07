import {useQuery} from '@apollo/react-hooks';
import {propOr} from 'ramda';
import {ALL_CATEGORIES_QUERY} from '../../../lib/queries';
import {getUserNames} from '../../../utility';
import Message from '../Message';
import {Select} from '.';

type Props = {
  defaultValue?: string,
  handleChange: Function
}

const SelectCategory= ({defaultValue, handleChange}: Props) => {
  // Fetch the current item by query parameter id.
  const { loading, error, data } = useQuery(ALL_CATEGORIES_QUERY);

  // Get the names from the data or empty array.
  const options = getUserNames(propOr([], 'categories')(data));

  return (
    <div>
      {error && (
        <Message 
          message={error.message}
          type='error'
        />
      )}
      <Select 
        id="category" 
        label="Category" 
        options={options} 
        defaultValue={defaultValue}
        loading={loading}
        handleChange={handleChange}
      />
    </div>
  );
}

export default SelectCategory;
