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
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/slide.png',
'https://oiooiiio.github.io/hb21exhibition-h5/src/img/tip.png'])
window.onload = function(){
    document.getElementById('load').setAttribute('id','load-end');
    preloadimages(['https://oiooiiio.github.io/hb21exhibition-h5/src/img1/slid-ud.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/-90/1st.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/-90/1st-1.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/-90/1st-2.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/-90/1st-3.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/-90/1st-4.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/-90/1st-5.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/-90/1st-6.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/-90/1st-7.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/-90/1st-8.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/-90/1st-9.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/-90/1st-10.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-A-0539/202110231618050750_1.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-A-0539/202110231618060025_4.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-A-0539/202110231618060289_2.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-A-0539/202110231618060693_6.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-A-0539/202110231618070100_3.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-A-0539/202110231618080740.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-A-0539/202110231618080740_5.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-B-1002/202110111526080713_1.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-B-1002/202110111526080991.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-B-1002/202110111526080991_2.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-B-1002/202110111526090025_3.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-B-1755/202111151628210181_1.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-B-1755/202111151628210911.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-B-1755/202111151628210911_2.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-B-1755/202111151628220698_3.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-E-0383/202110302154420660_1.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-E-0383/202110302154450944.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-E-0383/202110302154450944_2.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-E-0383/202110302154520011_3.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-G-0575/202110291000230433_1.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-G-0575/202110291000240043.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-G-0575/202110291000240043_2.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-1-G-0575/202110291000250237_3.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-2-B-0270/202110162206450545.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-4-E-0018/202108081747510955.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-6-A-0010/202109281524320715.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-6-A-0010/202109281524320715_1.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-6-A-0010/202109281524320715_2.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/A-6-A-0010/202109281524320715_3.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/B-1-F-0072/202110082314150731_1.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/B-1-F-0072/202110082314180598.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/B-1-F-0072/202110082314180598_2.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/C-1-B-0320/202110191133470199_1.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/C-1-B-0320/202110191133470295.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/C-1-B-0320/202110191133470295_2.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/1st/C-1-B-0320/202110191133470463_3.jpg'])
    preloadimages(['https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/-90/2nd.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/-90/2nd-1.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/-90/2nd-2.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/-90/2nd-3.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/-90/2nd-4.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/-90/2nd-5.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/-90/2nd-6.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/-90/2nd-7.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/-90/2nd-8.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/-90/2nd-9.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/-90/2nd-10.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/A-2-B-0378/202111121034430725_1.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/A-2-B-0379/202111152222320048_1.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/A-2-B-0379/202111152222320048_2.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/A-2-B-0379/202111152222320048_3.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/A-4-D-0058/202111151506480857.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/A-6-C-0002/202110051112200653.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/A-6-C-0002/202110051112200653_1.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/A-6-C-0002/202110051112200653_2.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/A-6-C-0002/202110051112200653_3.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/B-1-A-0031/202107191238060471.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/B-1-A-0031/202107191238060471_1.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/B-1-F-0198/202111152121340837.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/B-1-F-0198/202111152121340837_1.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/B-1-F-0198/202111152121340837_2.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/B-1-F-0198/202111152121340837_3.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/B-4-G-0008/202111111422170439.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/C-1-B-0559/202111101127200480_2.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/C-1-B-0559/202111101127210506.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/C-1-B-0559/202111101127210506_1.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/C-1-F-0039/202108041604530311_1.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/C-1-F-0039/202108041604570227.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/C-1-F-0039/202108041604570227_2.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/2nd/C-1-F-0039/202108041605000702_3.jpg'])
    preloadimages(['https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/-90/3rd.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/-90/3rd-1.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/-90/3rd-2.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/-90/3rd-3.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/-90/3rd-4.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/-90/3rd-5.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/-90/3rd-6.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/-90/3rd-7.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/-90/3rd-8.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/-90/3rd-9.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/-90/3rd-10.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/A-1-A-0139/202110110959160568.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/A-1-A-0139/202110110959160568_1.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/A-1-A-0140/202111150952140376.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/A-1-A-0140/202111150952140376_1.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/A-1-A-0160/202107260008060377.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/A-1-A-0160/202107260008060377_1.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/A-1-A-0160/202107260009060272_2.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/A-1-A-0177/202107272225510068.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/A-1-A-0177/202107272225510068_1.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/A-1-A-0177/202107272225510159_2.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/A-1-A-0177/202107272225510721_3.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/A-6-A-0014/202110300007320046.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/A-6-A-0014/202110300007320046_1.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/A-6-A-0014/202110300007320046_2.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/A-6-A-0014/202110300007320046_3.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/B-1-B-0369/0.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/B-1-B-0369/1.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/B-1-B-0369/2.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/B-1-B-0369/3.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/B-1-F-0154/202111091637050952.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/B-1-F-0154/202111091637050952_1.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/B-1-F-0154/202111091637060414_2.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/B-1-F-0154/202111091638180527_3.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/B-4-E-0012/202111061530250471.png',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/C-1-B-0565/202111101135480273.jpg',
    'https://oiooiiio.github.io/hb21exhibition-h5/src/img1/3rd/C-1-B-0565/202111101135480273_1.jpg'])
}