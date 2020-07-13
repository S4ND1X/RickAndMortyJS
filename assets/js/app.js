import API from "./api.js";

//* Instance of the API
const api = new API();

//* Div container of the character template
const characterContainer = document.querySelector(".character-container");

//* Wait for page to load
document.addEventListener("DOMContentLoaded", initApp);

//* Class to contain data about character, UI methods and logic methods
class Character {
  constructor(character) {
    this.character = character;
    this.render();
  }

  //* Create html template for the character info
  setCharacterTemplate() {
    return `
            <article class="character">
                <div class="character-grid">
                    <h1>${this.character.name}</h1>
                    <img src="${this.character.image}" alt="">
                </div>
            </article>`;
  }

  //* Method to display character on screen
  render() {
    characterContainer.innerHTML = this.setCharacterTemplate();
  }
}

//* Get the first character when page is loaded
function initApp() {
  api.getCharacter(1).then((character) => {
    // new Character(character);
    console.log(character);
  });
}
