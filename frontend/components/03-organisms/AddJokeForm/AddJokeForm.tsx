import react, {useState, ChangeEvent} from 'react';
import Link from 'next/link';
import {Form, Input, Button} from 'antd';
import {useMutation} from '@apollo/react-hooks';
import {CREATE_JOKE_MUTATION} from '../../../lib/mutations';
import Message from '../../02-molecules/Message';
import {SelectAuthor, SelectCategory} from '../../02-molecules/Select';

const {Item} = Form;
const {TextArea} = Input;

const AddJokeForm = () => {
  // Empty form state.
  const initForm = {content: ''};

  // Form values are stored in state.
  const [form, setFormState] = useState(initForm);
  // The id of the latest joke.
  const [newJoke, setNewJoke] = useState('');

  // Mutation for adding a new joke.
  const [createJoke, {error}] = useMutation(
    CREATE_JOKE_MUTATION,
    {
      onCompleted({createJoke}) {
        // Check for the presence of joke to indicate success.
        if (createJoke && createJoke.id) 
          handleSuccess(String(createJoke.id));
      }
    }
  );

  // Update the form state when input values change.
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormState({...form, [name]: value});
  }

  // Custom update function to handle values from select lists.
  const handleSelectChange = (name: string, value: string) => {
    setFormState({...form, [name]: value});
  }

  // Execute the mutation on form submission.
  const handleSubmit = (e: any) => {
    e.preventDefault();
    createJoke({ variables: { content: form.content } });
  }

  // Provide success message, clear form, link to joke.
  const handleSuccess = (id: string) => {
    setFormState(initForm);
    setNewJoke(id);
  }

  return (
    <Form onSubmit={handleSubmit}>
      {error && (
        <Message 
          message={error.message}
          type='error'
        />
      )}
      {newJoke && (
        <Message 
          type='success'
          message={
            <span>Ba dum tss. Thank you for the 
              <Link href={{pathname: '/joke', query: {id: newJoke}}}>
                <a> new joke </a>
              </Link>
              😆
            </span>
          }
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

      <SelectAuthor 
        handleChange={handleSelectChange}
      />

      <SelectCategory 
        handleChange={handleSelectChange}
      />

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddJokeForm;
