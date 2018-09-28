$(function(){
	$(".ic_infotitle").find("a").click(function(e){
		$(".ic_infotitle a").removeClass("ic_infotitlea");
		$(this).addClass("ic_infotitlea");
	});
});

$(function(){
	$(".ic_infodetailcontent").each(function(){
		var str = $(this).text();
		if(str.length > 105){
			$(this).text(str.substr(0,105)+"...");
		}
	});
});

