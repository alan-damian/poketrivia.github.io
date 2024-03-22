
function Pokemon(id) {
  this.id = id;
  
  const id_str = id.toString().padStart(3, "0");
  this.thumbnail = `https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/${id_str}.png`;


}