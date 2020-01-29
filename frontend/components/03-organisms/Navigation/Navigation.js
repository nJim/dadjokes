import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';

const { Item } = Menu;

const Navigation = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{ lineHeight: '64px' }}
    >
      <Item key="1">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Item>
      <Item key="2">
        <Link href="/about">
          <a>About</a>
        </Link>
      </Item>
      <Item key="3">
        <Link href="/submit">
          <a>Submit</a>
        </Link>
      </Item>
    </Menu>
  );
}

export default Navigation;
