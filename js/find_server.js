var f_s_showtime = null;
function f_s_over(event){
	if(f_s_showtime != null){
		clearTimeout(f_s_showtime);
		f_s_showtime = null;
	}
	$("div.f_s_hidcontent").removeClass("f_s_showstate");
	var content = $(event.target).parents(".f_s_content");
	$(content).find(".f_s_hidcontent").addClass("f_s_showstate");
}

function f_s_out(event){
	clearTimeout(f_s_showtime);
	f_s_showtime = setTimeout(function(){
		$("div.f_s_hidcontent").removeClass("f_s_showstate");
	},1000);
}


function f_s_change_pic(event){
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
	$(".f_s_condition_ul_1").find("a").click(function(e){
		$(".f_s_condition_ul_1 a").removeClass("main_active");
		$(this).addClass("main_active");
	});
	$(".f_s_condition_ul_2").find("a").click(function(e){
		$(".f_s_condition_ul_2 a").removeClass("main_active");
		$(this).addClass("main_active");
	});
});

$(function(){
	$(".f_s_midnav").find("a").click(function(e){
		if($(".f_s_midnav img").hasClass("f_s_price")){
			$(".f_s_midnav img").attr("src","../img/paixu.png");
		}
		$(".f_s_midnav a").removeClass("f_s_midachange");
		
		$(this).addClass("f_s_midachange");
		if($(this).parent().find("img").hasClass("f_s_price")){
			$(this).parent().find("img").attr("src","../img/paixu_over.png");
		}
	});
})