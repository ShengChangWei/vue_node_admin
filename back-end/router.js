const express = require('express');
const user = require('./controllers/user')

// 1. 调用 express.Router() 创建一个路由实例
const router = express.Router();

// 首页路由
router.get('/login', user.signin);
router.get('/getEmail', user.getEmail);

// 3. 导出路由对象
module.exports = router