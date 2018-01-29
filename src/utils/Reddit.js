const favorites = [];
const Reddit = {
  
  getPosts() {
    return fetch(`https://cors-anywhere.herokuapp.com/https://www.reddit.com/r/analog/top/.json`,
      { method: 'GET'}
    ).then(response => {
      return response.json();
    })
  },

  getFavorites() {
    return favorites;
  },

  addFavorite(item) {
    favorites.push(item);
  },

  deleteFavorite(id) {
    favorites.splice(id, 1);
  }

}


export default Reddit;
