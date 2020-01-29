import React, {Component} from 'react';
import Navigation from '../../03-organisms/Navigation';

class Page extends Component {
  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
