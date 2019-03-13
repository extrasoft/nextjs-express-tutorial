import React, { Component } from 'react';
import Layout from '../components/Layout';

class Error extends Component {

  static getInitialProps({ res, error }) {
    // { res, error } จะเป็นตัวเช็คว่ามี error หรือไม่
    // ไม่ต้องใช้ async กับ await เพราะเราไม่ได้ดึงข้อมูลจาก api ไม่ต้องรอ
    const statusCode = res ? res.statusCode : error ? error.statusCode : null; // if elseif else
    return { statusCode };
  }

  render() {
    return (
      <Layout>
        <div className='container'>
          <div className='text-center'>
            <h3>
              { 
                this.props.statusCode ?
                  'An eror ' + this.props.statusCode + ' occured on server' :
                  'An error occured on client'
              }
            </h3>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Error;