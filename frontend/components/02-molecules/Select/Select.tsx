import {Form, Select as SelectBox} from 'antd';
import { domainToASCII } from 'url';
const {Item} = Form;
const {Option} = SelectBox;

type Props = {
  id: string,
  label: string,
  options: Array<string>,
  defaultValue? : string,
  loading?: boolean
  handleChange?: any
}

const Select = ({id, label, options, defaultValue, loading, handleChange}: Props) => {
  // For select lists by default, only the value us bubbled up in the event.
  // This custom handler is exposing the id of the item as well as the value.
  const customOnChange = (e: string) => {
    handleChange(id, e);
  }

  return (
    <Item 
      label={label}
      htmlFor={id}
      colon={false}
    >
      <SelectBox 
        id={id}
        defaultValue={defaultValue}
        loading={loading}
        onChange={customOnChange}
      >
        {options.map(option => (
          <Option 
            key={option}
            value={option}
          >
            {option}
          </Option>
        ))}
      </SelectBox>
    </Item>
  );
}

export default Select;
