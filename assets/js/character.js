export default class Character {
  constructor(character) {
    this.character = character;
    this.characterImageContainer = document.querySelector(
      ".character-image-container"
    );
    this.characterNameContainer = document.querySelector(
      ".character-name-container"
    );
    this.characterDescriptionContainer = document.querySelector(
      ".character-description-container"
    );
    this.render();
  }

  //* Create html template for the character info
  setCharacterImageTemplate() {
    return `
      <img class="character-img" src="${this.character.image}" alt="${this.character.name}">`;
  }
  setCharacterNameTemplate() {
    return `
            <div class="character-name">
                <h2>${this.character.name}</h2>
            </div>`;
  }
  setCharacterDecriptionTemplate() {
    return `
            <div class="character-labels">
                <h3 class="character-label">Origin: ${this.character.origin.name}</h3>
                <h3 class="character-label">Specie: ${this.character.species}</h3>
                <h3 class="character-label">Status: ${this.character.status}</h3>
            </div>`;
  }

  async cleanScreen(){
    this.characterImageContainer.innerHTML='';
    this.characterNameContainer.innerHTML='';
    this.characterDescriptionContainer.innerHTML='';
  }

  //* Method to display character on screen
  render() {
    this.cleanScreen();
    this.characterImageContainer.innerHTML = this.setCharacterImageTemplate();
    this.characterNameContainer.innerHTML = this.setCharacterNameTemplate();
    this.characterDescriptionContainer.innerHTML = this.setCharacterDecriptionTemplate();
  }
}
