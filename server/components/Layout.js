import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

// การ import ชื่อไฟล์ที่เป็น static จะต้องติดตั้ง module next-css หรือ next-sass ก่อน
// และต้องไป config ไฟล์ที่ next.config.js ด้วย

// import '../static/css/style.css';
import '../static/css/style.scss'; //import .scss จะต้องลงโมดูล node-sass เพิ่มด้วย

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
          {/* สำหรับไม่ได้ใช้การ import */}
          {/* <link rel="stylesheet" href="../static/css/style.css"/> */}

          {/* ถ้าเราใช้จากการ import มามันจะถูก pack และ bundle ไว้ที่ folder _next เราต้องเติม path ใหม่ */}
          <link rel="stylesheet" href="/_next/static/style.css"/>

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