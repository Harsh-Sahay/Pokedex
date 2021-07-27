const OffsetReducer = (state=0, action)=>{
    switch (action.type){
        case "UPDATE_OFFSET": return action.payload;
        default: return state;
    };
}

export default OffsetReducer;