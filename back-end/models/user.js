const db = require('./db-helper');

// 查询所有用户
exports.findAll = callback => {
  // 查询语句
  const sqlStr = 'SELECT * FROM `users`'
  db.query(sqlStr, (err, results) => {
    if(err) {
      return callback(err);
    }

    callback(null, results)
  })
}

/**
 *  获取email
 */
exports.getPassword = (email, callback) => {
  const sqlStr = 'SELECT * FROM `users` WHERE `password`=?'
  db.query(
    sqlStr,
    [email],
    (err, results) => {
      if (err) {
        return callback(err)
      }
      callback(null, results[0])
    }
  )
}