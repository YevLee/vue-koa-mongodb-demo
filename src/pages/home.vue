<template>
    <div class="page">
       <div class="pageTitle">首页</div>
      <div class="content">
           <p>欢迎您，xxx</p>
          <el-button @click="toMine()">
              我的页面
          </el-button>
      </div>
    </div>
</template>
<script>
    export default{
        methods:{
					toMine(){
						this.$router.push({path:"/mine"})
					}
        }
    }
</script>
<style>

</style>

