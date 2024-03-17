// "use strict";

let cantidadAcertados = sessionStorage.getItem('cantidadAcertados');
let cantidadEncuestados = sessionStorage.getItem('cantidadEncuestados');

const data = JSON.parse(jsonData);

function restart() {

    const txtResult = document.getElementById("resultText");

    document.getElementById("imgpokemon").classList.remove("success");

    numero = Math.floor(Math.random() * data.length);


    // mostrar  el pokemon a buscar en la página
    console.log("pokemon-->> " + data[numero].name + " <<--" );
    
    const imgpokemon = document.getElementById("imgpokemon");



    imgpokemon.src = data[numero].thumbnail;
    txtResult.innerHTML = "";
    
    document.getElementById("skills-description").style.display="none";

}

function agregarEventos() {
}


agregarEventos();
restart();
