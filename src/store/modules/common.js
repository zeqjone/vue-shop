import specs from '../../json/specs.json';
const state = {
	title:'home page 12121',
	navs: specs.bottomNav
};

const mutations = {
	topage(state,payload){
		function getPage(arr,name){
			return arr.find(function(item){
				if(item.children){
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
	}
}

export default {
	state,
	mutations
};