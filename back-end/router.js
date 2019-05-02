const express = require('express');
const user = require('./controllers/user');
const topics = require('./controllers/topics');

// 1. 调用 express.Router() 创建一个路由实例
const router = express.Router();

// 登录接口
router.post('/login', user.login);
// 查询所有表格信息
router.get('/topics/finadAllInfo', topics.finadAllInfo);
// 添加新内容
router.post('/topics/addTable', topics.addTable)

// 编辑表格
router.post('/topics/editTableById/:id', topics.editTableById);

// 删除表格
router.get('/topics/deleteTableByeId/:id', topics.deleteTableByeId);

// 3. 导出路由对象
module.exports = router