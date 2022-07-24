const InitialState = {
    isLoggedin : false,
}

export const AuthReducer = (state = InitialState , action)=>{
    switch(action.type){
        case "TOGGLE_AUTH":
            return {...state, isLoggedin: !state.isLoggedin}
        
        default:
            return state
        }

}