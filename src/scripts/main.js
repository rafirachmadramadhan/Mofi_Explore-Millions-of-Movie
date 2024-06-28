import './component/movie-list.js';
import './component/app-search.js';
import DataSource from './data/data-source.js';
 
const main = () => {
  const searchElement = document.querySelector('app-search');
  const movieListElement = document.querySelector('mofi-list');
  
 
  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovie(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };
 
  const renderResult = results => {
    movieListElement.movies = results;
  };
 
  const fallbackResult = message => {
    movieListElement.renderError(message);
  };
 
  searchElement.clickEvent = onButtonSearchClicked;
};
 
export default main;