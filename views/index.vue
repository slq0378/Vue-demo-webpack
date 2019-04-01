<template>
    <div>
        <h1>首页</h1>
        <div>router 跳转方式</div>
        <router-link to="/about">跳转到关于</router-link>
        <router-link to="/user/asdfa/song/12" tag="li">跳转到用户</router-link>
        <button @click="click">点击跳转</button>
        <button @click="goBack"></button>
    </div>
</template>
<script type="text/javascript">
export default {
	methods:{
		click(){
			this.$router.push({path:'/about'})
		},
		goBack(){
			// 返回上面多少级-1，前进多少级 1
			this.$router.go(-1)
		}
	}
}
</script>
<style type="text/css" scoped>
</style>