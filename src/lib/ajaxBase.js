import Axios from 'axios';
import md5 from 'js-md5';

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

export default axios;