import Vue from 'vue';
import VueRouter from 'vue-router';
import ajaxBase from './lib/ajaxBase';
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

Vue.prototype.$ajax = ajaxBase;

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

