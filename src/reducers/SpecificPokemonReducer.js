const SpecificPokemonReducer = (state=null, action)=>{
    switch (action.type){
        case "UPDATE_SPECIFIC_POKEMON_DATA": return action.payload;
        default: return state;
    };
}
export default SpecificPokemonReducer;