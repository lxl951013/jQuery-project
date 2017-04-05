$(function(){
	/*
	   head-top动态效果
	   1.鼠标移入高亮，隐藏显示，添加边框
	   2.鼠标移出高亮、边框移除，隐藏
	
	*/

	var $head=$('.head-top');
	var $box=$head.children('.box-right');
	$box.on('mouseenter','.box-right a',function(){
		console.log(666);
	})

})