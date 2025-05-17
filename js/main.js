const navbar = document.querySelector("nav");

const aboutUs = document.querySelector(".aboutUs");
const mainSection = document.querySelector(".mainSection");
const homePage = document.querySelector(".homePage");


const heroMain = document.querySelector(".heroMain");
const aboutsPagesList = document.querySelector(".aboutsPagesList");
const searching = document.querySelector(".searching");

const secondPage = document.querySelector(".secondPage");

const navbarTheme = ()=>{
  window.addEventListener("scroll", () => {
    const heroBottom = hero.offsetHeight;
  
    if (window.scrollY > heroBottom - navbar.offsetHeight) {
      navbar.classList.remove("nav-transparent");
      navbar.classList.add("nav-colored");
    } else {
      navbar.classList.add("nav-transparent");
      navbar.classList.remove("nav-colored");
    }
  });
  
  navbar.classList.add("nav-transparent");
}

navbarTheme();


const aboutsPage = ()=>{
  mainSection.classList.add("hidden");
  heroMain.classList.add("hidden");
  aboutsPagesList.classList.add("hidden");
  secondPage.classList.add("hidden");
  searching.style = " transition-delay: 20s; transition: all 2s ease";
}

const homePages = ()=>{
  mainSection.classList.remove("hidden");
  heroMain.classList.remove("hidden");
  aboutsPagesList.classList.remove("hidden");
  secondPage.classList.remove("hidden");
}


aboutUs.addEventListener("click", aboutsPage);
homePage.addEventListener("click", homePages)