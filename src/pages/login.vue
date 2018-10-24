<template>
	<div class="page">
		<header class="pageTitle">请登录</header>
		<div class="content">
			<div class="ipt-line">
				<input type="text" placeholder="用户名" v-model="userName">
			</div>
			<div class="ipt-line">
				<input type="text" placeholder="密码" v-model="password">
			</div>
			<button type="submit" @click="loginSubmit($event)">登陆</button>
		</div>
	</div>
</template>
<script>
	import axios from "../axios/apis/userModule.js"
	//console.log(axios);
	export default {
		data() {
			return {
				userName: "",
				password: ""
			}
		},
		mounted(){
			//测试一个api接口get方式
			axios.testApi().then((res)=>{
				console.log(res)
			})
		},
		methods: {
			loginSubmit(e) {
				e.preventDefault();
				if (this.userName == "" || this.password == "") {
					this.$message({
						type: "info",
						message: "请输入用户名或密码！"
					});
					return false;
				} else {
					if (this.userName != "123") {
						this.$message({
							type: "info",
							message: "登陆失败"
						});
					} else {
						this.$message({
							type: "info",
							message: "登陆成功！"
						});
						localStorage.setItem("token", this.userName);
						//指定一个错误的路由,使得登陆之后跳到权限页面
						this.$router.push({
							path: "/home"
						})
					}
				}
			}
		}

	};
</script>
<style>
	.toRegister {
		color: #333;
		font-size: 16px;
		text-align: left;
		padding-left: 60px;
	}
</style>
