

// function Pokemon(name, id) {
//     this.name = name;
//     this.id = id;
//     this.health = 100;
  
//     this.attack = function(target) {
//       if (this.health > 0) {
//         target.health -= 10;
//         console.log(this.name + " attacked " + target.name + " for 10 damage!");
//       } else {
//         console.log(this.name + " has no health left to attack!");
//       }
//     }
//   }
// var charizard = new Pokemon("Charizard", "Fire");
// console.log(charizard);
// charizard.attack(charizard); // Charizard can't attack itself!
// charizard.attack(bulbasaur); // Bulbasaur is our chosen opponent.

function Pokemon(id, name) {
  this.id = id;
  this.name = name;
  const id_str = id.toString().padStart(3, "0");
  this.thumbnail = `https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/${id_str}.png`;
}