"use strict";

const jsonData = `[
    {
        "id": 1,
        "name": "bulbasaur",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 45,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 49,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 49,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 2,
        "name": "ivysaur",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 60,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 62,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 63,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 3,
        "name": "venusaur",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 80,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 82,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 83,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 4,
        "name": "charmander",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 39,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 52,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 43,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 5,
        "name": "charmeleon",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 58,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 64,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 58,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 6,
        "name": "charizard",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 78,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 84,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 78,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 109,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 7,
        "name": "squirtle",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 44,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 48,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 64,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 43,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 8,
        "name": "wartortle",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 59,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 63,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 58,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 9,
        "name": "blastoise",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 79,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 83,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 105,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 78,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 10,
        "name": "caterpie",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 45,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 30,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 20,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 20,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 11,
        "name": "metapod",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 50,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 20,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 25,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 25,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 30,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 12,
        "name": "butterfree",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 60,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 13,
        "name": "weedle",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 40,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 30,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 20,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 20,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 14,
        "name": "kakuna",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 45,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 25,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 25,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 25,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 15,
        "name": "beedrill",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 65,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 16,
        "name": "pidgey",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 40,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 56,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 17,
        "name": "pidgeotto",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 63,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 71,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 18,
        "name": "pidgeot",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 83,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 101,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 19,
        "name": "rattata",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 30,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 56,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 25,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 72,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 20,
        "name": "raticate",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 55,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 81,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 97,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 21,
        "name": "spearow",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 40,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 30,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 31,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 31,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 22,
        "name": "fearow",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 65,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 61,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 61,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 23,
        "name": "ekans",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 35,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 44,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 54,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 24,
        "name": "arbok",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 60,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 69,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 79,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 25,
        "name": "pikachu",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 35,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 26,
        "name": "raichu",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 60,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 110,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 27,
        "name": "sandshrew",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 50,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 20,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 30,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 28,
        "name": "sandslash",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 75,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 110,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 29,
        "name": "nidoran-f",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 55,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 47,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 52,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 41,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 30,
        "name": "nidorina",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 70,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 62,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 67,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 56,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 31,
        "name": "nidoqueen",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 90,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 92,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 87,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 76,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 32,
        "name": "nidoran-m",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 46,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 57,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 33,
        "name": "nidorino",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 61,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 72,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 57,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 34,
        "name": "nidoking",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 81,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 102,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 77,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 35,
        "name": "clefairy",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 70,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 48,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 36,
        "name": "clefable",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 95,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 73,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 37,
        "name": "vulpix",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 38,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 41,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 38,
        "name": "ninetales",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 73,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 76,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 81,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 39,
        "name": "jigglypuff",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 115,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 20,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 25,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 20,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 40,
        "name": "wigglytuff",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 140,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 41,
        "name": "zubat",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 40,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 30,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 42,
        "name": "golbat",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 75,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 43,
        "name": "oddish",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 45,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 30,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 44,
        "name": "gloom",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 60,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 45,
        "name": "vileplume",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 75,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 110,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 46,
        "name": "paras",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 35,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 25,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 47,
        "name": "parasect",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 60,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 30,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 48,
        "name": "venonat",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 60,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 49,
        "name": "venomoth",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 70,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 50,
        "name": "diglett",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 10,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 25,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 51,
        "name": "dugtrio",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 35,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 120,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 52,
        "name": "meowth",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 40,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 53,
        "name": "persian",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 65,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 115,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 54,
        "name": "psyduck",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 50,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 52,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 48,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 55,
        "name": "golduck",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 80,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 82,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 78,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 56,
        "name": "mankey",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 40,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 57,
        "name": "primeape",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 65,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 105,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 58,
        "name": "growlithe",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 55,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 59,
        "name": "arcanine",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 90,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 110,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 60,
        "name": "poliwag",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 40,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 61,
        "name": "poliwhirl",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 65,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 62,
        "name": "poliwrath",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 90,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 63,
        "name": "abra",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 25,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 20,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 15,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 105,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 64,
        "name": "kadabra",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 40,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 30,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 120,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 105,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 65,
        "name": "alakazam",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 55,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 135,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 120,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 66,
        "name": "machop",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 70,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 67,
        "name": "machoke",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 80,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 68,
        "name": "machamp",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 90,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 130,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 69,
        "name": "bellsprout",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 50,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 30,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 70,
        "name": "weepinbell",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 65,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 71,
        "name": "victreebel",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 80,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 105,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 72,
        "name": "tentacool",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 40,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 73,
        "name": "tentacruel",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 80,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 120,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 74,
        "name": "geodude",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 40,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 30,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 30,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 20,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 75,
        "name": "graveler",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 55,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 115,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 76,
        "name": "golem",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 80,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 120,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 130,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 77,
        "name": "ponyta",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 50,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 78,
        "name": "rapidash",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 65,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 105,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 79,
        "name": "slowpoke",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 90,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 15,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 80,
        "name": "slowbro",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 95,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 110,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 30,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 81,
        "name": "magnemite",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 25,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 82,
        "name": "magneton",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 50,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 120,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 83,
        "name": "farfetchd",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 52,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 58,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 62,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 84,
        "name": "doduo",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 35,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 85,
        "name": "dodrio",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 60,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 110,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 110,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 86,
        "name": "seel",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 65,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 87,
        "name": "dewgong",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 90,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 88,
        "name": "grimer",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 80,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 25,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 89,
        "name": "muk",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 105,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 105,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 90,
        "name": "shellder",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 30,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 25,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 91,
        "name": "cloyster",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 50,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 180,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 92,
        "name": "gastly",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 30,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 30,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 93,
        "name": "haunter",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 45,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 115,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 94,
        "name": "gengar",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 60,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 130,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 110,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 95,
        "name": "onix",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 35,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 160,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 30,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 96,
        "name": "drowzee",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 60,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 48,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 43,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 42,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 97,
        "name": "hypno",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 85,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 73,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 73,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 115,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 67,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 98,
        "name": "krabby",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 30,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 105,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 25,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 25,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 99,
        "name": "kingler",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 55,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 130,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 115,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 100,
        "name": "voltorb",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 40,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 30,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 101,
        "name": "electrode",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 60,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 150,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 102,
        "name": "exeggcute",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 60,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 103,
        "name": "exeggutor",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 95,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 125,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 104,
        "name": "cubone",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 50,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 105,
        "name": "marowak",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 60,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 110,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 106,
        "name": "hitmonlee",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 50,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 120,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 53,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 110,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 87,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 107,
        "name": "hitmonchan",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 50,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 105,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 79,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 110,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 76,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 108,
        "name": "lickitung",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 90,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 30,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 109,
        "name": "koffing",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 40,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 110,
        "name": "weezing",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 65,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 120,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 111,
        "name": "rhyhorn",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 80,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 30,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 30,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 25,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 112,
        "name": "rhydon",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 105,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 130,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 120,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 113,
        "name": "chansey",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 250,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 5,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 5,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 105,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 114,
        "name": "tangela",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 65,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 115,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 115,
        "name": "kangaskhan",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 105,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 116,
        "name": "horsea",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 30,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 25,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 117,
        "name": "seadra",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 55,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 118,
        "name": "goldeen",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 45,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 67,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 63,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 119,
        "name": "seaking",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 80,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 92,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 68,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 120,
        "name": "staryu",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 30,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 121,
        "name": "starmie",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 60,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 115,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 122,
        "name": "mr-mime",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 40,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 120,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 123,
        "name": "scyther",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 70,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 110,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 105,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 124,
        "name": "jynx",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 65,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 115,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 125,
        "name": "electabuzz",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 65,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 83,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 57,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 105,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 126,
        "name": "magmar",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 65,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 57,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 93,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 127,
        "name": "pinsir",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 65,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 125,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 128,
        "name": "tauros",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 75,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 110,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 129,
        "name": "magikarp",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 20,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 10,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 15,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 20,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 130,
        "name": "gyarados",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 95,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 125,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 79,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 81,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 131,
        "name": "lapras",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 130,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 132,
        "name": "ditto",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 48,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 48,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 48,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 48,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 48,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 48,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 133,
        "name": "eevee",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 55,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 134,
        "name": "vaporeon",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 130,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 110,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 135,
        "name": "jolteon",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 65,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 110,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 130,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 136,
        "name": "flareon",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 65,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 130,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 110,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 137,
        "name": "porygon",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 65,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 138,
        "name": "omanyte",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 35,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 40,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 35,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 139,
        "name": "omastar",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 70,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 125,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 115,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 140,
        "name": "kabuto",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 30,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 55,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 141,
        "name": "kabutops",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 60,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 115,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 105,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 142,
        "name": "aerodactyl",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 80,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 105,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 60,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 75,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 130,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 143,
        "name": "snorlax",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 160,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 110,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 110,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 30,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 144,
        "name": "articuno",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 90,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 125,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 145,
        "name": "zapdos",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 90,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 125,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 146,
        "name": "moltres",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 90,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 125,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 85,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 147,
        "name": "dratini",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 41,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 64,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 45,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 50,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 148,
        "name": "dragonair",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 61,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 84,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 65,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 70,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 149,
        "name": "dragonite",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 91,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 134,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 95,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 80,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 150,
        "name": "mewtwo",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 106,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 110,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 154,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 90,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 130,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    },
    {
        "id": 151,
        "name": "mew",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic"
                }
            }
        ],
        "stats": [
            {
                "base_stat": 100,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 100,
                "stat": {
                    "name": "speed"
                }
            }
        ]
    }
]`;