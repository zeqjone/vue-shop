import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';
import Router from './router/routers.js';
import SysHead from './components/head.vue';
import Navbar from './components/navbar.vue';
import Mint from 'mint-ui';
import specs from './json/specs.json';
import md5 from 'js-md5';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Mint);

var axios = Axios.create({
	transformRequest:[function(data,headers){
		var strparams = '';
		var str = '';
		if(data){
			var arr = Object.keys(data);
			if(arr.length > 0){
				arr.sort().forEach(function(a){
					str += data[a]+'';
				});
				Object.assign(data,{license:md5(str)});
			}
			// 将参数拼接成字符串，支持 get，post 请求类型。
			Object.keys(data).forEach(function(a){
				strparams += a + '=' + data[a] + '&';
			})
			strparams = strparams.replace(/&$/,'');
		}
		return strparams;
	}]
});
Vue.prototype.$ajax = axios;

var vm = new Vue({
	router:Router,
	store,
	data: function() {
		return {
			pageTitle:"home page",
			bottomNav:specs.bottomNav
		};
	},
	template: '<div><SysHead v-bind:title="getTitle" />'
				+ '<div class="main"><router-view></router-view>'
				+ '</div>'
				+ '<Navbar v-bind:module="getNav" />'
				+ '</div>',
	components: { SysHead, Navbar },
	methods: {
		
	},
	computed:{
		getTitle(){
			return this.$store.state.common.title;
		},
		getNav(){
			return this.$store.state.common.navs;
		}
	}
}).$mount('#app');

