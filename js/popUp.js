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
popUpSlide.appendChild(popUpSlideAnchor[0].cloneNode(true));

function handleSlideStart() {
  slide = setInterval(function () {
    popUpSlide.style.transition = "transform 1s ease-in-out";
    popUpSlide.style.transform = "translateX(" + -1 * 360 * slideIndex + "px)";
    slideIndex++;
    if (slideIndex === 4) {
      setTimeout(function () {
        popUpSlide.style.transition = "none";
        popUpSlide.style.transform = "translateX(0px)";
        handleSlideStart();
      }, 900);
      handleSlideStop();
      slideIndex = 0;
    }
  }, 3000);
}

function handleSlideStop() {
  clearInterval(slide);
}

// 슬라이드 이벤트 끝

// 슬라이드 버튼
popUpDot.forEach(function (el) {
  if (el.addEventListener) {
    el.addEventListener("click", function () {
      handleSlideStop();
      popUpSlide.style.transform =
        "translateX(" + el.dataset.slideIndex * -1 * 360 + "px)";
      slideIndex = el.dataset.slideIndex;
      setTimeout(handleSlideStart(), 5000);
    });
  } else {
    el.attachEvent("onclick", function () {
      handleSlideStop();
      popUpSlide.style.transform =
        "translateX(" + el.dataset.slideIndex * -1 * 360 + "px)";
      slideIndex = el.dataset.slideIndex;
      setTimeout(handleSlideStart(), 5000);
    });
  }
});
// 슬라이드 버튼 끝

handleSlideStart();
