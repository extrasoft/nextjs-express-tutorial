import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

const About = (props) => {
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

        <title>React App</title>
      </Head>
      <Header/>
      <div className='container col-md-5'>
        <h3>สวัสดีครับ</h3>
        <p className='title text-justify mt-4 mb-4'>
          เราคือร้านอาหาร ที่เป็นอาหารอร่อยเท่านั้นจริงๆ
          ไม่ให้ความสำคัญกับสุขภาพเท่าไหร่
          เพราะสุขภาพที่ดีนั้นคุณสามารถสร้างได้ด้วยการ "ออกกำลังกาย"
          ดังนั้นกินของอร่อยก่อน แล้วคุณจะมีกำลังไปทำในสิ่งที่คุณรัก ครับผม
        </p>
        <h4 className='text-success'>จาก เฮลตี้ คาเฟ่</h4>
      </div>
      <Footer company="Thanapon" email="thanapon.yenjam@gmail.com" />
    </div>
  );
}

export default About;