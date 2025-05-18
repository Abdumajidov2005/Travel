const navbar = document.querySelector("nav");
const header = document.querySelector("header");

const logo = document.querySelector(".logo");

const aboutUs = document.querySelector(".aboutUs");
const mainSection = document.querySelector(".mainSection");
const homePage = document.querySelector(".homePage");

const heroMain = document.querySelector(".heroMain");
const aboutsPagesList = document.querySelector(".aboutsPagesList");
const searching = document.querySelector(".searching");

const secondPage = document.querySelector(".secondPage");

const nextPage = document.querySelector(".nextPage");
const tour_packages = document.querySelector(".tour_packages");

// Navbar scroll effekti
const navbarTheme = () => {
  window.addEventListener("scroll", () => {
    const heroBottom = heroMain.offsetHeight;

    if (window.scrollY > heroBottom - navbar.offsetHeight) {
      navbar.classList.remove("nav-transparent");
      navbar.classList.add("nav-colored");
    } else {
      navbar.classList.add("nav-transparent");
      navbar.classList.remove("nav-colored");
    }
  });

  navbar.classList.add("nav-transparent");
};

navbarTheme();

const homePages = () => {
  mainSection.classList.remove("hidden");
  heroMain.classList.remove("hidden");
  aboutsPagesList.classList.remove("hidden");
  secondPage.classList.remove("hidden");
  tour_packages.classList.remove("hidden");
  header.classList.remove("hidden");
  navbar.classList.remove("hidden");
  homePage.style = "border-bottom: 2px solid #fa8b02";
  aboutUs.style = "border-bottom: 0";
  nextPage.style = "border-bottom: 0";
};

const logoHome = () => {
  mainSection.classList.remove("hidden");
  heroMain.classList.remove("hidden");
  aboutsPagesList.classList.remove("hidden");
  secondPage.classList.remove("hidden");
  tour_packages.classList.remove("hidden");
  header.classList.remove("hidden");
  navbar.classList.remove("hidden");
  homePage.style = "border-bottom: 2px solid #fa8b02";
  aboutUs.style = "border-bottom: 0";
  nextPage.style = "border-bottom: 0";
};

// Sahifa o'zgaruvchilari
const aboutsPage = () => {
  mainSection.classList.add("hidden");
  heroMain.classList.add("hidden");
  aboutsPagesList.classList.add("hidden");
  secondPage.classList.add("hidden");
  searching.style = "transition-delay: 20s; transition: all 2s ease";
  tour_packages.classList.remove("hidden");
  header.classList.remove("hidden");
  navbar.classList.remove("hidden");
  aboutUs.style = "border-bottom: 2px solid #fa8b02";
  homePage.style = "border-bottom: 0";
  nextPage.style = "border-bottom: 0";
};

const tourPages = () => {
  heroMain.classList.add("hidden");
  mainSection.classList.add("hidden");
  tour_packages.classList.add("hidden");
  secondPage.classList.remove("hidden");
  aboutsPagesList.classList.remove("hidden");
  header.classList.add("hidden");
  navbar.classList.add("hidden");
  nextPage.style = "border-bottom: 2px solid #fa8b02";
  aboutUs.style = "border-bottom: 0";
  homePage.style = "border-bottom: 0";
};

// LocalStorage qo‘llab-quvvatlash

homePage.addEventListener("click", () => {
  localStorage.setItem("currentPage", "home");
  homePages();
});

logo.addEventListener("click", () => {
  localStorage.setItem("currentPage", "logo");
  logoHome();
});

aboutUs.addEventListener("click", () => {
  localStorage.setItem("currentPage", "about");
  aboutsPage();
});

nextPage.addEventListener("click", () => {
  localStorage.setItem("currentPage", "tour");
  tourPages();
});

// Sayt yuklanganda sahifani tiklash
window.addEventListener("DOMContentLoaded", () => {
  const currentPage = localStorage.getItem("currentPage");

  if (currentPage === "about") {
    aboutsPage();
  } else if (currentPage === "tour") {
    tourPages();
  } else if (currentPage === "logo") {
    logoHome();
  } else {
    homePages(); // default sahifa
  }
});
