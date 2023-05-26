// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// languaje functionality

//accessing data-languaje property

const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]")
//function to read selected json file

const changeLanguage = async language =>{
  const requestJson = await fetch(`./myassets/languages/${language}.json`);
  const texts = await requestJson.json();

  for (const textToChange of textsToChange){
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.innerHTML = texts[section][value];
  }
};


flagsElement.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});
