import react, {useState, ChangeEvent} from 'react';
import {Form, Input, Button} from 'antd';
import {useMutation} from '@apollo/react-hooks';
import {CREATE_JOKE_MUTATION} from '../../../lib/mutations';
import Message from '../../02-molecules/Message';

const {Item} = Form;
const {TextArea} = Input;

const AddJokeForm = () => {
  // Form values are stored in state.
  const [form, setState] = useState({content: ''});

  // Mutation for adding a new joke.
  const [createJoke, {loading, error}] = useMutation(CREATE_JOKE_MUTATION);

  // Update the form state when input values change.
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setState({...form, [name]: value});
  }

  // Execute the mutation on form submission.
  const handleSubmit = (e: any) => {
    e.preventDefault();
    createJoke({ variables: { content: form.content } });
  }
  return (
    <Form onSubmit={handleSubmit}>
      {error && (
        <Message 
          message={error.message}
          type='error'
        />
      )}
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
