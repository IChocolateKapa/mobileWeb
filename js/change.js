//6代表设计稿是600像素
//如果设计稿是720px,则数字为720/100=7.2
document.getElementsByTagName('html')[0].style.fontSize=document.documentElement.clientWidth/6+'px';
window.onresize=function(){
	document.getElementsByTagName('html')[0].style.fontSize=document.documentElement.clientWidth/6+'px';
};
