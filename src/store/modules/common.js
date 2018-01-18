import specs from '../../json/specs.json';
import Vue from 'vue';
import Axios from '../../lib/ajaxBase';
import Storage from '../../lib/Storage';
import {Base64} from 'js-base64';
import {Toast} from 'mint-ui';

const state = {
	title:'home page 12121',
	navs: specs.bottomNav,
	user:{}
};

const getters = {
	loginStatus(state){
		return !!state.user.user_id
	}
};

const actions = {
	auth(context,params){
		Axios.post('/api/userinfo/login',{
			username: params.username,
			password: Base64.toBase64(params.password),
			code: params.code
		})
		.then(function(res){
			if(res.status == 200){
				if(res.data.Code == 200){
					Storage.sessionSet('user_id',res.data.content.Value);
					context.commit('auth',res.data);
					params.sucFunc && params.sucFunc();
				}
				else{
					Toast(res.data.Msg || '登录异常，请稍后重试！');
				}
			}
		})
		.catch(function(res){
			Toast(res.message || '网络异常，请稍后重试！');
		})
	},
	getUserInfo({commit,state}){

	}
};

const mutations = {
	topage(state,payload){
		function getPage(arr,name){
			return arr.find(function(item){
				if(item.name != name && item.children){
					return getPage(item.children,name);
				}
				return item.name == name;
			});
		}
		var currentRout = getPage(payload.routes,payload.pageName);
		state.navs.forEach((item,idx) => {
			if(idx == currentRout.navIndex){
				item.state = 'on';
			}
			else{
				item.state = '';
			}
		});
		state.title = currentRout.title;
	},
	auth(state,payload){
		if(payload.Code == 200){
			Vue.set(state.user,'user_id', payload.content.Value);
		}
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};