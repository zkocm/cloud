$(function(){
	$(".eb_cc_downscope_1").hover(function(){
		$("div.eb_cc_downsign_3,div.eb_cc_bottomdiv_3").removeClass("eb_cc_downstate");
		$("div.eb_cc_downsign_2,div.eb_cc_bottomdiv_2").removeClass("eb_cc_downstate");
		$("div.eb_cc_downsign_1,div.eb_cc_bottomdiv_1").addClass("eb_cc_downstate");
	});
	$(".eb_cc_downscope_2").hover(function(){
		
		$("div.eb_cc_downsign_1,div.eb_cc_bottomdiv_1").removeClass("eb_cc_downstate");
		$("div.eb_cc_downsign_3,div.eb_cc_bottomdiv_3").removeClass("eb_cc_downstate");
		$("div.eb_cc_downsign_2,div.eb_cc_bottomdiv_2").addClass("eb_cc_downstate");
	});
	$(".eb_cc_downscope_3").hover(function(){
		$("div.eb_cc_downsign_1,div.eb_cc_bottomdiv_1").removeClass("eb_cc_downstate");
		$("div.eb_cc_downsign_2,div.eb_cc_bottomdiv_2").removeClass("eb_cc_downstate");
		$("div.eb_cc_downsign_3,div.eb_cc_bottomdiv_3").addClass("eb_cc_downstate");
	});
});