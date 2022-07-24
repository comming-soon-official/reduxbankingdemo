import { combineReducers } from "@reduxjs/toolkit";

import { BankingReducer } from "./BankingReducer";
import { AuthReducer } from "./AuthReducer"

export const rootReducer = combineReducers({
    banking:BankingReducer,
    auth:AuthReducer
})
