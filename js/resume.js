//鼠标进入事件
$(function (){
	var box = $("#allbox .box"),
	time = 10;
	box.mouseover(function(){
        $(this).animate({
			opacity: ".9"
        	},time);
        $(this).css({
        	"z-index":100,
        	"-webkit-transform":"scale(1.2)",
        	"-moz-transform":"scale(1.2)",
        	"-ms-transform":"scale(1.2)",
        	"-o-transform":"scale(1.2)",
        	"transform":"acale(1.2)",
        })
    });
    box.mouseout(function(){
    	$(this).animate({
			opacity: "1"
        	},time);
        $(this).css({
        	"z-index":1,
        	"-webkit-transform":"scale(1)",
        	"-moz-transform":"scale(1)",
        	"-ms-transform":"scale(1)",
        	"-o-transform":"scale(1)",
        	"transform":"acale(1)",
        })
    })
});
$(function(){
    $(".aside").click(function() {
        window.close();
    });
});
