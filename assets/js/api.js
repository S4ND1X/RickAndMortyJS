export default class API {
  getLocation() {}

  //* Async method to wait for response
  async getCharacter(id) {
    //* Request to the api and wait for success
    const request = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    //* Wait for response to be converted
    return await request.json();
  }

  getEpisode() {}
}
