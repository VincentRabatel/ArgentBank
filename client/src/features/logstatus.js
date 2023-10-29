// Import of createSlice, the modern way to create a reducer and its actions
import { createSlice } from "@reduxjs/toolkit";

const checkStorage = () => {
    //console.log("Is local storage connected ?", localStorage.getItem("connected"))

    const storageConnected = localStorage.getItem("connected");

    // If there is nothing in the localStorage (null)
    if (!storageConnected) {
        localStorage.setItem("connected", "false");
        return false;

    // else we init the state according the saved state
    } else {
        if (storageConnected === "true") return true;
        else return false;
    }
}

// Definition of the default state
const initialState = {
    connected: checkStorage(),
    log: "Initialized, user is logged out"
}


// Creation of the reducer and its actions
export const logstatus = createSlice({
    name: "logstatus",
    initialState,

    // Creation of the actions, they will modify the state
    reducers: {
        login: (state, action) => {
            state.connected = true;
            state.log = "User is logged in"

            localStorage.setItem("connected", "true")

            //console.log(state.log, action)
        },
        logout: (state, action) => {
            state.connected = false;
            state.log = "User is logged out"

            localStorage.setItem("connected", "false")

            //console.log(state.log, action)
        }
    }
})

// Export all actions
export const {login, logout} = logstatus.actions;

// Export reducer
export default logstatus.reducer;