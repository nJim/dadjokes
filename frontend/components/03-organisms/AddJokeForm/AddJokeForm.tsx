import react, {Component, ChangeEvent} from 'react';
import {Form, Input, Button} from 'antd';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';

const {Item} = Form;
const {TextArea} = Input;

class AddJokeForm extends Component {
  state = {
    content: ''
  }
  handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }
  render() {
    return (
      <Form>
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
            value={this.state.content}
            onChange={this.handleChange}
            autoSize={{minRows: 2}}
          />
        </Item>
        <Button type="primary">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddJokeForm;
