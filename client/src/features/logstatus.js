// Import of createSlice, the modern way to create a reducer and its actions
import { createSlice } from "@reduxjs/toolkit";

import * as api from "../services/api"
import * as storage from "../services/storage"

// todo: it is possible for the connected status to persist withour localStorage ?
const checkStorage = () => {
    const storageConnected = storage.getConnected();

    // If there is nothing in the localStorage (null)
    if (!storageConnected) {
        storage.setConnected("false");
        return false;

    // else we init the state according the saved state
    } else {
        if (storageConnected === "true") {
            return true;
        }
        else return false;
    }
}


let userProfile = {} ;

if(checkStorage()) userProfile = await api.getUserProfile(storage.getLoginToken());

// todo: store the login token in the Redux store ?
// Definition of the default state
const initialState = {
    connected: checkStorage(),
    log: "Initialized, user is logged out",

    userFirstName: checkStorage() ? userProfile.firstName : " ",
    userLastName: checkStorage() ? userProfile.lastName : " "
}


// Creation of the reducer and its actions
export const logstatus = createSlice({
    name: "logstatus",
    initialState,

    // Creation of the actions, they will modify the state
    reducers: {
        login: (state, action) => {
            state.connected = true;
            state.log = "User is logged in";

            // Get user information from action's payload
            userProfile = action.payload;
            
            state.userFirstName = userProfile.firstName; 
            state.userLastName = userProfile.lastName; 

            storage.setConnected("true");
        },

        logout: (state, action) => {
            state.connected = false;
            state.log = "User is logged out"
            state.userFirstName = "lolol"; 

            storage.setConnected("false");

            //console.log(state.log, action)
        }
    }
})

// Export all actions
export const {login, logout} = logstatus.actions;

// Export reducer
export default logstatus.reducer;