const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // 要连接的主机名
  user: 'root', // 要连接的数据库的用户名
  password: '123', // 数据库密码
  database: 'community' // 数据库
});

exports.login = (callback) => {
    connection.query('select * from users', (err, res) => {
    if (err) {
      throw err
    }
     callback({code: 'ok', message: '获取资源成功', results: res}) 
  })
}