const html = document.documentElement;
const body = document.body;
const menuLinks = document.querySelectorAll(".admin-menu a");
const collapseBtn = document.querySelector(".admin-menu .collapse-btn");
const toggleMobileMenu = document.querySelector(".toggle-mob-menu");
const switchInput = document.querySelector(".switch input");
const switchLabel = document.querySelector(".switch label");
const collapsedClass = "collapsed";

// code below

// added code here to resolve the problem
// ...

// code below



collapseBtn.addEventListener("click", function () {
  body.classList.toggle(collapsedClass);
  if(this.getAttribute("aria-expanded") === "true"){
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "expand menu");
  } else {
    this.setAttribute("aria-expanded", "true");
    this.setAttribute("aria-label", "collapse menu");
  }
});


toggleMobileMenu.addEventListener("click", function () {
  body.classList.toggle("mob-menu-opened");
  this.getAttribute("aria-expanded") == "false"
    ? this.setAttribute("aria-expanded", "true")
    : this.setAttribute("aria-expanded", "false");
  this.getAttribute("aria-label") == "open menu"
    ? this.setAttribute("aria-label", "close menu")
    : this.setAttribute("aria-label", "open menu");
});


/*SHOW TOOLTIP ON MENU LINK HOVER*/
for (const link of menuLinks) {
  link.addEventListener("mouseenter", function () {
    if (
      body.classList.contains(collapsedClass) &&
      window.matchMedia("(min-width: 768px)").matches
    ) {
      const tooltip = this.querySelector("span").textContent;
      this.setAttribute("title", tooltip);
    } else {
      this.removeAttribute("title");
    }
  });
}

