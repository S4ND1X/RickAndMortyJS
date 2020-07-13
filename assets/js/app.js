import API from "./api.js";

//* Instance of the API
const api = new API();

//* Div container of the character template
const characterContainer = document.getElementById("character-container");

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
                <div class="character-name">
                    <h2 id="name">${this.character.name}</h2>
                </div>
                <img class="character-img" src="${this.character.image}" alt="">
                <div class="character-labels">
                    <h3 id="origin" class="character-label">Origin: ${this.character.origin.name}</h3>
                    <h3 id="origin" class="character-label">Specie: ${this.character.species}</h3>
                    <h3 id="status" class="character-label">Status:${this.character.status}</h3>
                </div>
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
    console.log(characterContainer);
    new Character(character);
  });
}
