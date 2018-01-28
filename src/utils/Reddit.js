
const favorites = [];
const Reddit = {
  // method to get posts
  getPosts() {
    return fetch(`https://cors-anywhere.herokuapp.com/https://www.reddit.com/r/analog/top/.json`,
      { method: 'GET'}
    ).then(response => {
      return response.json();
    })
  },

  getFavorites() {
    // return favorites;
    return favorites;
  },

  addFavorite(item) {
    favorites.push(item);
  }
}


export default Reddit;
