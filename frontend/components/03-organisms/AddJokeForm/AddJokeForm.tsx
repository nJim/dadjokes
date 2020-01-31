import react, {useState, ChangeEvent} from 'react';
import {Form, Input, Button} from 'antd';
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const {Item} = Form;
const {TextArea} = Input;

const CREATE_JOKE_MUTATION = gql`
  mutation CREATE_JOKE_MUTATION($content: String!) {
    createJoke(content: $content) {
      id
    }
  }
`;

const AddJokeForm = () => {
  const [form, setState] = useState({content: ''});

  const [addJoke, { data }] = useMutation(CREATE_JOKE_MUTATION);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setState({...form, [name]: value});
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    addJoke({ variables: { content: form.content } });
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Item 
        label="Submit a joke" 
        htmlFor="content"
        colon={false}
      >
        <TextArea 
          id="content" 
          name="content"
          placeholder="Insert Hahas" 
          required
          value={form.content}
          onChange={handleChange}
          autoSize={{minRows: 2}}
        />
      </Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddJokeForm;
