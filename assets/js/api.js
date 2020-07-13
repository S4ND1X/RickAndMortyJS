export default class API {
  getLocation() {}

  getCharacter() {
    fetch("https://rickandmortyapi.com/api/character/1")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }

  getEpisode() {}
}
