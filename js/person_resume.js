$("#p_s_edustarttime").datetimepicker({
	bootcssVer:3,
	format:'yyyy-mm',
	language:'zh-CN', //中文
	startView:3, //2点开时间选择器 第一个视图 日期
	minView:3,//最精确的视图
	autoclose:true ///选择后自动关闭
	,clearBtn:true
}).on("changeDate",function(){
	//先获取 starttime
	var starttime = $("#p_s_edustarttime").val();
	$("#p_s_eduendtime").datetimepicker("setStartDate",starttime);
});

$("#p_s_eduendtime").datetimepicker({
	bootcssVer:3,
	format:'yyyy-mm',
	language:'zh-CN', //中文
	startView:3, //2点开时间选择器 第一个视图 日期
	minView:3,//最精确的视图
	autoclose:true ///选择后自动关闭
	,clearBtn:true
	,todayBtn:true
}).on("changeDate",function(){
	//先获取 endtime
	var endtime = $("#p_s_eduendtime").val();
	$("#p_s_edustarttime").datetimepicker("setEndDate",endtime);
});

$("#p_s_workstarttime").datetimepicker({
	bootcssVer:3,
	format:'yyyy-mm',
	language:'zh-CN', //中文
	startView:3, //2点开时间选择器 第一个视图 日期
	minView:3,//最精确的视图
	autoclose:true ///选择后自动关闭
	,clearBtn:true
}).on("changeDate",function(){
	//先获取 starttime
	var starttime = $("#p_s_workstarttime").val();
	$("#p_s_workendtime").datetimepicker("setStartDate",starttime);
});

$("#p_s_workendtime").datetimepicker({
	bootcssVer:3,
	format:'yyyy-mm',
	language:'zh-CN', //中文
	startView:3, //2点开时间选择器 第一个视图 日期
	minView:3,//最精确的视图
	autoclose:true ///选择后自动关闭
	,clearBtn:true
	,todayBtn:true
}).on("changeDate",function(){
	//先获取 endtime
	var endtime = $("#p_s_workendtime").val();
	$("#p_s_workstarttime").datetimepicker("setEndDate",endtime);
});