/* 购物车的其他模块*/
$(function(){
	/*
	   
	*/
	
	//获取商品列表页的cookie,用对应的id获取商品信息
	var $cookie=document.cookie.split('=');
	var $id=$cookie[1];
	console.log($id);


   //获取页面元素
	var $detailsLeft=$('.details-left');
	var $detailsRight=$('.details-right');
	var $boxTop=$detailsLeft.children('.box-top');
   

   //请求对应id数据库信息，写入页面元素
  	$.ajax({
		url: 'http://localhost/myproject/src/shopping.php?id='+$id,
		type: 'GET',
		dataType: 'JSON',

		success:function(data){
            console.log(data);
			data.map(function(item){
				$detailsRight.children('h3').html(`${item.brandname}`+`${item.goodsname}`);
				$detailsRight.children('.mig').children('ul').children('li').children('p').children('i').html(`${item.price}`);
				$boxTop.html(`<img src="${item.imgurl}">`);
				$detailsLeft.children('.box-center').html(`<span><img src="${item.spanurl1}"></span><span><img src="${item.spanurl2}"></span>`);
				$detailsRight.children('.choose').children('.choose1').html(`<span><img src="${item.spanurl1}"></span><span><img src="${item.spanurl2}"></span>`);
			});
			//添加类名		
			$boxTop.children('img').addClass('IMG');
			$detailsLeft.children('.box-center').children('span').addClass('SPAN');
            $detailsLeft.children('.box-center').children('span').children('img').addClass('MIMG');
            $detailsRight.children('.choose').children('.choose1').children('span').addClass('RSPAN');
            $detailsRight.children('.choose').children('.choose1').children('span').children('img').addClass('RMIMG');

	 /* 放大镜效果 
	    1）获取页面元素
	    2）鼠标移入事件
	        * 生成放大镜区域效果
	        * 生成大图
	        * 计算小图与大图的比例ratio
	    3）鼠标移动事件
	        * 把放大镜中心定位到鼠标位置
	        * 根据鼠标在小图上的移动，定位大图的位置
	                鼠标在小图上移动10px,大图移动10/ratio
	    4）鼠标移出事件
	        * 移除大图
	        * 移出放大镜
	   
	    */



	    //1.获取页面元素
	    var $smallContainer=$boxTop;
	    var $smallImg=$smallContainer.children();


	    // 生成放大镜
	    var $zoom=$('<span/>');
	    $zoom.addClass('minzoom');
	    


	    //生成大图区域
	    var $bigContainer=$('<div/>');
	    $bigContainer.addClass('arbzoom');
	    

	    var $bigImg=$('<img>');
	    $bigImg[0].src=$smallImg[0].src;
	    $bigImg.addClass('bigImg');
	    $bigContainer.append($bigImg);

	    
        
        //定位大图区域位置
        var left=0; 
        var gapL=20;
        var left= $smallContainer.offset().left + $smallImg.outerWidth()+gapL;
        var top = $smallContainer.offset().top;
		$bigContainer.css({
						top:top,
						left:left,
					   });


        //小图与大图的比例
        var ratio;



	    //2.鼠标移入事件
	    $smallContainer.on('mouseover',function(e){
	    	//往页面写入放大镜和大图
	    	$smallContainer.append($zoom);
	    	$('body').append($bigContainer);
          
            // 必须把大图写入页面后再计算比例
            // 否则bigImg.offsetWidth为0
            ratio = $smallImg.outerWidth()/$bigImg.outerWidth();
           
            

            // 根据小图与大图的比例改变放大镜的形状
            //$zoom[0].style.width=$bigContainer[0].offsetWidth*ratio + 'px';
            //$zoom[0].style.height = $bigContainer[0].offsetHeight*ratio + 'px';

	    });

	    // 3）鼠标移动事件
	    $smallContainer.on('mousemove',function(e){
	    	var offset = $smallContainer.offset();

			// 把放大镜中心定位到鼠标位置
		    var left = e.pageX - offset.left - $zoom.outerWidth()/2;
		    var top = e.pageY - offset.top - $zoom.outerHeight()/2;

		    // 限定放大镜移动的区域
		        if(left < 0){
		            left = 0;
		        }else if(left > $smallContainer.outerWidth() - $zoom.outerWidth()){
		            left = $smallContainer.outerWidth() - $zoom.outerWidth()
		        }

		        if(top < 0){
		            top = 0;
		        }else if(top > $smallContainer.outerHeight() - $zoom.outerHeight()){
		            top =$smallContainer.outerHeight() - $zoom.outerHeight()
		        }

		        $zoom.css({left:left,top:top});

		        $bigImg.css({left:-left/ratio,top:-top/ratio});
               
                
	    })

       // 4）鼠标移出事件
       $smallContainer.on('mouseleave',function(){
               
       	 //    $smallContainer.remove($zoom);
	        // $('body').remove($bigContainer);

	        $smallContainer[0].removeChild($zoom[0]);
            document.body.removeChild($bigContainer[0]);
            
	    	
       });
               

		}				
			
	});



  
	

});