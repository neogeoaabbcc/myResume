//动态onload事件
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func;
    }else{
        window.onload = function(){
            func();
            oldonload();
        }
    }
}

//绑定onscroll事件制作动态back图标
window.onscroll = function(){
	var clientH = document.body.clientHeight/10;
    var scrollT = document.documentElement.scrollTop||document.body.scrollTop;
    var aside = document.getElementById("aside");
	var asideH = aside.offsetHeight;
    if(scrollT >= clientH){	
        aside.style.top = "540px"; 
    }else if(scrollT < clientH){
        aside.style.top = "50px";
    }       
}

addLoadEvent(onMouse);
//鼠标进入事件
function onMouse(){
    var headerI = document.getElementById("header-i");
    var headerC = document.getElementById("header-c");

    headerI.onmouseover = function(){
        cirStyle(1,100,400,1);
                               
    };
    headerI.onmouseout = function(){
        cirStyle(0,0,268,.1);
    };
    function cirStyle(op,al,top,sc){
        headerC.style.opacity = op;
        headerC.style.filter = "alpha(Opacity" + al + ")";
        headerC.style.top= top + "px";
        setCss(headerC,{transform:"scale(" + sc + ")"});
    }
    //设置css前缀
    function setCss(obj,attrObj) {
        for (var i in attrObj) {
            var transform=i;
            if(transform.indexOf("-")>0){
                var num=transform.indexOf("-");
                transform=transform.replace(transform.substr(num,2),transform.substr(num+1,1).toUpperCase());
            };
            obj.style[transform]=attrObj[i];
            transform=transform.replace(transform.charAt(0),transform.charAt(0).toUpperCase());
            obj.style["webkit"+transform]=attrObj[i];
            obj.style["moz"+transform]=attrObj[i];
            obj.style["ms"+transform]=attrObj[i];
            obj.style["o"+transform]=attrObj[i];
        };
    };
};

$(function(){
    
    var leftW = parseInt(($(".middlebot").width() - $(".middlebot-box").width())/2),
    offsetL = parseInt($("#container").innerWidth()),
    size = $(".img").size()-1;
    //手动轮播图
    for(var i=0;i<=size;i++){
        var li = "<li>" + i + "</li>"
        $("#ul").append(li);
    };
    $("#ul li:first").addClass("blue");
    $("#ul li").mouseover(function(){
        $(this).addClass("blue").siblings().removeClass("blue");
        var index = $(this).index();
        i = index;
        $("#imgbox").offset({left:parseInt(-offsetL*i+leftW)}); 
    });

    //right移动;
    var i = 0;
    function moveR(){
        i++;
        if(i > size){
            i = 0;   
        };
        $("#ul li").eq(i).addClass("blue").siblings().removeClass("blue");
        $("#imgbox").offset({left:parseInt(-offsetL*i+leftW)});  
    };   
    $("#right").click(function(){
        moveR();
    });
    //left移动;
    function moveL(){
        i--;
        if(i < 0){
            i = size;   
        };
        $("#ul li").eq(i).addClass("blue").siblings().removeClass("blue");
        $("#imgbox").offset({left:parseInt(-offsetL*i+leftW)});
    };
    $("#left").click(function(){
        moveL();
    });
});


/*=============获得焦点和失去焦点事件============*/
$(function(){
    var input = $(".bottom-input input");
    var inputval = input.val().trim();
    var reg = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;  
    input.keypress(function(event){
        if(event.keyCode == 13){
            if(inputval == "" && inputval != reg){
                var div = "<div class='input-text'>" + "请输入正确地址" + "</div>"
                $(".bottom-input").append(div);
            }else if(inpitval == reg){
                input.siblings().remove();

            };
        };
    });   
    //失去焦点
    input.blur(function(){
        input.siblings().remove();
    })
})


