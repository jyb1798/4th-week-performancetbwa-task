if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

var popUp = document.querySelector(".popUp");
var closeBtn = document.querySelector(".popUpCloseBtn");
var popUpSlide = document.querySelector(".popUpSlide");
var popUpDot = document.querySelectorAll(".popUpDot > a");
var popUpSlideAnchor = document.querySelectorAll(".popUpSlide > a");
var popUpCheck = document.querySelector("#popUpCheck");
var slideIndex = 0;
var today = new Date();
var slide;

// 오늘 하루 열지 않기 체크
var isPopupCheck = localStorage.getItem("check");

if (popUpCheck.addEventListener) {
  popUpCheck.addEventListener("change", function (e) {
    var today = new Date();
    e.target.checked
      ? localStorage.setItem(
          "check",
          JSON.stringify({
            date: today,
            check: true,
          })
        )
      : localStorage.removeItem("check");
  });
} else {
  popUpCheck.attachEvent("onchange", function (e) {
    var today = new Date();
    e.target.checked
      ? localStorage.setItem(
          "check",
          JSON.stringify({
            date: today,
            check: true,
          })
        )
      : localStorage.removeItem("check");
  });
}

if (isPopupCheck !== null) {
  var newDate = new Date(JSON.parse(isPopupCheck).date);
  new Date(
    newDate.getFullYear(),
    newDate.getMonth() + 1,
    newDate.getDate() + 1
  ) > today
    ? (popUp.style.display = "none")
    : null;
}
// 오늘 하루 열지 않기 체크 끝

// 팝업 닫기
if (closeBtn.addEventListener) {
  closeBtn.addEventListener("click", function () {
    popUp.style.display = "none";
  });
} else {
  closeBtn.attachEvent("onclick", function () {
    popUp.style.display = "none";
  });
}
// 팝업 닫기 끝

// 슬라이드 이벤트

var firstNode = popUpSlideAnchor[0].cloneNode(true)

popUpSlide.appendChild(firstNode);

// -webkit-transform: translate(;
// -moz-transform: translate();
// -ms-transform: translate();
// -o-transform: translate();

function handleSlideStart() {
  slide = setInterval(function () {
    popUpSlide.style.transition = "transform 1s ease-in-out";
    popUpSlide.style.transform = "translateX(" + -1 * 360 * slideIndex + "px)";
    popUpSlide.style.webKitTransform = "translateX(" + -1 * 360 * slideIndex + "px)";
    popUpSlide.style.MozTransform = "translateX(" + -1 * 360 * slideIndex + "px)";
    popUpSlide.style.OTransform = "translateX(" + -1 * 360 * slideIndex + "px)";
    popUpSlide.style.msTransform = "translateX(" + -1 * 360 * slideIndex + "px)";
    popUpDot.forEach(function(el){
      el.style.backgroundColor = el.dataset.slideIndex === String(slideIndex) ? 'red':'#bdbdbd' ;
    })
    slideIndex++;
    if (slideIndex === 4) {
      popUpDot[0].style.backgroundColor = 'red'
      setTimeout(function () {
        popUpSlide.style.transition = "none";
        popUpSlide.style.transform = "translateX(0px)";
        popUpSlide.style.webKitTransform = "translateX(0px)";
        popUpSlide.style.MozTransform ="translateX(0px)";
        popUpSlide.style.OTransform = "translateX(0px)";
        popUpSlide.style.msTransform = "translateX(0px)";
        popUpSlide.style.transform = "translateX(0px)";
      }, 1000);
      slideIndex = 1;
    }
  }, 3000);
}

handleSlideStart();

function handleSlideStop() {
  clearInterval(slide);
}

// 슬라이드 이벤트 끝

// 슬라이드 버튼
popUpDot.forEach(function (el) {
  if (el.addEventListener) {
    el.addEventListener("click", function () {
      handleSlideStop();
      popUpSlide.style.transition = "transform 1s ease-in-out";
      popUpSlide.style.transform = "translateX(" + el.dataset.slideIndex * -1 * 360 + "px)";
      popUpSlide.style.webKitTransform = "translateX(" + el.dataset.slideIndex * -1 * 360 + "px)";
      popUpSlide.style.MozTransform = "translateX(" + el.dataset.slideIndex * -1 * 360 + "px)";
      popUpSlide.style.OTransform = "translateX(" + el.dataset.slideIndex * -1 * 360 + "px)";
      popUpSlide.style.msTransform = "translateX(" + el.dataset.slideIndex * -1 * 360 + "px)";
      slideIndex = el.dataset.slideIndex;
      popUpDot.forEach(function(el){
        el.style.backgroundColor = el.dataset.slideIndex === String(slideIndex) ? 'red':'#bdbdbd' ;
      })
      setTimeout(handleSlideStart(), 3000);
    });
  } else {
    el.attachEvent("onclick", function () {
      handleSlideStop();
      popUpSlide.style.transition = "transform 1s ease-in-out";
      popUpSlide.style.transform = "translateX(" + el.dataset.slideIndex * -1 * 360 + "px)";
      popUpSlide.style.webKitTransform = "translateX(" + el.dataset.slideIndex * -1 * 360 + "px)";
      popUpSlide.style.MozTransform = "translateX(" + el.dataset.slideIndex * -1 * 360 + "px)";
      popUpSlide.style.OTransform = "translateX(" + el.dataset.slideIndex * -1 * 360 + "px)";
      popUpSlide.style.msTransform = "translateX(" + el.dataset.slideIndex * -1 * 360 + "px)";
      slideIndex = el.dataset.slideIndex;
      popUpDot.forEach(function(el){
        el.style.backgroundColor = el.dataset.slideIndex === String(slideIndex) ? 'red':'#bdbdbd' ;
      })
      setTimeout(handleSlideStart(), 3000);
    });
  }
});
// 슬라이드 버튼 끝
