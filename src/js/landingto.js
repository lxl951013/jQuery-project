/* 登陆页面模块*/
$(function(){
   //获取用户名及按钮
   var $user=$('.user').children('input');
   var $btn=$('.btn-loding').children('button');
   console.log(888);
   //点击按钮时跳转到首页，并保存信息到cookit
   $btn.on('click',function(){
   	  var $userValue=$user.val();
   	  console.log($userValue);
   });


	
});