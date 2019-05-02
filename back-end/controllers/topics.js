const Topics = require('../models/topics');
const moment = require('moment')
exports.finadAllInfo = (req, res) => {
  Topics.findAllTopic((err, results) => {
    if(err) {
      return res.sends ({code: 'error', message: '查询信息失败'})
    }
    return res.send({code: "ok", message: '查询用户成功', result: results}) 
  })
}

// 添加新数据
exports.addTable = (req, res) => {
  const body = req.body
  body.createdAt = moment().format('YYYY-MM-DD HH:mm:ss') // 创建时间
  body.userId = 122; // 这个userId应该登录人的id添加，
  Topics.create(body, (err, results) => {
    if (err) {
      return res.send({
        code: 500,
        message: err.message
      })
    }
    res.send({
      code: 'ok',
      message: '添加数据成功'
    })
  })
}


exports.editTableById = (req, res) => {
  const {id} = req.params // 要修改的话题 id
  const body = req.body 
  Topics.updateById(id, body, (err, results) => {
    if (err) {
       return res.send({
        code: 500,
        message: err.message
      })
    }
    res.send({
      code: 'ok',
      message: '修改数据成功'
    })
  })
}

exports.deleteTableByeId = (req, res,) => {
  const {id} = req.params; // get请求参数获取
  Topics.deleteById(id, (err, results) => {
    if (err) {
    return res.send({
        code: 500,
        message: err.message
      })
    }
    res.send({
      code: 'ok',
      message: '删除成功'
    })
  })
}