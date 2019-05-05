const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // 要连接的主机名
  user: 'root', // 要连接的数据库的用户名
  password: '123456', // 数据库密码
  database: 'vue_node' // 数据库
});

module.exports = connection