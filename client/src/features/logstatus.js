// Import of createSlice, the modern way to create a reducer and its actions
import { createSlice } from "@reduxjs/toolkit";

// Definition of the default state
const initialState = {
    status: false,
    log: "Initialized, user is logged out"
}

// Creation of the reducer and its actions
export const logstatus = createSlice({
    name: "logstatus",
    initialState,

    // Creation of the actions, they will modify the state
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.log = "User is logged in"

            console.log(state.log, action)
        },
        logout: (state, action) => {
            state.status = false;
            state.log = "User is logged out"
            
            console.log(state.log, action)
        }
    }
})

// Export all actions
export const {login, logout} = logstatus.actions;

// Export reducer
export default logstatus.reducer;