fetchBeer();
function fetchBeer(){
    fetch("https://api.punkapi.com/v2/beers?page=2&per_page=42")
    .then(resp => resp.json())
    .then((beers) => render(beers));
}

function render(beers) {
    let output = "";

    beers.forEach((beers) => { 
        output += `
        <div class="card col-sm-4" style="width: 18rem; background-color: #DCDCDC;">
        <img style="width: 100px; height: auto; padding-top: 1rem" src=${beers.image_url} class="card-img-top img-random" alt="...">
        <div class="card-body">
          <h5 class="card-title">${beers.name}</h5>
          <p class="card-text">${beers.tagline}</p>
          <p class="card-text">${beers.description}</p>
        </div>
      </div>`;
    });

    document.getElementById("output").innerHTML = output;
}


