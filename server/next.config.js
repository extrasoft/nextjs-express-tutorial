/* กรณีที่จะใช้การ import css จะต้องทำไฟล์ config ด้วย */


// const withCSS = require('@zeit/next-css');
// module.exports = withCSS();

// ชื่อไฟล์จะเป็น นามสกุลจะเป็น .scss แต่ module จะชื่อ sass
const withSASS = require('@zeit/next-sass');
module.exports = withSASS();
