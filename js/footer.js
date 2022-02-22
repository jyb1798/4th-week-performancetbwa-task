var mobileNav = document.querySelector(".FooterMobileNav");
var footer = document.querySelector(".Footer");

if (window.addEventListener) {
  window.addEventListener("scroll", function () {
    footer.getBoundingClientRect().top + 500 <= this.window.scrollY
      ? mobileNav.classList.add("isFooter")
      : mobileNav.classList.remove("isFooter");
  });
} else {
  window.onscroll = function () {
    footer.getBoundingClientRect().top + 500 <= this.window.scrollY
      ? mobileNav.classList.add("isFooter")
      : mobileNav.classList.remove("isFooter");
  };
}
