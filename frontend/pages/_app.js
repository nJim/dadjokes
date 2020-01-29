import App from 'next/app';
import Page from '../components/04-templates/Page';
import '../components/00-base/global.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );
  }
}

export default MyApp;
