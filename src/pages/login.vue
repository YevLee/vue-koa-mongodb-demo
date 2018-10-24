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
	export default {
		data() {
			return {
				userName: "",
				password: ""
			}
		},
		methods: {
			loginSubmit(e) {
				e.preventDefault();
				if (userName == "" || password == "") {
					this.$message({
						type: "info",
						massage: "请输入用户名或密码！"
					});
					return false;
				} else {
					if (this.userName != "123") {
						this.$message({
							type: "info",
							massage: "登陆失败"
						});
					} else {
						this.$message({
							type: "info",
							massage: "登陆成功！"
						});
						localStorage.setItem("token", this.userName);
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
