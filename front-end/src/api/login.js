import request from '../services/request.service';

const login = {
	loginByUserName(params) {
		return request.get('/login');
	},
	logOut() {
		return request.get('/logout.json');
	},
	/**
 * 获取当前用户菜单
 * @returns {Observable<any>}
 */
	getUserMenus() {
		return request.get('/getUserMenus.json');
	},

	/**
	 * 当前当前用户资源
	 * @returns {Observable<ServerData>}
	 */
	getUserResources() {
		return request.get('/getUserResources.json');
	}
};

export default login;