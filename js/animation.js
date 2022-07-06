var next_click = document.getElementsByClassName('cover-next');
for(var i=0; i<next_click.length; i++)
{
    next_click[i].addEventListener("click",function(){
        document.getElementById("cover-part2-page2").removeAttribute('style');
    },false);
    next_click[i].addEventListener("click",function(){
        document.getElementById("cover-part2-page1").setAttribute('style','display: none;');
    },false);
}

var pre_click = document.getElementsByClassName('cover-pre');
for(var i=0; i<pre_click.length; i++)
{
    pre_click[i].addEventListener("click",function(){
        document.getElementById("cover-part2-page2").setAttribute('style','display: none;');
    },false);
    pre_click[i].addEventListener("click",function(){
        document.getElementById("cover-part2-page1").removeAttribute('style');
    },false);
}