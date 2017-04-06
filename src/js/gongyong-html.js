
$(function(){
	
	 /* 公共头部、尾部模块*/ 
	var $figure1=$('.box-right');
	
	$figure1.on('mouseenter','.big',function(){
		$(this).children('.hidden').css('display','block');
		$(this).children('span').css('display','block');
		$(this).addClass('hide');


        
    });
    $figure1.on('mouseleave','.big',function(){
		$(this).children('.hidden').css('display','none');
		$(this).children('span').css('display','none');
		$(this).removeClass('hide');

        
    });




 /* 侧边栏模块*/ 
    var $Sidebar=$('.Sidebar');
    var $rocket=$Sidebar.children('.rocket');
    //滚动显示事件
    $(window).scroll(function(){
         var $top=$(document).scrollTop();
         if($top>=700){
             $rocket.css('display','block');
         }else{
         	 $rocket.css('display','none');
         }
    });

    //点击rocket回到顶部事件
    $rocket.on('click',function(){
    	var $scrollTop = $(window).scrollTop();

    	var timer=setInterval(function(){
            // 这个速度会根据滚动距离大小而改变
    		var speed = parseInt($scrollTop/10);

    		// 在速度小于5时清除定时器
		   if(speed < 5){
			    $scrollTop = speed = 0;
			    clearInterval(timer);
		    }

             $scrollTop = $scrollTop - speed;

             // 改变滚动条滚动过的距离
			 $(window).scrollTop(0,$scrollTop);

    	},30);

    });




	

});
