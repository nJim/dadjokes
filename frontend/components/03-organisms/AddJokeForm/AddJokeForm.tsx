import react, {Component, ChangeEvent} from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';

class AddJokeForm extends Component {
  state = {
    content: ''
  }
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }
  render() {
    return (
      <form>
        <label htmlFor="content">
          Submit a joke
          <input 
            type="text" 
            id="content" 
            name="content"
            placeholder="Insert Hahas" 
            required
            value={this.state.content}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}

export default AddJokeForm;
