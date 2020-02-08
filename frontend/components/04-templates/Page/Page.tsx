import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
import {theme, CenterLayout, CenterText} from '../../00-base/theme';
import Navigation from '../../03-organisms/Navigation';

const ContentInner = styled.div`
  background: #fff;
  margin: 24px;
  padding: 24px;
  max-width: ${props => props.theme.maxWidth};
  min-width: 100%;
  @media (min-width: ${props => props.theme.bpMobile}) {
    min-width: ${props => props.theme.minWidth};
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout className="layout">
          <Header>
            <Navigation />
          </Header>
          <Content>
            <CenterLayout>
              <ContentInner>
                {this.props.children}
              </ContentInner>
            </CenterLayout>
          </Content>
          <Footer>
            <CenterText>
              Jim Vomero |&nbsp;
              <a href="https://github.com/njim">GitHub</a>
            </CenterText>
          </Footer>
      </Layout>
      </ThemeProvider>
    );
  }
}

export default Page;
