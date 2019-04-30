import request from '../services/request.service';

const sysOrg = {

	/**
	 * 获取组织机构列表
	 * @returns {Observable<ServerData>}
	 */
    getSysUnitListTree() {
        return request.get('/UnitController/getUnitTree');
    },

	/**
	 * 添加用户
	 * @param {User} user
	 * @returns {Observable<ServerData>}
	 */
    addSysUser(user) {
        return request.post('/UserController/addUser', user);
    }
};

export default sysOrg;