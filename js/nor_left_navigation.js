$(function(){
	$(".nl_n_content").find("a").click(function(e){
		$(".nl_n_content div").removeClass("nl_n_active");
		$(this).parent().parent().addClass("nl_n_active");
	});
});

$(function(){
	$(".showleftnavigation").hide().load("person_resume.html").fadeIn();
});

function CollectJob(){
	$(".showleftnavigation").hide().load("CollectJob.html").fadeIn();
}

function PublishService_Edit(){
	$(".showleftnavigation").hide().load("PublishService_Edit.html").fadeIn();
}

function person_resume(){
	$(".showleftnavigation").hide().load("person_resume.html").fadeIn();
}

function PublishTask(){
	$(".showleftnavigation").hide().load("PublishTask.html").fadeIn();
}

function PublisTask_Edit(){
	$(".showleftnavigation").hide().load("PublisTask_Edit.html").fadeIn();
}

function CollectTask(){
	$(".showleftnavigation").hide().load("CollectTask.html").fadeIn();
}

function PublishService(){
	$(".showleftnavigation").hide().load("PublishService.html").fadeIn();
}

function CollectService(){
	$(".showleftnavigation").hide().load("CollectService.html").fadeIn();
}
