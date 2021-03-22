fetchBeer();
function fetchBeer(){
    fetch("https://api.punkapi.com/v2/beers/random")
    .then(resp => resp.json())
    .then((beers) => render(beers));
}

function render(beers) {
    let output = "";

    beers.forEach((beers) => {

        var tempImage;
        var img = new Image();
        img.src = "Images/placeholder.png";

        if (beers.image_url === null){
            tempImage = img.src;
        }
        else {
            tempImage = beers.image_url;
        }
         
        output += `
        <div class="div-random-main" style="width: 18rem; background-color: #DCDCDC;">
        <img style="width: 100px; height: auto" class="img-random" src="${tempImage}">
        <h3 class="h3-random-name">${beers.name}</h3>
        <div class="div-random-tagline">${beers.tagline}</div>
        </div>`;
    });

    document.getElementById("output").innerHTML = output;
}