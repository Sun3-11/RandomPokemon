import {useEffect, useState} from "react";


const PokeApi = () => {

    const [pokemon_name, setPokemonName] = useState("");
    const [pokemon_sprite, setPokemonSprite] = useState("");

    useEffect(()=>{
        const pokeNum = Math.floor(Math.random() * 355) + 1;

        fetch("https://pokeapi.co/api/v2/pokemon/" + (pokeNum))
            .then(response => response.json())
            .then(data => {
                setPokemonName(data.name);
                setPokemonSprite(data.sprites.front_default);
            })
    }, []);

    return { pokemon_name: pokemon_name, pokemon_sprite: pokemon_sprite, useEffect};
}

export default PokeApi;