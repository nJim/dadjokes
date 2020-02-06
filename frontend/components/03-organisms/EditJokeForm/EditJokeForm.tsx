import react, {useState, ChangeEvent} from 'react';
import {Form, Input, Button, Select} from 'antd';
import {useMutation, useQuery} from '@apollo/react-hooks';
import {UPDATE_JOKE_MUTATION} from '../../../lib/mutations';
import {SINGLE_JOKE_QUERY} from '../../../lib/queries';
import Loading from '../../01-atoms/Loading';
import {DeleteButton} from '../../01-atoms/Buttons';
import Message from '../../02-molecules/Message';

const {Item} = Form;
const {TextArea} = Input;
const { Option } = Select;

// TODO: Add proper typing on query parameter.
const EditJokeForm = ({id}: any) => {

  // Changed form values are stored in state.
  const [form, setFormState] = useState({});

  // First query the item by query parameter id.
  const { loading, error, data } = useQuery(SINGLE_JOKE_QUERY, {
    variables: { id: id },
  });

  const [editJoke] = useMutation(UPDATE_JOKE_MUTATION);

  // Update the form state when input values change.
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormState({...form, [name]: value});
  }

  // Execute the mutation on form submission.
  // Passing the id and any changed values.
  const handleSubmit = (e: any) => {
    e.preventDefault();
    editJoke({ variables: { 
      id: id,
      ...form 
    }});
  }

  // Exit early if loading.
  if (loading) return <Loading />;

  // Exit early if the joke can not be found by id.
  if (!data || !data.joke) return (
    <Message 
      message='Joke not found.'
      type='error'
    />
  );

  return (
    <Form onSubmit={handleSubmit}>
      {error && (
        <Message 
          message={error.message}
          type='error'
        />
      )}
      <Item 
        label="Update a joke" 
        htmlFor="content"
        colon={false}
      >
        <TextArea 
          id="content" 
          name="content"
          placeholder="Insert Hahas" 
          required
          defaultValue={data.joke.content}
          onChange={handleChange}
          autoSize={{minRows: 2}} 
        />
      </Item>
      <Item 
        label="Author" 
        htmlFor="author"
        colon={false}
      >
        <Select 
          id="author" 
          defaultValue="lucy" 
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
        </Select>
      </Item>
      <Item 
        label="Category" 
        htmlFor="category"
        colon={false}
      >
        <Select 
          id="category" 
          defaultValue="lucy" 
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
        </Select>
      </Item>
      
      <Button type="primary" htmlType="submit">
        Save Changes
      </Button>
      <DeleteButton id={id}>
        Delete
      </DeleteButton>
    </Form>
  );
}

export default EditJokeForm;
