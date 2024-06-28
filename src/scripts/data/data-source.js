class DataSource {
  static searchMovie(keyword) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=0845479c9caadd1f2d0f48cf6cb358c6&language=en-US&query=${keyword}&include_adult=false`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.results) {
            return Promise.resolve(responseJson.results);
          } else {
            return Promise.reject(`not found`);
          }
        });
  }
}
 
export default DataSource;