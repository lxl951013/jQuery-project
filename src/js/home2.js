/* 列表页的其他模块*/
$(function(){
	/*
	   
	*/
	var $NCKList=$('.NCKList');
	var ul=$('<ul/>')[0];

	$.ajax({
		url: 'http://localhost/myproject/src/goodslist.php',
		type: 'GET',
		dataType: 'JSON',

		success:function(data){
            console.log(data);
			ul.innerHTML=data.map(function(item){
				return `
                     <li data-guid="${item.id}">
                        <a href="#" data-id="${item.imgurl}"><img src="${item.imgurl}" data-set="${item.id}"></a>
                        <h4>${item.brandname}</h4>
                        <p>${item.goodsname}</p>
                        <h5>${item.price}</h5>
                        <span id="${item.ispanurl1}"><img src="${item.spanurl1}"></span>
                        <span data-id="${item.ispanurl2}"><img src="${item.spanurl2}"></span>
                        
                     </li>
				`             
			}).join('');
			$NCKList.append($(ul));
			var $li=$(ul).children('li');
			$(ul).addClass('UL');
			$li.addClass('LI');
			$li.children('a').addClass('ListA');
			$li.children('a').children('img').addClass('ListImg');
			$li.children('h4').addClass('ListH4');
			$li.children('p').addClass('ListP');
			$li.children('h5').addClass('ListH5');
			$li.children('span').addClass('ListSpan');
			$li.children('span').children('img').addClass('ListBigImg');




			//鼠标移入小图 高亮放大
				$NCKList.on('mouseenter','ul li span',function(){
			        $(this).addClass('spanLight');
				//$(this).parent('li').children('a').children('img').attr('src','');
				})
			//鼠标移入小图 高亮去除
			    $NCKList.on('mouseleave','ul li span',function(){
			        $(this).removeClass('spanLight');
				//$(this).parent('li').children('a').children('img').attr('src','');
				})
		}				
			
	});


	//点击商品时跳转到商品详情页，并保存信息到cookit
	$NCKList.on('click','li a img',function(){
		var $liID=$(this).parent().parent().attr('data-guid');
		document.cookie='id='+$liID;

		location.href='../html/shopping.html';

	})
	
	
	
	

});
