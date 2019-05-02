import request from '../services/request.service';

const login = {
	login(params) {
		return request.post('/login', params);
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
