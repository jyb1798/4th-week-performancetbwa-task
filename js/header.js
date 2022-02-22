var HeaderFixed = document.querySelector(".HeaderFixed");
var headerHeight = HeaderFixed.offsetHeight;

window.onscroll = function () {
  var windowTop = window.pageYOffset;
  if (windowTop > 0) {
    HeaderFixed.classList.add("HeaderDrop");
  } else {
    HeaderFixed.classList.remove("HeaderDrop");
  }
};

$('a[href^="#"]').click(function () {
  var the_id = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(the_id).offset().top - 20,
    },
    "slow"
  );

  return false;
});
