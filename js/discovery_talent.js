$(function(){
	$(".d_t_condition_ul_1").find("a").click(function(e){
		$(".d_t_condition_ul_1 a").removeClass("main_active");
		$(this).addClass("main_active");
	});
	$(".d_t_condition_ul_2").find("a").click(function(e){
		$(".d_t_condition_ul_2 a").removeClass("main_active");
		$(this).addClass("main_active");
	});
	$(".d_t_condition_ul_3").find("a").click(function(e){
		$(".d_t_condition_ul_3 a").removeClass("main_active");
		$(this).addClass("main_active");
	});
	$(".d_t_condition_ul_4").find("a").click(function(e){
		$(".d_t_condition_ul_4 a").removeClass("main_active");
		$(this).addClass("main_active");
	});
});


$(function(){
	$(".d_t_midnav").find("a").click(function(e){
		$(".d_t_midnav a").removeClass("d_t_midachange");
		$(this).addClass("d_t_midachange");
	});
})