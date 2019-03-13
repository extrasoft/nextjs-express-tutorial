import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

class Layout extends Component {
  render() {
    const { children, title = 'Next JS' } = this.props; //Props ของ layout
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
          <link rel="stylesheet" href="../static/css/style.css"/>

          <title>{title}</title>
        </Head>
        <Header/>
        {children}
        <Footer/>
      </div>
    );
  }
}

export default Layout