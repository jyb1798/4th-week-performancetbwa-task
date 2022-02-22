var HeaderFixed = document.querySelector(".HeaderFixed");
var headerHeight = HeaderFixed.offsetHeight;

window.onscroll = function () {
  var windowTop = window.pageYOffset;
  if (windowTop > 0) {
    HeaderFixed.style.boxShadow = "2px 2px 10px 2px rgba(0, 0, 0, 0.1)";
    return;
  }
  if (windowTop === 0) {
    HeaderFixed.style.boxShadow = "none";
  }
};

$('a[href^="#"]').click(function () {
  var the_id = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(the_id).offset().top - 50,
    },
    "slow"
  );

  return false;
});

(function() {
  var link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = '/images/favicon.ico';
  document.getElementsByTagName('head')[0].appendChild(link);
}());