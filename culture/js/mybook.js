
//book图片预加载
 (function(){
 	//定义一个数组，存储电子书的图片
 	var bookArr = [];
 	//存储一下书开头
 	bookArr.push("images/ga/blank.jpg");
 	bookArr.push("images/ga/cover.jpg");
 	//左边长度
 	var leftLen = 80;
    //右侧长度
    var rightLen = 80;
    //总长度
    var count = leftLen + rightLen;
    for(var i = 0;i < count;i++){
    	bookArr.push("images/ga/left/0("+(i+1)+").jpg");
    	bookArr.push("images/ga/right/1("+(i+1)+").jpg");
    }
    //存储一下书尾
    bookArr.push("images/ga/back.jpg");
 	bookArr.push("images/ga/blank.jpg");
 	//图片预加载
 	var len = bookArr.length;
 	var shtml = "";
 	for(var i = 0;i < len; i++){
 		shtml+='<img class="lazy" height="700" width="460" data-original="'+ bookArr[i] +'"/>';

 	}
 	//将图片添加到页面
 	$('#mybook').html(shtml);
 })();

$(function() {
	//懒加载
	$('img.lazy').lazyload();
	//图片点击之后再自动加载
	$('img.lazy').on('mouseover',function(){
		$('img.lazy').lazyload({
			event : "mouseover"
		});
	});
		//翻书动作
	$('#mybook').booklet({
		width: 840,
	});
});