import React, {Component, ReactNode} from 'react';
import {Alert} from 'antd';

type Props = {
  message: String | ReactNode,
  type: "success" | "info" | "warning" | "error" | undefined
}

class Message extends Component<Props> {  
  state = {
    visible: true,
  };
  handleClose = () => {
    this.setState({ visible: false });
  };
  render() {
    const {message, type} = this.props;
    return (
      <div>
        {this.state.visible ? (
          <Alert
            message={message}
            type={type}
            closable
            afterClose={this.handleClose}
          />
        ) : null}
      </div>
    );
  }
}

export default Message;
          