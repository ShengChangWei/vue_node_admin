const express = require('express');


// 实例化express
const app = express();
const sql = require('./sql/sql')

const router = require('./router')
app.use(router)
app.listen(5000, () => console.log('running...'))