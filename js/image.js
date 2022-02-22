document
  .querySelector(".ImageNextButton")
  .addEventListener("click", function () {
    document.querySelector(".ImageWrapper").style.transform = "translate(100%)";
  });

document
  .querySelector(".ImageNextButton")
  .addEventListener("click", function () {
    document.querySelector(".ImageItemContainerFirst").style.transform =
      "translate(-100%)";
  });

document
  .querySelector(".ImageNextButton")
  .addEventListener("click", function () {
    document.querySelector(".ImageItemContainerSecond").style.transform =
      "translate(-100%)";
  });

document
  .querySelector(".ImagePrevButton")
  .addEventListener("click", function () {
    document.querySelector(".ImageWrapper").style.transform = "translate(0%)";
  });

document
  .querySelector(".ImagePrevButton")
  .addEventListener("click", function () {
    document.querySelector(".ImageItemContainerFirst").style.transform =
      "translate(0%)";
  });

document
  .querySelector(".ImagePrevButton")
  .addEventListener("click", function () {
    document.querySelector(".ImageItemContainerSecond").style.transform =
      "translate(0%)";
  });
