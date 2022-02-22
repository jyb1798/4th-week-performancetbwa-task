var mobileNav = document.querySelector(".FooterMobileNav");
var footer = document.querySelector(".Footer");

if (window.addEventListener) {
  window.addEventListener("scroll", function () {
    footer.getBoundingClientRect().top  <= this.window.pageYOffset
      // ? mobileNav.classList.add("isFooter")
      // : mobileNav.classList.remove("isFooter");
      ? (mobileNav.className = "FooterMobileNav isFooter")
      : (mobileNav.className = "FooterMobileNav");
  });
} else {
  window.onscroll = function () {
    footer.getBoundingClientRect().top <= this.window.pageYOffset
      ? (mobileNav.className = "FooterMobileNav isFooter")
      : (mobileNav.className = "FooterMobileNav");
  };
}
