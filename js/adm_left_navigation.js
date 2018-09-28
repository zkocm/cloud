$(function(){
	$(".al_n_content").find("a").click(function(e){
		$(".al_n_content div").removeClass("al_n_active");
		$(this).parent().parent().addClass("al_n_active");
	});
});

$(function(){
	$(".showleftnavigation").hide().load("post_recruitment.html").fadeIn();
});

function post_recruitment(){
	$(".showleftnavigation").hide().load("post_recruitment.html").fadeIn();
}

function hiring(){
	$(".showleftnavigation").hide().load("hiring.html").fadeIn();
}

function CompanyProfile(){
	$(".showleftnavigation").hide().load("CompanyProfile.html").fadeIn();
}

function CollectTalent(){
	$(".showleftnavigation").hide().load("CollectTalent.html").fadeIn();
}

function CollectService(){
	$(".showleftnavigation").hide().load("CollectService.html").fadeIn();
}

function CollectTask(){
	$(".showleftnavigation").hide().load("CollectTask.html").fadeIn();
}

function PublishService_Edit(){
	$(".showleftnavigation").hide().load("PublishService_Edit.html").fadeIn();
}

function PublishTask(){
	$(".showleftnavigation").load("PublishTask.html");
}


function Company_PublisTask_Edit(){
	$(".showleftnavigation").load("Company_PublisTask_Edit.html");
}

