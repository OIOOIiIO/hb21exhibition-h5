// 禁止微信浏览器调整字体大小
(function() {
 
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        handleFontSize();
    } else {
        if (document.addEventListener) {
            document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
        } else if (document.attachEvent) {
            document.attachEvent("WeixinJSBridgeReady", handleFontSize);
            document.attachEvent("onWeixinJSBridgeReady", handleFontSize);  }
    }
    function handleFontSize() {
        // 设置网页字体为默认大小
        WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
        // 重写设置网页字体大小的事件
        WeixinJSBridge.on('menu:setfont', function() {
            WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
        });
    }
})();
  
// 禁止双击放大
var lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (event) {
    var now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);
// 禁止双指放大
document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, false);

//预加载图片
function preloadimages(arr){
    var newimages=[]
    var arr=(typeof arr!="object")? [arr] : arr  //确保参数总是数组
    for (var i=0; i<arr.length; i++){
        newimages[i]=new Image()
        newimages[i].src=arr[i]
    }
}
preloadimages(['https://oiooiiio.github.io/hb21exhibition-h5/src/img/background.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/1st-text.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/2nd-text.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/3rd-text.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/1st-text-white.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/2nd-text-white.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/3rd-text-white.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/awa-chart.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/awa-chart-text.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/cpt-chart.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/cpt-chart-text.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/map-chart.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/terr-chart-text.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/awa-text.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/cpt-text.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/intro-text.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/awa-text-white.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/cpt-text-white.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/intro-text-white.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/introduction.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/enter.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/tittle.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/label.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/slide.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/zbdw.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/zddw.png',])
window.onload = function(){
    document.getElementById('load').setAttribute('id','load-end');
}