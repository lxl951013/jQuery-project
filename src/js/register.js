/* 注册页面模块*/
$(function(){
	var $user=$('.user');
	var $phone=$('.phone');
	var $verification=$('.verification');
	var $btn=$('button');

	//随机生成4位数
	var $P=$verification.children().children('p');
	var $I=$verification.children().children('i');


	$I.on('click',function(){
        var $randomNum=function(){
        	var str = '0123456789abcdefghijklnmopqrstuvwxyz';
			var res = '';
			for(var i=0;i<4;i++){
				var idx = parseInt(Math.random()*str.length);
				res += str[idx];
			    }
            $P.html(res);
			    
		}
		$randomNum();
	});
	
	


	$btn.on('click',function(){
		/*
         1.用户名
           不能为空
           以中英文开头，与数字字母下划线组合
           4-20个字符，一个汉字为两个字符，推荐使用
           中文会会员名字。一旦注册成功会员名将不能修改
		*/
         var $userValue=$user.val();
         if(!/^[a-z\u2E80-\u9FFF]+\w+$/.test($userValue)){
         	alert('请正确填写表单！');
         	c$user.children('span').html('66');
         	return false;
         }

		/* 
		 2.手机号码
		 不能为空
		 请输入您的手机号码

		*/
		var $phoneValue = $phone.val();
		if(!/^1[34578]\d{9}$/.test($phoneValue)){
			alert('手机号不合法');
			return false;
		}



		/*
         3.验证码
         不能为空

		 */


	});


	
	

});