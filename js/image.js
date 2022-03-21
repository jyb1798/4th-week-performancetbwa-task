var ImageMainContent = document.querySelector(".ImageMainContent");
var ImageItemContainerFirst = document.querySelector(
  ".ImageItemContainerFirst"
);

var ImageItemContainerSecond = document.querySelector(
  ".ImageItemContainerSecond"
);
var ImageNextButton = document.querySelector(".ImageNextButton");
var ImagePrevButton = document.querySelector(".ImagePrevButton");

var FlowerImageList = [
  {
    name: "틴케이스 센터피스(3/7~3/13)",
    image: "images/1.jpg",
    placeList: ["잠실점", "월계점", "구로점", "송파점", "부산동래점"],
    price: "79,000",
  },
  {
    name: "오아시스 리스(2/23~2/27)",
    image: "images/2.jpg",
    placeList: ["잠실점", "월계점", "구로점", "송파점", "부산동래점"],
    price: "79,000",
  },
  {
    name: "클래식 핸드타이드(2/28~3/6)",
    image: "images/3.jpg",
    placeList: ["잠실점", "월계점", "구로점", "송파점", "부산동래점"],
    price: "79,000",
  },
];

function insertClass() {
  ImageMainContent.innerHTML =
    "<span class='ImageWrapper'><img src='" +
    FlowerImageList[0].image +
    "' alt='mainimage' class='ImageMain'/><div class='ImageText'><p>새로운 일상을 경험하는</p><h3>2월 플라워 클래스</h3></div></span>";

  ImageItemContainerFirst.innerHTML =
    "<img src='" +
    FlowerImageList[1].image +
    "' alt='subimage' class='ImageSub'/><div class='ImageItemTag'><h3>" +
    FlowerImageList[2].name +
    "</h3><h3>" +
    FlowerImageList[2].price +
    "</h3><div class='ImageBtnGroup'><button>" +
    FlowerImageList[2].placeList[0] +
    "</button><button>" +
    FlowerImageList[2].placeList[1] +
    "</button><button>" +
    FlowerImageList[2].placeList[2] +
    "</button><button>" +
    FlowerImageList[2].placeList[3] +
    "</button><button>" +
    FlowerImageList[2].placeList[4] +
    "</button></div>";

  ImageItemContainerSecond.innerHTML =
    "<img src='" +
    FlowerImageList[2].image +
    "' alt='subimage' class='ImageSub'/><div class='ImagItemSecondTag'><h3>" +
    FlowerImageList[1].name +
    "</h3><h3>" +
    FlowerImageList[2].price +
    "</h3><div class='ImageBtnGroup'><button>" +
    FlowerImageList[2].placeList[0] +
    "</button><button>" +
    FlowerImageList[2].placeList[1] +
    "</button><button>" +
    FlowerImageList[2].placeList[2] +
    "</button><button>" +
    FlowerImageList[2].placeList[3] +
    "</button><button>" +
    FlowerImageList[2].placeList[4] +
    "</button></div>";
}

if (ImageNextButton.addEventListener) {
  ImageNextButton.addEventListener("click", function () {
    var fistList = FlowerImageList.pop();
    FlowerImageList.unshift(fistList);
    insertClass();
  });
} else {
  ImageNextButton.attachEvent("click", function () {
    var fistList = FlowerImageList.pop();
    FlowerImageList.unshift(fistList);
    insertClass();
  });
}

if (ImagePrevButton.addEventListener) {
  ImagePrevButton.addEventListener("click", function () {
    var lastList = FlowerImageList.shift();
    FlowerImageList.push(lastList);
    insertClass();
  });
} else {
  ImagePrevButton.attachEvent("click", function () {
    var lastList = FlowerImageList.shift();
    FlowerImageList.push(lastList);
    insertClass();
  });
}

insertClass();
