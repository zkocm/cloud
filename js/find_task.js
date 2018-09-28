var f_t_showtime = null;
function f_t_over(event){
	if(f_t_showtime != null){
		clearTimeout(f_t_showtime);
		f_t_showtime = null;
	}
	$("div.f_t_hidcontent").removeClass("f_t_showstate");
	var content = $(event.target).parents(".f_t_content");
	$(content).find(".f_t_hidcontent").addClass("f_t_showstate");
}

function f_t_out(event){
	clearTimeout(f_t_showtime);
	f_t_showtime = setTimeout(function(){
		$("div.f_t_hidcontent").removeClass("f_t_showstate");
	},1000);
}


function f_t_change_pic(event){
	var changeimg = event.target;
	var show = $(changeimg).attr("src");
	if(show == "../img/yc_shoucang02.png"){
		$(changeimg).attr("src","../img/yc_shoucang01.png");
		$(changeimg).next().html("收藏");
	}else{
		$(changeimg).attr("src","../img/yc_shoucang02.png");
		$(changeimg).next().html("已收藏");
	}
}



$(function(){
	$(".f_t_condition_ul_1").find("a").click(function(e){
		$(".f_t_condition_ul_1 a").removeClass("main_active");
		$(this).addClass("main_active");
	});
	$(".f_t_condition_ul_2").find("a").click(function(e){
		$(".f_t_condition_ul_2 a").removeClass("main_active");
		$(this).addClass("main_active");
	});
});


$(function(){
	$(".f_t_midnav").find("a").click(function(e){
		$(".f_t_midnav a").removeClass("f_t_midachange");
		$(this).addClass("f_t_midachange");
	});
})


$(function(){
	$(".f_t_midnav").find("a").click(function(e){
		if($(".f_t_midnav img").hasClass("f_t_price")){
			$(".f_t_midnav img").attr("src","../img/paixu.png");
		}
		$(".f_t_midnav a").removeClass("f_t_midachange");
		
		$(this).addClass("f_t_midachange");
		if($(this).parent().find("img").hasClass("f_t_price")){
			$(this).parent().find("img").attr("src","../img/paixu_over.png");
		}
	});
})