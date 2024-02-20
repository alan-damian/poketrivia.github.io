// "use strict";

let cantidadAcertados = sessionStorage.getItem('cantidadAcertados');
let cantidadEncuestados = sessionStorage.getItem('cantidadEncuestados');


const data = JSON.parse(jsonData);


function restart() {

    let txtResult = document.getElementById("resultText");

    document.getElementById("imgpokemon").classList.remove("success");


    numero = Math.floor(Math.random() * data.length);

    let imgpokemon = document.getElementById("imgpokemon");



    imgpokemon.src = data[numero].thumbnail;
    txtResult.innerHTML = "";
    
    console.log(data[numero].name);

}

function agregarEventos() {
    




    console.log("prueba de funcion eventos");
}


agregarEventos();
restart();
