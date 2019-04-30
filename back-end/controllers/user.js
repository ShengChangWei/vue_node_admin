const User = require('../models/user');

exports.signin = (req, res) => {
  User.findAll((err, results) => {
    if(err) {
      return res.sends ({code: 'error', message: '查询所有用户失败'})
    }
    return res.send({code: "ok", message: '查询所有用户成功', results: results}) 
  })
}

exports.getEmail =(req,res)=> {
  User.getByEmail("234@qq.com",(err, results) => {
     if(err) {
      return res.sends ({code: 'error', message: '查询邮箱失败'})
    }
    return res.send({code: "ok", message: '查询邮箱成功', results: results || []}) 
  })
}