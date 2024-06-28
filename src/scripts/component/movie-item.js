class movieItem extends HTMLElement {
 
  set movie(movie) {
    this._movie = movie;
    this.render();
  }
 
  render() {
    this.innerHTML = `
    <div class="card mb-3 shadow p-3 mb-5 bg-body rounded">
      <div class="row g-0">
        <div class="col-md-2">
          <img src="https://image.tmdb.org/t/p/original/${this._movie.poster_path}" class="img-fluid rounded-top" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${this._movie.original_title}</h5>
            <small class="text-muted">${this._movie.release_date}</small>
            <p class="card-text">${this._movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('movie-item', movieItem);