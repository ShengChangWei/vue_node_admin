const express = require('express');
const bodyParser = require('body-parser')

// 实例化express
const app = express();
// 配置 body-parser 解析表单 POST 请求体
// 只有配置了该插件，就可以在请求处理函数中使用 req.body 来访问请求体数据了
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const router = require('./router')
app.use(router)
app.listen(5000, () => console.log('running...'))