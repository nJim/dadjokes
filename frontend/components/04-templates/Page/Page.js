import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import Navigation from '../../03-organisms/Navigation';

class Page extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <Navigation />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Jim Vomero ©2020</Footer>
      </Layout>
    );
  }
}

export default Page;
