import API from "./api.js";
import Character from "./character.js";

//* Instance of the API
const api = new API();

let currentCharacter;

let currentIdCharacter = 1;

let characterNamePlaceHolderContainer = document.getElementById(
  "character-name-placeholder"
);

//* Wait for page to load
document.addEventListener("DOMContentLoaded", initApp);

//* Class to contain data about character, UI methods and logic methods

//* Get the first character when page is loaded
function initApp() {
  api.getCharacter(1).then((character) => {
    console.log(character);
    currentCharacter = new Character(character);
    characterNamePlaceHolderContainer.innerHTML = character.name;
  });
}

const arrowNextCharacter = document.getElementById("arrow-next");

arrowNextCharacter.addEventListener("click", () => {
  api.getCharacter(++currentIdCharacter).then((character) => {
    currentCharacter.setCharacter(character);
    characterNamePlaceHolderContainer.innerHTML = character.name;
  });
});
