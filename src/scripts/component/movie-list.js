import './movie-item.js';
 
class MoviList extends HTMLElement {

  set movies(movies) {
    this._movies = movies;
    this.render();
  }
 
  renderError(message) {
    this.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
 
  render() {
    this.innerHTML = `
    ` ;
    this._movies.forEach(movie => {
      const movieItemElement = document.createElement('movie-item');
      movieItemElement.movie = movie;
      this.appendChild(movieItemElement);
    });
  }
}
 
customElements.define('mofi-list', MoviList);