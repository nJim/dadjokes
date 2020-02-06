import {Form, Select as SelectBox} from 'antd';
const {Item} = Form;
const {Option} = SelectBox;

type Props = {
  id: string,
  label: string,
  options: Array<string>,
  defaultValue? : string
}

const Select = ({id, label, options, defaultValue}: Props) => {
  return (
    <Item 
      label={label}
      htmlFor={id}
      colon={false}
    >
      <SelectBox 
        id={id}
        defaultValue={defaultValue}
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
