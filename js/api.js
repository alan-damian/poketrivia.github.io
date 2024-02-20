
// function buscarPokemon () {
//     let nombre = document.querySelector("#nombre").value;
//     let tipo = document.querySelector("#tipo").value;


// // "ALT + 96" PARA ESCRIBIR >> `` << (backticks)


function buscarPokemon() {
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
      .then(response => response.json())
      .then(data => {

        const pokeName = document.querySelector('#data-poke-name');
        pokeName.innerHTML = `<h1>${data[numero].name}<h1/>`;

        const pokeId = document.querySelector('#data-poke-id');
        pokeId.innerHTML = `<h1>${data[numero].id}</h1>`;

        const pokeTypes = document.querySelector('#data-poke-types');
        pokeTypes.innerHTML = "";
        types.forEach(type => {
          let tipoDiv = document.createElement("div");
          tipoDiv.textContent = type.type.name;
          pokeTypes.appendChild(tipoDiv);
        })

        const pokeStats = document.querySelector('#data-poke-stats');
        pokeStats.innerHTML = "";
        stats.forEach(stat => {
          let estadisticaDiv = document.createElement("div");
          estadisticaDiv.classList.add("stat");
        
  
          let nameDiv = document.createElement("div");
          nameDiv.textContent = stat.stat.name;
          estadisticaDiv.appendChild(nameDiv);
          
          let amountDiv = document.createElement("div");
          amountDiv.textContent = stat.base_stat;
          estadisticaDiv.appendChild(amountDiv);
  
          pokeStats.appendChild(estadisticaDiv);
        });
      
      
      }); 
        
      //se capturan bien los datos, pro no se muestran en el html!!
      console.log(data[numero].name);
      console.log(data[numero].id);
      console.log(data[numero].id);
      console.log(data[numero].stats);
      console.log(data[numero].types);
      

}