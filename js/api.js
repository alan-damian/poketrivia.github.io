



const pokeName = document.querySelector('#data-poke-name');
const pokeId = document.querySelector('#data-poke-id');
const pokeTypes = document.querySelector('#data-poke-types');
const pokeStats = document.querySelector('#data-poke-stats');

async function buscarPokemon(numero) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`);
    const data = await response.json();




    // porner  el nombre del pokemon en la tarjeta de datos 
    pokeName.textContent = data.name;
    pokeId.textContent = data.id;

    // limpiar types y stats
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';

    // agregar types
    data.types.forEach(type => {
      const typeDiv = document.createElement('div');
      typeDiv.textContent = type.type.name;
      pokeTypes.appendChild(typeDiv);
    });

    // agrega el  valor a las estats
    data.stats.forEach(stat => {
      const statDiv = document.createElement('div');
      statDiv.textContent = stat.stat.name;

      const amountDiv = document.createElement('div');
      amountDiv.textContent = stat.base_stat;

      const statContainer = document.createElement('div');
      statContainer.appendChild(statDiv);
      statContainer.appendChild(amountDiv);

      pokeStats.appendChild(statContainer);

      

    });

    //modificar estado del section para hacerlo visible, y borrar contenido del inputText
    document.getElementById("skills-description").style.display="block";
    inputText.value ="";

  } catch (error) {
    console.error(error);
  }
}