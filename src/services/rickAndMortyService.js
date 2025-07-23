const API_BASE_URL = 'https://rickandmortyapi.com/api/character';

export const rickAndMortyService = {
  /**
   * @returns {Promise<Array>} Array con los primeros 20 personajes
   */
  async getCharacters() {
    try {
      const response = await fetch(API_BASE_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      return data.results.slice(0, 20);
    } catch (error) {
      console.error('Error fetching characters:', error);
      throw error;
    }
  }
}; 