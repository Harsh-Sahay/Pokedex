const LinkReducer = (state=null, action)=>{
    switch (action.type){
        case "UPDATE_SPECIFIC_POKEMON_LINK": return action.payload;
        default: return state;
    }
}
export default LinkReducer;