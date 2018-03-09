$(function() {
	$("#Close").click(function(){
		$("#Cbian").hide()
	})

	var width=$(window).width();
	if(width<=1800){
		$("#Cbian").css("left","0")
	}
	$(".Bla").mouseover(function(){
		$(".navone").css("background","rgb(233,44,24)")
	})
	$(".Bla").mouseout(function(){
		$(".navone").css("background","#fa3535")
	})
	$(".Sxian").mouseover(function(){
		$(".navbott").css("background","rgb(233,44,24)")
	})
	$(".Sxian").mouseout(function(){
		$(".navbott").css("background","#fa3535")
	})
})