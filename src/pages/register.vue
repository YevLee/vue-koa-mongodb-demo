<template>
    <div class="page">
        <header class="pageTitle">请注册</header>
        <div class="content">
         <div class="ipt-line">
         	<input type="text" placeholder="用户名" v-model="userName">
         </div>
         <div class="ipt-line">
         	<input type="text" placeholder="密码" v-model="password">
         </div>
           <button type="submit" @click="RegisterSubmit($event)">登陆</button>
        </div>
    </div>
</template>
<script>
export default {
  data(){
		return{
			userName:"",
			password:""
		}
	},
	methods:{
		RegisterSubmit(e){
			e.preventDefault();
			console.log(222)
		}
	}
};
</script>