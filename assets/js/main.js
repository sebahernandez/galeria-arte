document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentUrl = window.location.pathname;

  navLinks.forEach((link) => {
    if (link.href.includes(currentUrl)) {
      link.classList.add("active");
      link.style.color = "white";
    } else {
      link.classList.remove("active");
    }
  });
});
