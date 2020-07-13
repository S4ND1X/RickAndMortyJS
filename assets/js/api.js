export default class API {
  getLocation() {}

  async getCharacter(id) {
    const url = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

    const response = await url.json();

    return response;
  }

  getEpisode() {}
}

