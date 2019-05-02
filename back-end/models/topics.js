const db = require('./db-helper');

const moment = require('moment')

// 获取所有的topics
exports.findAllTopic = callback => {
  // 查询语句
  const sqlStr = 'SELECT * FROM `topics`'
  db.query(sqlStr, (err, results) => {
    if(err) {
      return callback(err);
    }

    callback(null, results)
  })
}


/**
 * 添加一个话题
 * @param  {Object}   topic    话题对象
 * @param  {Function} callback 回调函数（返回值都是通过回调函数来接收）
 * @return {undefined}            没有返回值
 */
exports.create = (topic, callback) => {
  const sqlStr = 'INSERT INTO `topics` SET ?'
  db.query(
    sqlStr,
    topic,
    (err, results) => {
      if (err) {
        return callback(err)
      }
      callback(null, results)
    }
  )
}

/**
 * 根据话题id更新话题内容
 * @param  {Number|String}   id    话题id
 * @param  {Object}   topic    要更新话题对象
 * @param  {Function} callback 回调函数
 * @return {undefined}            没有返回值
 */
exports.updateById = (id, topic, callback) => {
  const sqlStr = 'UPDATE `topics` SET `title`=?, `content`=? WHERE `id`=?'
  db.query(
    sqlStr,
    [
      topic.title,
      topic.content,
      id
    ],
    (err, results) => {
      if (err) {
        return callback(err)
      }
      callback(null, results)
    }
  )
}

/**
 * 根据话题id删除某个话题
 * @param  {Number}   id       话题id
 * @param  {Function} callback 回调函数
 * @return {undefined}            没有返回值
 */
exports.deleteById = (id, callback) => {
  const sqlStr = 'DELETE FROM `topics` WHERE `id`=?'
  db.query(
    sqlStr,
    [
      id
    ],
    (err, results) => {
      if (err) {
        return callback(err)
      }
      callback(null, results)
    }
  )
}