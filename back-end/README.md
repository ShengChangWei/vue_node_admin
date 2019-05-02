# vue 后端接口

## 1、准备

### 1.1 需要本地安装mysql

```shell
    运行vue_node.sql文件，如果导入不成功,根据vue_node.sql新建表
```
```
    cd back-end
    node app.js
```


## 2、接口文档

```shell
    baseUrl: http://localhost:5000
```

### 2.1 登录接口

```shell
    请求类型： post
    接口路径：/login
```

> 请求参数列表

| 变量名 |       含义    |       类型       |
|--------|--------------|------------------|
| username| 用户名       | string           |
| password| 密码         | string           |

> 响应参数列表

| 变量名  | 含义         | 类型   | 备注   |
|--------|--------------|--------|----------|
| code    | 响应码       | string|   error: 请求错误 ok: 登录成功 0： 用户名错误 1：密码错误 |
| message | 响应信息      | string | 登录失败、密码错误、用户名错误、登录成功 |
| result | 响应结果       | string | 登录成功的token |

> 返回json

```json
{
    "code":"ok",
    "message":"登录成功",
    "results":{"token":"admin0000-00-00 00:00:00"}
}
```

### 2.2 表格数据接口

#### 2.2.1 获取所有表格数据

```shell
    请求类型： get
    接口路径：/topics/finadAllInfo
```

> 请求参数列表
```shell
 无
```

> 返回参数

| 变量名  | 含义         | 类型   | 备注   |
|--------|--------------|--------|----------|
| code    | 响应码       | string|   ok: 请求成功 |
| message | 响应信息      | string | 请求信息 |
| result | 响应结果       | Arrary | 表格数据 |

> 返回json

```json

{
    "code":"ok",
    "message":"查询用户成功",
    "result":[
        {
            "id":7,
            "title":"测试",
            "content":"当我的",
            "categoryId":null,
            "userId":102,
            "createdAt":"2018-03-29T05:42:39.000Z",
            "updatedAt":"2019-05-02T08:35:05.000Z"
        },
        {
            "id":11,
            "title":"测试2",
            "content":"123让让他后台",
            "categoryId":null,
            "userId":102,
            "createdAt":"2018-03-29T12:43:46.000Z",
            "updatedAt":"2019-05-02T08:35:13.000Z"
        }
    ]
}
```

#### 2.2.2 添加单条数据

```shell
 请求类型： post
 接口路径：/topics/addTable/
```

> 请求参数列表

| 变量名 |       含义    |       类型       |
|--------|--------------|------------------|
| title| 标题       | string                |
| content| 内容         | string           |

> 返回参数列表

| 变量名  | 含义         | 类型   | 备注   |
|--------|--------------|--------|----------|
| code    | 响应码       | string|   ok: 请求成功 |
| message | 响应信息      | string | 请求信息 |

#### 2.2.3 根据id编辑单条数据

```shell
 请求类型： post
 接口路径：/topics/editTableById/:id
```

> 请求参数列表

| 变量名 |       含义    |       类型       |
|--------|--------------|------------------|
| title| 标题       | string                |
| content| 内容         | string           |

> 返回参数列表

| 变量名  | 含义         | 类型   | 备注   |
|--------|--------------|--------|----------|
| code    | 响应码       | string|   ok: 请求成功 |
| message | 响应信息      | string | 请求信息 |


#### 2.2.4 根据id删除单条数据

```shell
 请求类型： get
 接口路径：/topics/deleteTableByeId/:id
```

> 请求参数列表

```shell
get方式拼接id
```

> 返回参数列表

| 变量名  | 含义         | 类型   | 备注   |
|--------|--------------|--------|----------|
| code    | 响应码       | string|   ok: 请求成功 |
| message | 响应信息      | string | 请求信息 |