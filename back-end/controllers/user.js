const User = require('../models/user');

// exports.signin = (req, res) => {
//   User.findAll((err, results) => {
//     if(err) {
//       return res.sends ({code: 'error', message: '查询所有用户失败'})
//     }
//     return res.send({code: "ok", message: '查询所有用户成功', results: results}) 
//   })
// }

exports.login =(req,res)=> {
  const body = req.body;
  User.getPassword(body.password,(err, user) => {
     if(err) {
      return res.sends ({code: 'error', message: '登录失败'})
    }

    if(!user) {
    return res.send({code: "1", message: '密码错误'}) 
  };
  // 密码正确后，查询用户名是否正确
  if(body.username !== user.username) {
      return res.send({code: "0", message: '用户名错误'}) 
  }

   return res.send({code: "ok", message: '登录成功', result: {token: user.nickname+user.createdAt}}) 
   
  })
}