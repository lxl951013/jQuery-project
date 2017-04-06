// 1.配置文件
requirejs.config({
	  //在加载模块时，在此文件找home，ajax，common

	// 设置别名，因为jquery文件不在js文件夹下
	// 格式：别名:真实路径
	paths:{
		'jquery':'jquery-3.1.1',
		'index' :'home',
		'gongyong-html':'gongyong-html',
		'gongyong':'gongyong',
		'home2':'home2',
		'home3':'home3',
		'register':'register',


	},

	// shim:{
	// 	'ajax':{
	// 		exports:'ajax'
	// 	},
	// 	'jQuery.prototype.gdszoom':{
	// 		deps: ["jquery"],
	// 		exports:'jQuery.prototype.gdszoom'
	// 	}
	// }
});

// 2.引入/加载其他模块
// 在requireJS中，一个模块就是一个js文件
// 引入模块的路径：
// requirejs(['jquery'],function($){
	
// });