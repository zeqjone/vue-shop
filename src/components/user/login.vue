<template>
	<form ref="form" :model="user" label-width="80px">
		<mt-field label="用户名" placeholder="请输入用户名" v-model="user.username"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="user.password"></mt-field>
		<mt-field label="验证码" placeholder="验证码" v-model="user.code" :attr="{maxlength:4}">
			<img :src="validCodeUrl" @click="refresh" />
		</mt-field>
		<div class="sec_form_btn">
			<mt-button type="primary" size="large" @click.prevent="dologin">登录</mt-button>
		</div>
	</form>
</template>

<script>
	import md5 from 'js-md5';
	import {Base64} from 'js-base64';
	import {Toast} from 'mint-ui';
	export default {
		name:'user-login',
		prop:['pageTitle'],
		data() {
			return {
				validCodeUrl:'/api/userinfo/getValidCode?',
				user:{
					username:'',
					password:'',
					code:''
				}
			}
		},
		beforeCreate(){
			if(sessionStorage.getItem('th_user_id')){
				this.$router.push({name:'user',params:{id:2323}});
			}
		},
		created() {
			this.$emit('topage');
		},
		methods: {
			dologin() {
				var that = this;
				if(!this.user.username){
					Toast('用户名不能为空！');
					return false;
				}
				if(!this.user.password){
					Toast('密码不能为空！');
					return false;
				}
				if(!this.user.code){
					Toast('验证码不能为空！');
					return false;
				}
				this.$ajax.post('/api/userinfo/login',{
					username: that.user.username,
					password: Base64.toBase64(that.user.password),
					code: that.user.code
				})
				.then(function(res){
					if(res.status == 200){
						if(res.data.Code == 200){
							sessionStorage.setItem('th_user_id',res.data.content);
							Toast('登录成功！');
							setTimeout(function(){
								that.$router.push({name:'user'});
							},2000);
						}
						else
							Toast(res.data.Msg);
					}
				})
				.catch(function(res){
					console.log(res);
				})
			},
			refresh(){
				this.validCodeUrl += 't=' + +new Date();
			}
		}
	}
</script>

<style scoped>
	form{
		max-width: 40rem;
		margin:2rem auto;
	}
	.sec_form_btn{
		width: 80%;
		margin:2rem auto;
	}
</style>