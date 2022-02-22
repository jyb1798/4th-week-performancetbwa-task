var ImageMainContent = document.querySelector(".ImageMainContent");
var ImageItemContainerFirst = document.querySelector(
  ".ImageItemContainerFirst"
);

var ImageItemContainerSecond = document.querySelector(
  ".ImageItemContainerSecond"
);
var ImageNextButton = document.querySelector(".ImageNextButton");
var ImagePrevButton = document.querySelector(".ImagePrevButton");

var ClassList = [
  {
    name: "틴케이스 센터피스(3/7~3/13)",
    image: "images/MainImage01PC.png",
    placeList: ["잠실점", "월계점", "구로점", "송파점", "부산동래점"],
    price: "79,000",
  },
  {
    name: "오아시스 리스(2/23~2/27)",
    image: "images/SubImage01PC.png",
    placeList: ["잠실점", "월계점", "구로점", "송파점", "부산동래점"],
    price: "79,000",
  },
  {
    name: "클래식 핸드타이드(2/28~3/6)",
    image: "images/SubImage02PC.png",
    placeList: ["잠실점", "월계점", "구로점", "송파점", "부산동래점"],
    price: "79,000",
  },
];

function insertClass() {
  ImageMainContent.innerHTML =
    "<span class='ImageWrapper'><img src='" +
    ClassList[0].image +
    "' alt='mainimage' class='ImageMain'/><div class='ImageText'><p>새로운 일상을 경험하는</p><h3>2월 플라워 클래스</h3></div></span>";

  ImageItemContainerFirst.innerHTML =
    "<img src='" +
    ClassList[1].image +
    "' alt='subimage' class='ImageSub'/><div class='ImageItemTag'><h3>" +
    ClassList[2].name +
    "</h3><h3>" +
    ClassList[2].price +
    "</h3><div class='ImageBtnGroup'><button>" +
    ClassList[2].placeList[0] +
    "</button><button>" +
    ClassList[2].placeList[1] +
    "</button><button>" +
    ClassList[2].placeList[2] +
    "</button><button>" +
    ClassList[2].placeList[3] +
    "</button><button>" +
    ClassList[2].placeList[4] +
    "</button></div>";

  ImageItemContainerSecond.innerHTML =
    "<img src='" +
    ClassList[2].image +
    "' alt='subimage' class='ImageSub'/><div class='ImagItemSecondTag'><h3>" +
    ClassList[1].name +
    "</h3><h3>" +
    ClassList[2].price +
    "</h3><div class='ImageBtnGroup'><button>" +
    ClassList[2].placeList[0] +
    "</button><button>" +
    ClassList[2].placeList[1] +
    "</button><button>" +
    ClassList[2].placeList[2] +
    "</button><button>" +
    ClassList[2].placeList[3] +
    "</button><button>" +
    ClassList[2].placeList[4] +
    "</button></div>";
}

ImageNextButton.addEventListener("click", function () {
  var fistList = ClassList.pop();
  ClassList.unshift(fistList);
  insertClass();
});

ImagePrevButton.addEventListener("click", function () {
  var lastList = ClassList.shift();
  ClassList.push(lastList);
  insertClass();
});

insertClass();
