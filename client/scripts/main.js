$(document).ready(function(){
	$("body").html(webcharts.ui.main.body(webcharts.strings.body));
	$("#main-content").html(webcharts.ui.home.mainContent(webcharts.strings.mainContent));
	
	$("#nav-home").click(function(){
		$("#nav-home").addClass("active");
		$("#nav-guide").removeClass("active");
		$("#nav-faq").removeClass("active");
		$("#nav-dashboards").removeClass("active");
		$("#main-content").html(webcharts.ui.home.mainContent(webcharts.strings.mainContent));
		$("title").text(webcharts.strings.title.home);
	});

	$("#nav-guide").click(function(){
		$("#nav-guide").addClass("active");
		$("#nav-home").removeClass("active");
		$("#nav-faq").removeClass("active");
		$("#nav-dashboards").removeClass("active");
		$("#main-content").html("Guide");
		$("title").text(webcharts.strings.title.guide);
	});

	$("#nav-faq").click(function(){
		$("#nav-faq").addClass("active");
		$("#nav-home").removeClass("active");
		$("#nav-guide").removeClass("active");
		$("#nav-dashboards").removeClass("active");
		$("#main-content").html("FAQ");
		$("title").text(webcharts.strings.title.faq);
	});

	$("#nav-dashboards").click(function(){
		$("#nav-dashboards").addClass("active");
		$("#nav-home").removeClass("active");
		$("#nav-faq").removeClass("active");
		$("#nav-guide").removeClass("active");
		$("#main-content").html("Dashboards");
		$("title").text(webcharts.strings.title.dashboards);
	});
});