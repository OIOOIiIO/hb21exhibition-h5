var proportion_widen = function(){
    var bodyWidth = document.body.clientWidth;
    var bodyHeight = document.body.clientHeight;
    // console.log(coverHeight);
    if(bodyWidth/bodyHeight >= 0.5623)
    {   
        bodyWidth = bodyHeight*0.5623;
        document.getElementById("cover").setAttribute('style','width:'+bodyWidth+'px;margin-left: -'+bodyWidth/2+'px;left: 50%');
        document.getElementById("cover-part1").setAttribute('style','width: '+bodyWidth*0.25+'px;');
        document.getElementById("cover-part2").setAttribute('style','width: '+bodyWidth*0.5+'px;left: 25%;');
        document.getElementById("cover-part3").setAttribute('style','width: '+bodyWidth*0.25+'px;right: 0;');
    }
}
var proportion_narrow = function(){
    var bodyWidth = document.body.clientWidth;
    var bodyHeight = document.body.clientHeight;
    console.log(bodyWidth);
    if(bodyWidth/bodyHeight <= 0.5623)
    {
        document.getElementById("cover").removeAttribute("style");
        document.getElementById("cover-part1").removeAttribute("style");
        document.getElementById("cover-part2").removeAttribute("style");
        document.getElementById("cover-part3").removeAttribute("style");
    }
}
proportion_widen();
proportion_narrow();
window.onresize = function(){
    proportion_widen();
    proportion_narrow();
}