const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT) || 3000; //รับค่าจาก ENV ถ้าไม่ได้ส่งมาจะ default port 3000
const dev = process.env.NODE_ENV != 'production';
const app = next({ dev }); //เลือกโหมดให้กับ nextjs ใช้โหมด dev

// handle url
const handle = app.getRequestHandler();

// กำหนด url
app.prepare().then(() => {
  const server = express();

  /* ------------------- URL -------------------- */

  server.get('/blog/detail/:id',(req, res) => {
    // ส่ง req, res ที่รับได้มาให้ app.render อีกที
    // app.render(req, res, url อะไร)
    return app.render(req, res, '/blog/detail', { id: req.params.id })
  })

  // ถ้าเข้ามาจาก url อื่นๆที่ไม่ใช่จากด้านบน
  server.get('*', (req, res) => {
    // return กลับเข้ารูปแบบของ nextjs แบบเดิม เช่น error page ไรงี้
    return handle(req, res);
  })

  /* ------------------- END URL -------------------- */

  // เปิดใช้ express
  server.listen(port, err => {
    if (err) throw err;
    console.log('Ready on http://localhost:' + port )
  })
})