import Instance from "../config/config.js"

export default {
	//测试一个接口
	testApi(){
		return Instance.get("http://api.apiopen.top/todayVideo");
	},
  //用户注册
  userRegister(data) {
    return Instance.post('/api/register', data);
  },
  //用户登录
  userLogin(data) {
    //return axios.post('/api/login', data); 
	return Instance.post('/api/login/login', data); 
	 //return axios.post('/api/login/login',data)
  },
  //获取用户
  getUser() {
    return Instance.get('/api/user');
  },
  //删除用户
  delUser(data) {
    return Instance.post('/api/delUser', data);
  }
}
