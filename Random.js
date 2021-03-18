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
        <div class="card col-sm-4" style="width: 18rem; background-color: #DCDCDC;">
        <img style="width: 100px; height: auto" class="card-img-top center" src="${beers.image_url}">
        <h3>${beers.name}</h3>
        <div>${beers.tagline}</div>
        </div>`;
    });

    document.getElementById("output").innerHTML = output;
}