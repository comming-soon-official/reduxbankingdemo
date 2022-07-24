
const InitialState = {
    balance : 0,
    isSavingsAcc : false,
}

export const BankingReducer = (state = InitialState, action)=>{
    switch (action.type) {
        case "DEPOSIT":
            return {...state, balance : state.balance + action.amount}

        case "WITHDRAW":
            return {...state, balance : state.balance - action.amount}

        case "COLLECT_INTREST":
            return {...state, balance : state.balance * 1.03}

        case "DELETE_ACCOUNT":
            return {...state, balance : 0}
        case "TOGGLE_ACCOUNT":
            return{...state, isSavingsAcc: !state.isSavingsAcc}
 
        default:
            return state
    }
}