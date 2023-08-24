

const Pokemons = (() => {
    'use strict';

    const _mostrarDetallesPokemons = (pokeNumber) => {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokeNumber}`;

        fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Mostrar nombre
            const nombrePoke = data.name;
            const nombrePokemon = document.getElementById("nombrePokemon");
            nombrePokemon.innerHTML = nombrePoke;

            // Mostrar imagen del Pokémon
            const imageUrl = data.sprites.front_default;
            const imagenPokemonDiv = document.getElementById('imagenPokemon');
            const pokemonImage = document.createElement('img');
            pokemonImage.src = imageUrl;
            imagenPokemonDiv.appendChild(pokemonImage);

            //mostrar la altura
            const alturaPoke = data.heigth;
            const alturaPokemon = document.getElementById("heightPokemons");
            alturaPokemon.innerHTML = "Heigth : " + alturaPoke;

            //mostrar la peso
            const pesoPoke = data.weight;
            const pesoPokemon = document.getElementById("weightPokemons");
            pesoPokemon.innerHTML = "Weight : " + pesoPoke;

            // Mostrar grupos de huevos
            

            //se obtiene la URL de la especie del Pokémon.
            const speciesUrl = data.species.url;

            //Se realiza una nueva solicitud para obtener los detalles de la especie.
            fetch(speciesUrl)
            .then(function(response) {
                return response.json();
            })
            .then(function(speciesData) {
                // Mostrar especie
                //speciesData = objeto
                //genera = arreglo de objetos que contiene informacion sobre las especies del pokemon con su nombre en diferentes idiomas
                //.find = metodo de arreglo que se utiliza para encontrar el primer elemento en un arreglo que cumpla una condicion especifica 
                //la condicion genus => genus.language.name === 'en' busca un objeto en el arreglo genera donde la lenguaje tenga una propiedad name igual a en lo que indica que estamos buscando el nombre en ingles
                //genus es una propiedad del objeto encontrado que contiene el nombre de la especie 
                const especiePoke = speciesData.genera.find(genus => genus.language.name === 'en').genus;
                const especiePokemon = document.getElementById("especiePokemon");
                const especiePokemons = document.getElementById("speciesPokemons");
                especiePokemon.innerHTML = especiePoke;
                especiePokemons.innerHTML = "Species : " + especiePoke;
            })
            .catch(function(err) {
                console.log(err);
            });
            
            //Se realiza una nueva solicitud para obtener las habilidades.
            fetch(apiUrl)
            .then(function(response) {
                return response.json();
            })
            .then(function(abilitiesData) {
                //mostrar habilidades 
                const abilitiesPoke = data.abilities;
                const abilitiesPokemon = document.getElementById("abilitiesPokemons");

                abilitiesPoke.forEach(function(ability) {
                    const listItem = document.createElement("a");
                    listItem.textContent = ability.ability.name;
                    abilitiesPokemon.appendChild(listItem);
                   

                    /*const abilities = ability.ability.name;
                    const abilitiesPokemon = document.getElementById("abilitiesPokemons");

                    const abili = abiliPoke.map(abili => abili.ability.name);
                    const abilitiItems = abili.join(', ');

                    abilitiesPokemon.textContent = abilitiItems*/

                });
                
            })
            .catch(function(err) {
                console.log(err);
            });

            //Se realiza una nueva solicitud para obtener las gender.
            fetch(apiUrl)
            .then(function(response) {
                return response.json();
            })
            .then(function(speciesData) {
                // Mostrar género
                const generoPoke = data;
                const generoPokemon = document.getElementById("genderPokemons");
                
                //console.log(generoPoke);
                
            })
            .catch(function(err) {
                console.log(err);
            });
        })
        .catch(function(err) {
            console.log(err);
        });
    }
    const _mostrarStats= (pokeNumber) => {

        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokeNumber}`;

        fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            //mostrar HP
            const hpPoke = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
            const hpPokemon = document.getElementById("hpPokemon");
            hpPokemon.textContent ="HP : " + hpPoke;

            // Mostrar Ataque
            const ataquePoke = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
            const ataquePokemon = document.getElementById("ataquePokemon");
            ataquePokemon.textContent = "Attack : " +  ataquePoke;

            // Mostrar Defensa
            const defensaPoke = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
            const defensaPokemon = document.getElementById("defensaPokemon");
            defensaPokemon.textContent = "Defense :" + defensaPoke;

            // Mostrar especial ataque
            const spAtaquePoke = data.stats.find(stat => stat.stat.name === 'special-attack').base_stat;
            const spAtaquePokemon = document.getElementById("spAtaquePokemon");
            spAtaquePokemon.textContent = "Sp.Atk :" + spAtaquePoke;

            // Mostrar especial defensa
            const spDefensaPoke = data.stats.find(stat => stat.stat.name === 'special-defense').base_stat;
            const spDefensaPokemon = document.getElementById("spDefensaPokemon");
            spDefensaPokemon.textContent = "Sp.Def :" + spDefensaPoke;
            
            // Mostrar velocidad
            const spdPoke = data.stats.find(stat => stat.stat.name === 'speed').base_stat;
            const spdPokemon = document.getElementById("speedPokemon");
            spdPokemon.textContent = "Speed :" + spdPoke;

            // Mostrar Tipo de Defensa
            const tiposPoke = data.types;
            const tipoDefensaPokemon = document.getElementById("tipoDefensaPokemon");

            // se crea un array de tipos
            const tipos = tiposPoke.map(tipos => tipos.type.name); 

            // se convierte el array en una cadena de texto separada por comas
            const tiposText = tipos.join(', ');

            // se muestra los tipos en el elemento HTML
            tipoDefensaPokemon.textContent = tiposText;




        })
        .catch(function(err) {
            console.log(err);
        });
    }

    const numeroPoke = 4;

    _mostrarDetallesPokemons(numeroPoke);
    _mostrarStats(numeroPoke)
})();