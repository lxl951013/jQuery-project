/* 注册页面模块*/
$(function(){
	var $user=$('#user');
	var $tel=$('#tel');
	var $yanzheng=$('#yanzheng');
	var $btn=$('button');
	
	

/*
   1.用户名
*/
    //以中英文开头，与数字字母下划线组合
	$user.on('keyup',function(){

		var $userValue=$user.val();
		if($userValue){
			if(!/^[a-z\u2E80-\u9FFF]+\w+$/.test($userValue)){
			    $user.next().next().html('以中英文开头，与数字字母下划线组合');
			    // return false;
			    
		    }else{
			    $user.next().next().html('用户名可用');
			    
		    }
		}else{
			 $user.next().next().html('用户名不能为空');
			 
		}
		
		
	});

/* 
    2.手机号码
    不能为空

    请输入您的手机号码

*/
    $tel.on('keyup',function(){
    	var $telValue = $tel.val();
        $tel.next().next().html('');
    	if($telValue){

    		if(!/^1[34578]\d{9}$/.test($telValue)){ 			
			    $tel.next().next().html('手机号不合法');
			    
		     }else{
		     	 $tel.next().next().html('手机号合法');
		     }

    	}else{
    		$tel.next().next().html('手机号码不能为空');
			   
    	}

    });


 /*
     3.验证码
     不能为空
*/
   //随机生成4位数
	var $P=$yanzheng.next().children('p');
	var $I=$P.next();

    //1)进入页面后自动生成
	$randomNum();
    //2)点击  换一个  生成另一个
	$I.on('click',function(){        
		 $randomNum();
	});
    function $randomNum(){
        	var str = '0123456789abcdefghijklnmopqrstuvwxyz';
			var res = '';
			for(var i=0;i<4;i++){
				var idx = parseInt(Math.random()*str.length);
				res += str[idx];
			    }
            $P.html(res);
			    
		}
    //3)输入验证       
	$yanzheng.on('keyup',function(){
		$yanzheng.next().next().html('');
		//获取验证码
		var $PValue=$P.html();

    	var $yanzhengValue = $yanzheng.val();
    	

    	if($yanzhengValue){
             if($yanzhengValue===$PValue){
             	$yanzheng.next().next().html('确定吗？');
             }else{
             	$yanzheng.next().next().html('验证码错误');
             }
    		

    	}else{
    		$yanzheng.next().next().html('验证码不能为空');
			   
    	}

    });
     

    //点击验证
    $btn.on('click',function(){

    	var $userValue=$user.val();
    	if(!/^[a-z\u2E80-\u9FFF]+\w+$/.test($userValue)){
    		return false;
    	}

    	var $telValue = $tel.val();
    	if(!/^1[34578]\d{9}$/.test($telValue)){
    		return false;
    	}

    	var $PValue=$P.html();
    	if($yanzhengValue!==$PValue){
    		return false;

    	}
          
		    
    });

	
	

});