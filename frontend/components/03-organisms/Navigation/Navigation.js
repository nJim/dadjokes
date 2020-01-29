import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';

const Navigation = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="/about">
          <a>About</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link href="/submit">
          <a>Submit</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default Navigation;
