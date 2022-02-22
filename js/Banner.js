
var windowidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if (window.attachEvent) {
    window.attachEvent("onresize", function(){windowidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; BANNER();})
} else {
    window.addEventListener("resize", function(){windowidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; BANNER();}, false)
};


function BANNER (){
    var carouselindex = 0;
        var $Banner = document.querySelector(".BannerSection");
        var $BannerStage = document.querySelector(".BannerStage");
    if(windowidth < 1024){

        //reset style
        var $BannerItems = document.querySelectorAll(".BannerItem");
        for(var idx = 0; idx < $BannerItems.length; idx++){
            $BannerItems[idx].style.height = '295px';
            $BannerItems[idx].style.textAlign = 'left';
            $BannerItems[idx].style.width = (windowidth - 40).toString() +"px";
        }
        var $BannerCloneItems = document.querySelectorAll(".BannerCloneItem");
            for(var idx = 0; idx < $BannerCloneItems.length; idx++){
                $BannerCloneItems[idx].style.display = "block";
                $BannerCloneItems[idx].style.width = (windowidth - 40).toString() +"px";
        }
        document.querySelector('.BannerContent').style.padding = '';
        document.querySelector('.BannerInbox').style.display = '';
        var mobbackground = document.querySelectorAll(".BannerItem .BannerItemBackgroundMobile");
        for (var idx = 0; idx< mobbackground.length; idx ++){
            mobbackground[idx].style.display = '';
        }
        var pcbackground = document.querySelectorAll('.BannerItem .BannerItemBackgroundPC');
        for (var idx = 0; idx < pcbackground.length; idx++){
            pcbackground[idx].style.display = '';
        }
        var mobileImg = document.querySelectorAll('.BannerItem .BannerItemImageMobile');
        for (var idx = 0; idx < mobileImg.length; idx++){
            mobileImg[idx].style.display = '';
        }

        var pcImg = document.querySelectorAll('.BannerItem .BannerItemImagePc');
        for (var idx = 0; idx < pcImg.length; idx++){
            pcImg[idx].style.display = '';
        }

        var moreButtons = document.querySelectorAll('.BannerItem .BannerItemMore');
        for (var idx = 0; idx < moreButtons.length; idx++){
            moreButtons[idx].style.display = '';
        }

        var BannerDesc = document.querySelectorAll(".BannerItem .Bannerdesc");
            for(var idx = 0; idx < BannerDesc.length; idx++){
                console.log(BannerDesc[idx].style);
                BannerDesc[idx].style.top = '';
                BannerDesc[idx].style.fontSize ='';
                BannerDesc[idx].style.lineHeight = '';
                BannerDesc[idx].style.fontWeigth = '';
                BannerDesc[idx].style.letterSpacing = '';
                BannerDesc[idx].style.color = '';
            }


        var BannerCurrentPosion = -((windowidth - 40)*2 + carouselindex*(windowidth - 40))

        $BannerStage.style.transform ='translateX(' + BannerCurrentPosion.toString() + 'px)';
        $BannerStage.style.width = ((windowidth - 40)* 6).toString() +"px"
        var $BannerCloneItems = document.querySelectorAll(".BannerCloneItem");
        
        if(windowidth < 425){
            console.log("under425");
            console.log($BannerItems, $BannerCloneItems);
            for(var idx = 0; idx < $BannerItems.length; idx++){
                $BannerItems[idx].style.height = "146px";
            }
            var $BannerCloneItems = document.querySelectorAll(".BannerCloneItem");
            for(var idx = 0; idx < $BannerCloneItems.length; idx++){
                $BannerCloneItems[idx].style.height = "146px";
            }
        }

        document.querySelector(".BannerPrev").style.visibility = 'hidden';
        document.querySelector(".BannerNext").style.visibility = 'hidden';

        var startX = 0;
        var currentX = 0;
        var pressed = false;
        if($BannerStage.addEventListener){
        $BannerStage.addEventListener("mousedown", function (e){
            if(windowidth < 1024){
            pressed = true;
            startX = e.clientX ;
            }
        })

        $BannerStage.addEventListener("mousemove", function (e){
            if(windowidth < 1024){
            if(pressed){
                currentX = e.clientX 
                $BannerStage.style.transform ='translateX(' + (BannerCurrentPosion - (startX - currentX)).toString() + 'px)';
            }
            }
        })

        $BannerStage.addEventListener("mouseup", function (e){
            if(windowidth < 1024){
            pressed= false;
            if( (startX - currentX) > 0 ){
                handlenext();
                return
            }
            handleprev();
            }
        })

        $BannerStage.addEventListener("mouseleave", function (e){
            if(windowidth < 1024){
            if(pressed){
            pressed= false;
            if( (startX - currentX) > 0 ){
                handlenext();
                return
            }
            handleprev();
            }
            }
        })
        }
        var ismove = false

        function setActiveDots(){
            var dotList = document.querySelectorAll(".BannerDotspan");
            for(var idx = 0; idx < dotList.length; idx++){
                if(idx == carouselindex){
                    dotList[idx].style.background = "#f5ca5f";
                    continue
                }
                dotList[idx].style.background = "#e4e4e4";
            }
        }
        setActiveDots();

        function handlenext(){
            switch(carouselindex){
                case 0:
                    $BannerStage.style.transition = "all 0.25s";
                    carouselindex++;
                    BannerCurrentPosion = -((windowidth - 40)*2 + carouselindex*(windowidth - 40));
                    $BannerStage.style.transform ='translateX(' + BannerCurrentPosion.toString() + 'px)';
                    setActiveDots();
                    break
                case 1:
                    if(!ismove){
                        ismove =true
                        $BannerStage.style.transition = "all 0.25s";
                        carouselindex++;
                        BannerCurrentPosion =  -((windowidth - 40)*2 + carouselindex*(windowidth - 40));
                        $BannerStage.style.transform ='translateX(' + BannerCurrentPosion.toString() + 'px)';
                        setTimeout(function(){
                        $BannerStage.style.transition = "none";
                        carouselindex = 0;
                        BannerCurrentPosion =  -((windowidth - 40)*2 + carouselindex*(windowidth - 40))
                        $BannerStage.style.transform ='translateX(' + BannerCurrentPosion.toString() + 'px)';
                        ismove = false;
                        setActiveDots();
                        },250);
                    }
                    break;
                }
        }

        function handleprev(){
            switch(carouselindex){
                case 0:
                    if(!ismove){
                        ismove = true;
                        $BannerStage.style.transition = "all 0.25s";
                        carouselindex--;
                        BannerCurrentPosion =  -((windowidth - 40)*2 + carouselindex*(windowidth - 40));
                        $BannerStage.style.transform ='translateX(' + BannerCurrentPosion.toString() + 'px)';
                        setTimeout(function(){
                        $BannerStage.style.transition = "none";
                        carouselindex = 1;
                        BannerCurrentPosion =  -((windowidth - 40)*2 + carouselindex*(windowidth - 40));
                        $BannerStage.style.transform ='translateX(' + BannerCurrentPosion.toString() + 'px)';
                        ismove = false;
                        setActiveDots();
                        }, 250)
                    }
                    break
                case 1:
                    $BannerStage.style.transition = "all 0.25s";
                    carouselindex--;
                    BannerCurrentPosion =  -((windowidth - 40)*2 + carouselindex*(windowidth - 40));
                    $BannerStage.style.transform ='translateX(' + BannerCurrentPosion.toString() + 'px)';  
                    setActiveDots();
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

    }
    else{
        document.querySelector('.BannerContent').style.padding = "20px 0";
        document.querySelector('.BannerInbox').style.display = 'none';
        document.querySelector(".BannerStage").style.transform= "translateX(0)";
        console.log(windowidth, 'over1024');
        $BannerStage.style.width = windowidth.toString() +"px"
        
        var $BannerItems = document.querySelectorAll(".BannerItem");
        for(var idx = 0; idx < $BannerItems.length; idx++){
            $BannerItems[idx].style.width = (windowidth/2).toString() +"px";
            $BannerItems[idx].style.height = '156px';
            $BannerItems[idx].style.textAlign = 'center';
        }
        var mobbackground = document.querySelectorAll(".BannerItem .BannerItemBackgroundMobile");
        for (var idx = 0; idx< mobbackground.length; idx ++){
            mobbackground[idx].style.display = 'none';
        }
        var pcbackground = document.querySelectorAll('.BannerItem .BannerItemBackgroundPC');
        for (var idx = 0; idx < pcbackground.length; idx++){
            pcbackground[idx].style.display = 'block';
        }
        var mobileImg = document.querySelectorAll('.BannerItem .BannerItemImageMobile');
        for (var idx = 0; idx < mobileImg.length; idx++){
            mobileImg[idx].style.display = 'none';
        }

        var pcImg = document.querySelectorAll('.BannerItem .BannerItemImagePc');
        for (var idx = 0; idx < pcImg.length; idx++){
            pcImg[idx].style.display = 'block';
        }

        var moreButtons = document.querySelectorAll('.BannerItem .BannerItemMore');
        for (var idx = 0; idx < moreButtons.length; idx++){
            moreButtons[idx].style.display = 'block';
        }

        var $BannerCloneItems = document.querySelectorAll(".BannerCloneItem");
            for(var idx = 0; idx < $BannerCloneItems.length; idx++){
                $BannerCloneItems[idx].style.display = "none";
        }

        var BannerDesc = document.querySelectorAll(".BannerItem .Bannerdesc");
            for(var idx = 0; idx < BannerDesc.length; idx++){
                console.log(BannerDesc[idx].style);
                BannerDesc[idx].style.top = '36%';
                BannerDesc[idx].style.fontSize ='12px';
                BannerDesc[idx].style.lineHeight = '20px';
                BannerDesc[idx].style.fontWeigth = '300';
                BannerDesc[idx].style.letterSpacing = '-.21px';
                BannerDesc[idx].style.color = '#222';
            }

        document.querySelector('.BannerNav').style.display= 'none';
    }
}



BANNER();
//export default BANNER;