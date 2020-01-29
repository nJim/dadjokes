import React from 'react';
import { Menu } from 'antd';

const Navigation = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">About</Menu.Item>
      <Menu.Item key="3">Submit</Menu.Item>
    </Menu>
  );
}

export default Navigation;
