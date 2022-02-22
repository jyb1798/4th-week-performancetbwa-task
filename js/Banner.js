
var carouselindex = 0;
var $Banner = document.querySelector(".BannerSection");
var windowidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var $BannerStage = document.querySelector(".BannerStage");

var BannerCurrentPosion = -((windowidth - 40)*2 + carouselindex*(windowidth - 40))

$BannerStage.style.transform ='translateX(' + BannerCurrentPosion.toString() + 'px)';
$BannerStage.style.width = ((windowidth - 40)* 6).toString() +"px"
var $BannerItems = document.querySelectorAll(".BannerItem");
for(var idx = 0; idx < $BannerItems.length; idx++){
    $BannerItems[idx].style.width = (windowidth - 40).toString() +"px";
}
var $BannerCloneItems = document.querySelectorAll(".BannerCloneItem");
for(var idx = 0; idx < $BannerCloneItems.length; idx++){
    $BannerCloneItems[idx].style.width = (windowidth - 40).toString() +"px";
}
var startX = 0;
var currentX = 0;
var pressed = false;
$BannerStage.addEventListener("mousedown", e=>{
    pressed = true;
    startX = e.offsetX;
})

$BannerStage.addEventListener("mousemove", e=>{
    if(pressed){
        currentX = e.offsetX
        BannerCurrentPosion = BannerCurrentPosion - (startX - currentX)
        $BannerStage.style.transform ='translateX(' + BannerCurrentPosion.toString() + 'px)';
    }
})

$BannerStage.addEventListener("mouseup", e=>{
    pressed= false;
    if( (startX - currentX) > 0 ){
        handlenext();
        return
    }
    handleprev();

})



function handlenext(){
    switch(carouselindex){
        case 0:
            $BannerStage.style.transition = "all 0.25s";
            carouselindex++;
            BannerCurrentPosion = -((windowidth - 40)*2 + carouselindex*(windowidth - 40));
            $BannerStage.style.transform ='translateX(' + BannerCurrentPosion.toString() + 'px)';
            break
        case 1:
            $BannerStage.style.transition = "all 0.25s";
            carouselindex++;
            BannerCurrentPosion =  -((windowidth - 40)*2 + carouselindex*(windowidth - 40));
            $BannerStage.style.transform ='translateX(' + BannerCurrentPosion.toString() + 'px)';
            setTimeout(function(){$BannerStage.style.transition = "none";
            carouselindex = 0;
            BannerCurrentPosion =  -((windowidth - 40)*2 + carouselindex*(windowidth - 40))
            $BannerStage.style.transform ='translateX(' + BannerCurrentPosion.toString() + 'px)';
            },250);
            break;
         }
}

function handleprev(){
    switch(carouselindex){
        case 0:
            $BannerStage.style.transition = "all 0.25s";
            carouselindex--;
            BannerCurrentPosion =  -((windowidth - 40)*2 + carouselindex*(windowidth - 40));
            $BannerStage.style.transform ='translateX(' + BannerCurrentPosion.toString() + 'px)';
            setTimeout(function(){$BannerStage.style.transition = "none";
            carouselindex = 1;
            BannerCurrentPosion =  -((windowidth - 40)*2 + carouselindex*(windowidth - 40));
            $BannerStage.style.transform ='translateX(' + BannerCurrentPosion.toString() + 'px)';
            },250);
            break
        case 1:
            $BannerStage.style.transition = "all 0.25s";
            carouselindex--;
            BannerCurrentPosion =  -((windowidth - 40)*2 + carouselindex*(windowidth - 40));
            $BannerStage.style.transform ='translateX(' + BannerCurrentPosion.toString() + 'px)';  
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