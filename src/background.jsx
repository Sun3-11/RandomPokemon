import "./RandomPokemon.css";

const Background = () => {
    const pokeNum = Math.floor(Math.random() *351) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${pokeNum}`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const pokemonList = data.results;
    
        // Loop through each Pokemon in the list
        pokemonList.forEach((pokemon) => {
        const pokemonUrl = pokemon.url;
    
          // Fetch individual Pokemon data
        fetch(pokemonUrl)
            .then(response => response.json())
            .then(pokemonData => {
            //   const pokemonName = pokemonData.name;
            const pokemonImageURL = pokemonData.sprites.front_default;
    
              // Create an image element and set its source to the Pokemon's image URL
            const imageElement = document.createElement('img');
            imageElement.src = pokemonImageURL;
    
            /**
             * Sizes
             */
            const sizes = {
                width: window.innerWidth,
                height: window.innerHeight
            }

            window.addEventListener('resize', () =>
            {
                // Update sizes
                sizes.width = window.innerWidth
                sizes.height = window.innerHeight                        
            })

        // Generate random coordinates for the image
        const xCoordinate = Math.floor(Math.random() * sizes.width);
        const yCoordinate = Math.floor(Math.random() * sizes.height);

        // Position the image at the random coordinates
            imageElement.style.position = 'fixed';
            imageElement.style.left = `${xCoordinate}px`;
            imageElement.style.top = `${yCoordinate}px`;
            imageElement.style.zIndex = "-1";
            
                // Add the image to the page
                document.body.appendChild(imageElement);
                });
            });
    });

};
export default Background;

