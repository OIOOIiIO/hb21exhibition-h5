var page1_text = "<div id='cover'><div id='cover-part1'><div class='cover-indent'><div id='tittle-bar-img' class='tittle-part1-left-indent'></div></div><div id='tittle-text-img'><div id='tittle-text-img1' class='tittle-part1-left-indent'></div><div id='tittle-text-img2' class='tittle-part1-left-indent'></div></div></div><div id='cover-part2'><div id='tittle-img' class='cover-indent'></div><div class='next-ico-unity next-ico-border cover-next'><div class='next-ico-arrow-unity next-ico-arrow cover-next'></div></div><div id='enter-img' class='cover-next'></div></div> <div id='cover-part3'> <div id='tittle-label-img' class='cover-indent'></div> </div> </div>"
var page2_text = "<div id='cover'> <div id='cover-part1'> <div class='cover-indent'><div id='tittle-bar-img' class='tittle-part1-left-indent'></div></div> <div id='tittle-text-img'><div id='tittle-text-img1' class='tittle-part1-left-indent'></div><div id='tittle-text-img2' class='tittle-part1-left-indent'></div></div> </div> <div id='cover-part2'> <div class='cover-indent next-ico-unity next-ico-border-pre cover-pre'><div class='cover-indent next-ico-arrow-unity next-ico-arrow-pre cover-pre'></div></div> <div id='tittle-img-min' class='cover-indent'></div> <div id='introduction-img'></div> </div> <div id='cover-part3'> <div id='tittle-label-img' class='cover-indent'></div> </div> </div>"
var page1_next = function(){
    var next_click = document.getElementsByClassName('cover-next');
    for(var i=0; i<next_click.length; i++)
    {
        next_click[i].addEventListener("click",function(){
            document.getElementById('container').innerHTML = "";
            document.getElementById('container').innerHTML = page2_text;
            proportion_widen();
            proportion_narrow();    
            page2_pre();
        },false);
    }
}
var page2_pre = function(){
    var pre_click = document.getElementsByClassName('cover-pre');
    for(var i=0; i<pre_click.length; i++)
        {   
            pre_click[i].addEventListener("click",function(){
            document.getElementById('container').innerHTML = "";
            document.getElementById('container').innerHTML = page1_text;
            proportion_widen();
            proportion_narrow();
            page1_next();
            },false);
        }
}
page1_next();