//6������Ƹ���600����
//�����Ƹ���720px,������Ϊ720/100=7.2
document.getElementsByTagName('html')[0].style.fontSize=document.documentElement.clientWidth/6+'px';
window.onresize=function(){
	document.getElementsByTagName('html')[0].style.fontSize=document.documentElement.clientWidth/6+'px';
};
