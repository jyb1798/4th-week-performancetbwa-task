
var carouselindex = 0;
var $Banner = document.querySelector(".BannerSection");
var windowidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var $BannerStage = document.querySelector(".BannerStage");
$BannerStage.style.transform ='translateX(' + (-((windowidth - 40)*2 + carouselindex*(windowidth - 40))).toString() + 'px)';
$BannerStage.style.width = ((windowidth - 40)* 6).toString() +"px"
var $BannerItems = document.querySelectorAll(".BannerItem");
for(var idx = 0; idx < $BannerItems.length; idx++){
    $BannerItems[idx].style.width = (windowidth - 40).toString() +"px";
}
var $BannerCloneItems = document.querySelectorAll(".BannerCloneItem");
for(var idx = 0; idx < $BannerCloneItems.length; idx++){
    $BannerCloneItems[idx].style.width = (windowidth - 40).toString() +"px";
}

function handlenext(){
    switch(carouselindex){
        case 0:
            $BannerStage.style.transition = "all 0.25s";
            carouselindex++;
            $BannerStage.style.transform ='translateX(' + (-((windowidth - 40)*2 + carouselindex*(windowidth - 40))).toString() + 'px)';
            break
        case 1:
            $BannerStage.style.transition = "all 0.25s";
            carouselindex++;
            $BannerStage.style.transform ='translateX(' + (-((windowidth - 40)*2 + carouselindex*(windowidth - 40))).toString() + 'px)';
            setTimeout(function(){$BannerStage.style.transition = "none";
            carouselindex = 0;
            $BannerStage.style.transform ='translateX(' + (-((windowidth - 40)*2 + carouselindex*(windowidth - 40))).toString() + 'px)';
            },250);
            break;
         }
}

function handleprev(){
    switch(carouselindex){
        case 0:
            $BannerStage.style.transition = "all 0.25s";
            carouselindex--;
            $BannerStage.style.transform ='translateX(' + (-((windowidth - 40)*2 + carouselindex*(windowidth - 40))).toString() + 'px)';
            setTimeout(function(){$BannerStage.style.transition = "none";
            carouselindex = 1;
            $BannerStage.style.transform ='translateX(' + (-((windowidth - 40)*2 + carouselindex*(windowidth - 40))).toString() + 'px)';
            },250);
            break
        case 1:
            $BannerStage.style.transition = "all 0.25s";
            carouselindex--;
            $BannerStage.style.transform ='translateX(' + (-((windowidth - 40)*2 + carouselindex*(windowidth - 40))).toString() + 'px)';  
            break;
         }
}

var $Nextbutton = document.querySelector(".BannerNext");

if($Nextbutton.addEventListener){
    $Nextbutton.addEventListener('click', handlenext);
}else{
    $Nextbutton.attachEvent("onclick", handlenext);
}
var $PrevButton = document.querySelector(".BannerPrev");

if($PrevButton.addEventListener){
    $PrevButton.addEventListener('click', handleprev);
}else{
    $PrevButton.attachEvent("onclick", handleprev);
}

//export default BANNER;