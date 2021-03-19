fetchBeer();
function fetchBeer(){
    fetch("https://api.punkapi.com/v2/beers/random")
    .then(resp => resp.json())
    .then((beers) => render(beers));
}

function render(beers) {
    let output = "";

    beers.forEach((beers) => { 
        output += `
        <div class="div-random-main" style="width: 18rem; background-color: #DCDCDC;">
        <img style="width: 100px; height: auto" class="img-random" src="${beers.image_url}">
        <h3 class="h3-random-name">${beers.name}</h3>
        <div class="div-random-tagline">${beers.tagline}</div>
        </div>`;
    });

    document.getElementById("output").innerHTML = output;
}