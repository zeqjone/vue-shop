<template>
	<div>
		<div v-if="loginStatus" >
			欢迎，{{user.c_userName}},
			{{user.c_realName}}
			{{user.c_tel}}
		</div>
		<div v-if="!loginStatus" >
			<router-link to="/login">请登录</router-link>
		</div>

		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name:'user',
	data() {
		return {
			loginStatus: !!sessionStorage.getItem('th_user_id'),
			user:{
				c_userName:'游客',
				c_realName:'游客',
				c_tel:''
			}
		};
	},
	created() {
		var that = this;
		this.$ajax.get('/api/userinfo/get')
		.then(function(res){
			if(res.status == 200){
				if (res.data.Code == 200) {
					that.loginStatus = true;
					that.user = res.data.content;
				}
				else if(res.data.Code == 405){
					sessionStorage.removeItem('th_user_id');
					that.$router.push('/login');
				}
			}
		});
	},
	computed:{
		getUrlUserName() {
			return this.$route.query.username || '游客';
		}
	},
	methods:{
	}
}
</script>