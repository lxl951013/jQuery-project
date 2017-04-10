/* 登陆页面模块*/
$(function(){
   //获取用户名及按钮
   var $user=$('.user').children('input');
   var $btn=$('.btn-loding').children('button');
   console.log($user,$btn);
   //点击按钮时跳转到首页，并保存信息到cookit
   $btn.on('click',function(){
      console.log(666);
      location.href='../index.html';
   });


	
});