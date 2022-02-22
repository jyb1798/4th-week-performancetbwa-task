const BANNER = () => {
    const $Banner = document.querySelector(".BannerSection");
    console.log($Banner);
    const windowidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const $BannerStage = $Banner.querySelector(".BannerStage");
    $BannerStage.style.transform =`translateX(${-(windowidth - 40)}px)`;
    $BannerStage.style.width = `${(windowidth - 40)* 6}px`
    const $BannerItems = $Banner.querySelectorAll(".BannerItem");
    for(let idx = 0; idx < $BannerItems.length; idx++){
        $BannerItems[idx].style.width = `${windowidth - 40}px`;
    }
    const $BannerCloneItems = $Banner.querySelectorAll(".BannerCloneItem");
    for(let idx = 0; idx < $BannerCloneItems.length; idx++){
        $BannerCloneItems[idx].style.width = `${windowidth - 40}px`;
    }
}

BANNER();
//export default BANNER;