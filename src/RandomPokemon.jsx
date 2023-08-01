import "./RandomPokemon.css";
import PokeApi from "./PokeApi";
import pokeball from './assets/pokeball.png'
import pokemonI from './assets/pokemon.png'


function RandomPokemon(){

    const handleButtonClick = () => {
        window.location.reload();
        

    };
    const pokeNum = Math.floor(Math.random() * 151) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${pokeNum}`;
    const pokemon = PokeApi();
    

    return (
        
    <div className="container  mx-auto my-auto px-6 max-w-sm border-x-4 border-purple-100 font-mono">
        <h1 className="  bg-slate-700  p-2 rounded-xl border-4 border-indigo-950 text-zinc-200 font-bold text-xl text-left  ">Pokemon </h1>
        <div className=" my-6 bg-indigo-50 rounded border-2 border-purple-100 overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 ">
        <h1 className="mt-5 text-2xl font-semibold flex items-center pl-4"><img className="w-2/10 " src={pokemonI} alt="" />Pokemon #{pokeNum}</h1>
        <h1 className="border-b-4 border-purple-100  font-bold text-lg pb-2 pt-1">Name/{pokemon.pokemon_name || "unknown"} </h1>
        <img className=" rounded-xl inline float-left"src={pokemon.pokemon_sprite || url} alt={pokemon.pokemon_name} />
        <button className="rounded-full  shadow-lg shadow-red-200 mt-4 ml-8"onClick={handleButtonClick}><img className="w-14 hover:animate-spin transition duration-300 " src={pokeball} alt="" /></button>
        </div>
    </div>
    );
    }


export default RandomPokemon;
