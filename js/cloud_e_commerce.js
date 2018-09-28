$(function(){
	//设置全局变量
	var cur =0; //当前的图片序号
	var imglen = $(".c_ec_imglist img").length / 2; //获取图片的数量
	var timer = null; //设置定时器的名字
	
	//当鼠标移到向左和向右的图标上关闭定时器，离开时则重置定时器
	$(".c_ec_pre,.c_ec_next").hover(function(){
		clearInterval(timer);
	},function(){
		changeImg();	
	});
	
	//点击向左图标根据cur进行上一个图片处理
	$(".c_ec_pre").click(function(){
		cur = cur > 0 ? (--cur):imglen;
		if(cur != imglen){
			if(cur != 0){
				changeTo(cur);
			}else{
				$(".c_ec_imglist").animate({"left":0},500);
			}
		}else{
			$(".c_ec_imglist").animate({"left":-cur*130},0);
			changeTo(--cur);
		}
	});
	
	//点击向右图标根据cur进行下一个图片处理
	$(".c_ec_next").click(function(){
		cur = cur < imglen ? (++cur):0;
		if(cur != 0){
			changeTo(cur);
		}else{
			changeTo(cur);
			changeTo(++cur);
		}
	});
	
	//封装图片自动播放函数
	function changeImg(){
		timer = setInterval(function(){
			if(cur < imglen){
				++cur;
				changeTo(cur);
			}else{
				cur = 0;
				changeTo(cur);
				changeTo(++cur);
			}
			
		},1500);
	}
	
	//调用函数
	changeImg();
	
	//图片切换函数
	function changeTo(num){
		var go = num*130;
		if(go != 0){
			$(".c_ec_imglist").animate({"left":-go},500);
		}else{
			$(".c_ec_imglist").animate({"left":0},0);
		}
		
	}
	

});
