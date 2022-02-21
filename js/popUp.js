var popUp = document.querySelector(".popUp");
var closeBtn = document.querySelector(".popUpCloseBtn");
var popUpSlide = document.querySelector(".popUpSlide");
var popUpDot = document.querySelectorAll(".popUpDot > a");
var popUpSlideAnchor = document.querySelectorAll(".popUpSlide > a");
var slideIndex = 0;
var slide;

popUpSlide.appendChild(popUpSlideAnchor[0].cloneNode(true));
// popUpSlide.insertBefore(popUpSlideAnchor[2].cloneNode(true),popUpSlide.firstElementChild);

closeBtn.addEventListener("click", function () {
  popUp.style.display = "none";
});


function handleSlideStart() {
  slide = setInterval(function () {
    popUpSlide.style.transition = "transform 1s ease-in-out";
    popUpSlide.style.transform = "translateX(" + -1 * 360 * slideIndex + "px)";
    slideIndex++;
    if (slideIndex === 4) {
      setTimeout(function () {
        popUpSlide.style.transition = "none";
        popUpSlide.style.transform =
        "translateX(0px)";
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

popUpDot.forEach(function (el) {
  el.addEventListener("click", function () {
    handleSlideStop();
    popUpSlide.style.transform =
      "translateX(" + el.dataset.slideIndex * -1 * 360 + "px)";
    slideIndex = el.dataset.slideIndex;
    setTimeout(handleSlideStart(), 5000);
  });
});

handleSlideStart();
