$(function(){
	$(".Glabel").click(function(){
		$(this).parent().parent().children(".Radio-group").children(".Glabel").removeClass("active");
		$(this).addClass("active")
	})
})