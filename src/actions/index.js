const fetchPokemonDetails = ()=>{
    return {
        type: "FETCH_POKEMON_DETAILS"
    };
}
const updatePokemonData = (data)=>{
    return {
        type: "UPDATE_POKEMON_DATA",
        payload: data
    }
}
const fetchSpecificPokemon = ()=>{
    return {
        type: "FETCH_SPECIFIC_POKEMON"
    };
}
const updateSpecificPokemonLink = (link)=>{
    return {
        type: "UPDATE_SPECIFIC_POKEMON_LINK",
        payload: link
    }
}
const updateSpecificPokemonData = (data)=>{
    return {
        type: "UPDATE_SPECIFIC_POKEMON_DATA",
        payload: data
    };
}

const updateOffset = (n)=>{
    return {
        type: "UPDATE_OFFSET",
        payload: n
    };
}
export {
    fetchPokemonDetails,
    updatePokemonData,
    updateSpecificPokemonLink,
    fetchSpecificPokemon,
    updateSpecificPokemonData,
    updateOffset
};