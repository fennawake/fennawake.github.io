// header sticky
const header = document.querySelector("header")
const logo = document.querySelector(".logo")

window.onscroll = function() {
    if(window.pageYOffset > 10) {
        header.classList.add("nav-scrolled")
        logo.src = "image/logo-fsouza-white-normal.svg"
    }else {
        header.classList.remove("nav-scrolled")
        logo.src = "image/logo-fsouza-white-normal-1.svg"
    }
}





// toggle menu
// let show = true

// const menuSection = document.querySelector(".menu-section")
// const menuToggle = menuSection.querySelector(".menu-toggle")

// menuToggle.addEventListener("click", () => {    
    
//     document.body.style.overflow = show ? "hidden" : "initial"

//     menuSection.classList.toggle("on")
//     show = !show
// })


// smooth scroll sections | when menu click
document.querySelectorAll("a[href^=\"#\"]").forEach((anchor) => {
    anchor.addEventListener("click", function (ev) {
      ev.preventDefault();
  
      const targetElement = document.querySelector(this.getAttribute("href"));
      targetElement.scrollIntoView({
        block: "start",
        alignToTop: true,
        behavior: "smooth"
      });
    });
  });