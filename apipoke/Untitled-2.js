
document.addEventListener('DOMContentLoaded', () => {
    const Pokemons = (() => {
        'use strict';
    
        const _pokemosIndex = (pokeNumber) => {
            const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokeNumber}`;
    
            fetch(apiUrl)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                /// Obtener el nombre del Pokémon desde la respuesta de la API
                const nombrePokemon = data.name;
                const tipoPokemon = data.types[0].type.name; // Obtener el tipo del Pokémon
                const imagenPokemon = data.sprites.front_default; // Obtener la URL de la imagen
      

                // Crear una tarjeta con el nombre, imagen y tipo del Pokémon
                const tarjeta = document.createElement('div');
                tarjeta.className = 'tarjeta';
    
                const nombreElement = document.createElement('div');
                nombreElement.className = 'nombre-pokemon';
                nombreElement.textContent = nombrePokemon;
    
                const imagenElement = document.createElement('img');
                imagenElement.className = 'imagen-pokemon';
                imagenElement.src = imagenPokemon;
    
                const tipoElement = document.createElement('div');
                tipoElement.className = 'tipo-pokemon';
                tipoElement.textContent = tipoPokemon;

                const numeroElement = document.createElement('div');
                numeroElement.className = 'numero-pokemon';
                numeroElement.textContent = pokeNumber;
    
                tarjeta.appendChild(nombreElement);
                tarjeta.appendChild(imagenElement);
                tarjeta.appendChild(tipoElement);
                tarjeta.appendChild(numeroElement);

                // Agregar un enlace para redirigir a la página "detalles.html" con el número del Pokémon
                const enlace = document.createElement('a');
                enlace.href = `detalles.html?numero=${pokeNumber}`;
                enlace.appendChild(nombreElement); // Agregar el nombre al enlace

                tarjeta.appendChild(enlace); // Agregar el enlace a la tarjeta
    
                // Agregar la tarjeta al contenedor
                document.getElementById('contenedor_tarjetas').appendChild(tarjeta);
            
    
                
            })
            .catch(function(err) {
                console.log(err);
            });
        }
        // Llamar a la función para obtener nombres de Pokémon del 1 al + 
        for (let i = 1; i <= 150; i++) {
            _pokemosIndex(i);
        }
    })();
    
});