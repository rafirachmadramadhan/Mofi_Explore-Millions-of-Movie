import 'bootstrap/dist/css/bootstrap.min.css';

class AppSearch extends HTMLElement {
  connectedCallback(){
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }
 
  get value() {
    return this.querySelector('#searchElement').value;
  }
 
  render() {
    this.innerHTML = `
      <style>
        .container {
          padding: 20px;
        }

        .full-width {
          width: 100%;
        }

        .atass{
          height: 200px;
          padding-top: 40px;
        }
      </style>
      
      <div class="atass bg-primary bg-opacity-50">
        <div> 
          <h2 class="text-center text-light">Welcome to MoFi</h2>
          <h4 class="text-center text-light">Explore Millions of Movie Here</h4>
        </div>
        <div id="search-container" class="container-fluid d-flex">
          <input class="form-control me-2" placeholder="search here" id="searchElement" type="search">
          <button id="searchButtonElement" class="btn btn-outline-light" type="submit">Search</button>
        </div>
      </div>
    `;

    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}
 
customElements.define('app-search', AppSearch);