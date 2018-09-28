$(function(){
	$(".wcl_infotitle").find("a").click(function(e){
		$(".wcl_infotitle a").removeClass("wcl_infotitlea");
		$(this).addClass("wcl_infotitlea");
	});
});
