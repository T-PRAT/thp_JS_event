//--------------------1-----------------------//
const footer = document.querySelector("footer");
var c = 1;

footer.addEventListener('click', () => {
	console.log("clique numéro " + c++);
});

//--------------------2-----------------------//
const buttonMenu = document.querySelector(".navbar-toggler");
const toggleMenu = document.getElementById("navbarHeader");

buttonMenu.addEventListener('click', () => {
	toggleMenu.classList.toggle("collapse");
});

//--------------------3-----------------------//
const firstCard = document.querySelector("body > main > div > div > div > div:nth-child(1) > div");
const firstCardEditButton = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");

firstCardEditButton.addEventListener('click', () => {
	firstCard.style.color = "red";
});

//--------------------4-----------------------//
const secondCard = document.querySelector("body > main > div > div > div > div:nth-child(2) > div");
const secondCardButton = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");

secondCardButton.addEventListener('click', () => {
	secondCard.style.color === "green" ? secondCard.style.color = "" : secondCard.style.color = "green";
});

//--------------------5-----------------------//
const navBar = document.querySelector("body > header");
const cdnLink = document.styleSheets[0];

navBar.addEventListener('dblclick', () => {
	cdnLink.disabled ? cdnLink.disabled = false : cdnLink.disabled = true;
});

//--------------------6-----------------------//
const viewButtons = document.querySelectorAll(".btn-success");
const cardsText = document.getElementsByClassName("card-text");
const cardsImage = document.querySelectorAll(".card-img-top");

viewButtons.forEach((viewButton, i) =>
	viewButton.addEventListener('mouseover', () => {
		//cardsText[i].style.visibility === "hidden" ? cardsText[i].style.visibility = "" : cardsText[i].style.visibility = "hidden";
		cardsText[i].classList.toggle("collapse");
		cardsImage[i].style.width === "20%" ? cardsImage[i].style.width = "100%" : cardsImage[i].style.width = "20%";
	})
);

//--------------------7-----------------------//
const greyButton = document.querySelector("body > main > section > div > p > a.btn.btn-secondary.my-2");
const cards = document.getElementsByClassName("col-md-4");
const album = document.querySelector("body > main > div > div > div");

greyButton.addEventListener('click', () => {
	album.insertBefore(cards[5], cards[0]);
});

//--------------------8-----------------------//
const blueButton = document.querySelector("body > main > section > div > p > a.btn.btn-primary.my-2")

blueButton.addEventListener('click', (event) => {
	event.preventDefault();
	album.insertBefore(cards[0], cards[5].nextSibling);
});

//--------------------9-----------------------//
