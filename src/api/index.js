import axios from 'axios';

const fetchPokemonData = async(offset)=>{
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}}&limit=4`).then(res=>res.data);
    if(response.status>=400){
        throw new Error(response.errors);
    }
    return response;
}

const fetchSpecificPokemonData = async(link)=>{
    const response = await axios.get(link).then(res=>res.data);
    if(response.status>=400){
        throw new Error(response.errors);
    }
    return response;
}

export {
    fetchPokemonData,
    fetchSpecificPokemonData
};