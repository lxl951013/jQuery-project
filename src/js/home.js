$(function(){

	
  /* 首页其他模块  */



	//鼠标滑过banner-left 显示隐藏
	var $figure1=$('.banner-left');
	
	$figure1.on('mouseenter','li',function(){
		$(this).children().children('span').css('display','none');
		$(this).children().children('img').css('display','block');
		$(this).children('.li-hide').css('display','block');

    });

     $figure1.on('mouseleave','li',function(){
		
        $(this).children().children('span').css('display','block');
		$(this).children().children('img').css('display','none');
		$(this).children('.li-hide').css('display','none');
    });


/*   轮播图1      */
     //获取元素
     var $carousel=$('.banner-center');
     var $list=$carousel.children().children('li');
     var $Img=$list.children('img')

     // 获取图片的数量和宽度
     var len=$list.length;  //3
     var idx=0;

     // 轮播效果
		 $carousel.timer = setInterval(autoPlay,3000);

      // 鼠标移入
		    $carousel.on('mouseenter','ul',function(){
		    		clearInterval($carousel.timer);
		    });
	  // 鼠标移出
		    $carousel.on('mouseleave','ul',function(){
		    		$carousel.timer = setInterval(autoPlay,3000);
		    });

	  //前按钮
		$carousel.children('.prev').on('click',function(){		
				idx--;
				showPic();
			});
		//后按钮
		$carousel.children('.next').on('click',function(){			
				idx++;
				showPic();
			});

		// 添加分页效果
		var $page=$carousel.children('span');


		function autoPlay(){
			idx++;

			showPic();
		}

		function showPic(){            			
            for(var i=0;i<len;i++){
            	$($list[i]).hide();
            	$($page[i]).removeClass('active');
            }
            // if(idx>2){
            //    idx=0;	
            // }
            if(idx<0){
				idx = len - 1;
			}else if(idx>len-1){
				// 立即切换到初始状态

				idx = 0;
			}

            $($list[idx]).show();
            $($page[idx]).addClass('active');
            			
		}


/*   轮播图2    */
     var $box=$('.box');
     var $ul=$box.children('ul');
     var $btnLeft=$box.children('.btnLeft');
     var $btnRight=$box.children('.btnRight');

	
     $btnLeft.on('click',function(){        
         	$ul.css('left','-1240px');
         
     });
     $btnRight.on('click',function(){        
         	$ul.css('left','0');
         
     });
});

