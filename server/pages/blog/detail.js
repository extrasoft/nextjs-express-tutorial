import React, { Component} from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';

class Detail extends Component {

  static async getInitialProps({ query }) {
    // { query } = parameter ที่ส่งมาหลังจาก url....?id=
    const res = await axios.get('http://localhost:3001/blogs/' + query.id)
    return { blog: res.data }
  }

  render() {
    const { blog } = this.props; 
    const update_date = new Date(blog.updated_date);
    return (
      <Layout>
        <div className='container'>
          <h1 className='mt-4 mb-4 title'>{blog.subject}</h1>
          <div className='row'>
            <div className='col'>
              <img className='img-fluid' src={blog.thumbnail}/>
            </div>
            <div className='col'>
              <div className='text-justify detail'>
                {blog.detail}
              </div>
              <hr/>
              <h5 className='text-success'>
                เขียนโดย {blog.created_by.user.firstname + ' ' + blog.created_by.user.lastname}
              </h5>
              <h5 className='text-muted text-right'>
                แก้ไขเมื่อ {update_date.toLocaleDateString()}
              </h5>

            </div>
          </div>
        </div>
        {/* รูปแบบการกำหนด style ของ nextjs */}
        <style jsx>
        {
          `
          .title {
            color: darkgreen;
            text-align: center;
          }
          .detail {
            color: black;
            word-spacing: 8px;
          }
          `
        }
        </style>
      </Layout>
    );
  }
}

export default Detail