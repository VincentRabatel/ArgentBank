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

// Definition of the default state
const initialState = {
    connected: checkStorage(),
    loginToken: "",

    userFirstName: checkStorage() ? userProfile.firstName : " ",
    userLastName: checkStorage() ? userProfile.lastName : " "
}

export const logstatus = createSlice({
    name: "logstatus",
    initialState,

    // Creation of the reducer and the actions, they will modify the state
    reducers: {
        login: (state, action) => {
            state.connected = true;
            state.loginToken = action.payload; //todo: this is stored but never use

            // Informations that need to be persistents are also going to the localStorage
            storage.storeLoginToken(action.payload);
            storage.setConnected("true");
        },

        logout: (state, action) => {
            state.connected = false;
            state.loginToken = ""; //todo: this is stored but never use

            // Informations that need to be persistents are also going to the localStorage
            storage.clearLoginToken();
            storage.setConnected("false");
        },

        setFirstName: (state, action) => {
            state.userFirstName = JSON.parse(action.payload);
            console.log("Setting user first name with :", JSON.parse(action.payload))
        },
        
        setLastName: (state, action) => {
            state.userLastName = action.payload;
            console.log("Setting user last name with :", action.payload)
        }
    }
})

// Export all actions
export const {login, logout, setFirstName, setLastName} = logstatus.actions;

// Export reducer
export default logstatus.reducer;