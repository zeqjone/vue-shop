import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../Home.vue';
import User from '../components/user/user.vue';
import UserLogin from '../components/user/login.vue';
import UserReg from '../components/user/reg.vue';
import UserInfo from '../components/user/info.vue';
import Cart from '../components/cart/index.vue';
import Good from '../components/good/index.vue';
import GoodList from '../components/good/list.vue';
import GoodDetail from '../components/good/detail.vue';

import Specs from '../json/specs.json';

var router = new VueRouter({
	routes: [{
		path:'/',
		redirect:'/home'
	},{
		name:'home',
		title:'home page',
		path: '/home',
		component: Home,
		navIndex:0
	}, {
		name:'good',
		title:'good template page',
		path: '/good',
		component: Good,
		navIndex:1,
		children: [{
			name: 'good-list',
			title: 'good list page',
			path: 'list',
			navIndex:1,
			component: GoodList
		}, {
			name: 'good-info',
			path: 'detail',
			navIndex:1,
			component: GoodDetail
		}]
	}, {
		name: 'cart',
		title: 'cart index',
		path:'/cart',
		component: Cart,
		navIndex:2,
	}, {
		name:'user',
		title: 'user template page',
		path: '/user',
		component: User,
		navIndex:3,
		children: [ {
			name:'user-profile',
			title: 'user profile ',
			path:'/info',
			navIndex:3,
			component: UserInfo
		},{
			name:'user-info',
			title: 'user info ',
			path:'info/:id',
			navIndex:3,
			component: UserInfo
		}]
	}, {
		name:'login',
		title: 'user login page',
		path: '/login',
		navIndex:3,
		component: UserLogin
	}, {
		name:'reg',
		title: 'user regist page',
		path: '/reg',
		navIndex:3,
		component: UserReg
	}]
});

router.beforeEach((to,from,next)=>{
	var currentPageName = to.name || 'home';
	this.a.app.$store.commit('topage',{routes:this.a.options.routes,pageName:currentPageName});
	next();
});


export default router;