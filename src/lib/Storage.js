function Storage(){

}
Storage.prototype.sessionGet = function(key){
	return sessionStorage.getItem('th_' + key);
}
Storage.prototype.sessionSet = function(key,value){
	return sessionStorage.setItem('th_' + key,value);
}
Storage.prototype.sessionRemove = function(key){
	return sessionStorage.removeItem('th_' + key);
}
Storage.prototype.sessionClear = function(){
	return sessionStorage.clear();
}
Storage.prototype.localGet = function(key){
	return localStorage.getItem('th_' + key);
}
Storage.prototype.localSet = function(key){
	return localStorage.setItem('th_' + key);
}
Storage.prototype.localRemove = function(key){
	return localStorage.removeItem('th_' + key);
}
Storage.prototype.localClear = function(){
	return localStorage.clear();
}
export default new Storage();