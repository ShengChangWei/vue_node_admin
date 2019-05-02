import request from '../services/request.service'

const table = {
  // 获取所有table信息
  finadAllInfo () {
    return request.get('/topics/finadAllInfo')
  },
  addTable (params) {
    return request.post('/topics/addTable', params)
  },
  editTableById (id, params) {
    return request.post(`/topics/editTableById/${id}`, params)
  },
  deleteTableByeId (id) {
    return request.get(`/topics/deleteTableByeId/${id}`)
  }
}

export default table;
