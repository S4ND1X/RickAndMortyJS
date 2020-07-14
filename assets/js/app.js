import API from "./api.js";
import Character from "./character.js";

//* Instance of the API
const api = new API();

let currentCharacter;

let currentIdCharacter = 1;

let characterNamePlaceHolderContainer = document.getElementById(
  "character-name-placeholder"
);


let music = document.getElementById("audio");
music.loop = true;

//* Wait for page to load
document.addEventListener("DOMContentLoaded", initApp);

//* Class to contain data about character, UI methods and logic methods

//* Get the first character when page is loaded
function initApp() {
  api.getCharacter(1).then((character) => {
    currentCharacter = new Character(character);
    characterNamePlaceHolderContainer.innerHTML = character.name;
  });
  music.play();
}

const arrowNextCharacter = document.getElementById("arrow-next");
arrowNextCharacter.addEventListener("click", () => {
  api.getCharacter(++currentIdCharacter).then((character) => {
    currentCharacter.setCharacter(character);
    characterNamePlaceHolderContainer.innerHTML = character.name;
  });
});


let muteButton = document
  .getElementById("mute")
  .addEventListener("click", (e) => {
    e.preventDefault();
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  });
