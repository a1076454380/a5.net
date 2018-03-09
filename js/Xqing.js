$(function() {
	$(".shutu li").click(function() {
		var suo = parseInt($(".shutu li").index(this));
		var arr = $(".swiper-pagination-bullet");
		arr[suo].click();
		$(".shutu li").removeClass("liactive");
		$(this).addClass("liactive");
	})
	$(".tjactive .gwuc img").attr("src", "images/Xqing_43.jpg");
	$(".tjactive .scang img").attr("src", "images/Xqing_45.jpg");
	$(".zuo").click(function() {
		var len = $('#tmain li').length * 224;
		var len=parseInt("-"+len);
		var mleft=parseInt($('#tmain ul').css('margin-left'))-898;
		if(mleft>=len){
			$("#tmain ul").css({
				'margin-left':mleft
			})
		}
		
	})
	$(".you").click(function() {
		var mleft=parseInt($('#tmain ul').css('margin-left'))+898;
		if(mleft<=0){
			$("#tmain ul").css({
				'margin-left':mleft
			})
		}
	})
	$("#tmain li").mouseover(function(){
		$("#tmain li").removeClass("tjactive");
		$(this).addClass("tjactive");
		$(".tjactive .gwuc img").attr("src", "images/Xqing_43.jpg");
		$(".tjactive .scang img").attr("src", "images/Xqing_45.jpg");
	})
	$("#tmain li").mouseout(function(){
		$("#tmain li").removeClass("tjactive");
		$(this).addClass("tjactive");
		$("#tmain li .gwuc img").attr("src", "images/Xqing_48.jpg");
		$("#tmain li .scang img").attr("src", "images/Xqing_50.jpg");
		$(".tjactive .gwuc img").attr("src", "images/Xqing_43.jpg");
		$(".tjactive .scang img").attr("src", "images/Xqing_45.jpg");
	})
	$("#wtmain li").mouseover(function(){
		$("#wtmain li").removeClass("ckactive");
		$(this).addClass("ckactive");
	})
})