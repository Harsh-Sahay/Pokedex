const PokemonDataReducer = (state=null, action)=>{
    switch (action.type){
        case "UPDATE_POKEMON_DATA": return action.payload;
        default: return state;
    };
}
export default PokemonDataReducer;