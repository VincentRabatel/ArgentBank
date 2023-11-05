import { createSlice } from "@reduxjs/toolkit";

import { UserProfile } from "../data/userProfile";

// Definition of the default state
const initialState = {
    connected: undefined,
    
    fetchData: undefined,
    fetchError: false,
    // todo: add loader before to start fetching data
    fetchLoading: false,
    
    loginStatus: false,
    loginToken: "",

    userFirstName: undefined,
    userLastName: undefined,
    userName: undefined
}

export const user = createSlice({
    name: "user",
    initialState,

    // Creation of the reducer and the actions, they will modify the state
    reducers: {
        // Fetching actions
        addData: (state, action) => {
            state.fetchData = action.payload;
            state.fetchLoading = false;
        },
        // todo: add loader before to start fetching data
        addLoader: (state, action) => {
            state.fetchLoading = true;
        },
        addError: (state, action) => {
            console.log("Error :", action.payload)

            state.fetchError = true;
            state.fetchLoading = false;
        },

        // Logging actions
        setLoginStatus: (state, action) => {
            state.loginStatus = action.payload;
        },
        setLoginToken: (state, action) => {
            state.loginToken = action.payload;
        },

        // User profile actions
        setFirstName: (state, action) => {
            state.userFirstName = action.payload;
        },
        setLastName: (state, action) => {
            state.userLastName = action.payload;
        },
        setUserName: (state, action) => {
            state.userName = action.payload;
        },
    }
})  



export function fetchLogin(userInfos) {

    return async function(dispatch, getState) {

        // todo: add loader before to start fetching data
        //dispatch(addLoader())

        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(userInfos)
            });

            if(!response.ok){
                throw new Error(JSON.stringify(response.status))
            }
            
            const data = await response.json()

            dispatch(addData(data))
    
            dispatch(setLoginStatus(true))
            dispatch(setLoginToken(data.body.token))
    
            dispatch(fetchUserProfile(data.body.token))
        } 
        
        catch (error) {
            // todo: do something with the error
            dispatch(addError(JSON.parse(error.message)))
        }
    }
}

export function fetchUserProfile(loginToken){

    return async function(dispatch, getState) {

        // todo: add loader before to start fetching data
        //dispatch(addLoader())

        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer' + loginToken
                }
            });

            if(!response.ok){
                throw new Error(JSON.stringify(response.status))
            }

            const data = await response.json()
           
            const userProfile = new UserProfile(
                data.body.createdAt,
                data.body.email,
                data.body.firstName,
                data.body.id,
                data.body.lastName,
                data.body.updatedAt,
                data.body.userName
            );
            
            dispatch(setFirstName(userProfile.firstName));
            dispatch(setLastName(userProfile.lastName));
            dispatch(setUserName(userProfile.userName));
        }
        
        catch (error) {
            // todo: do something with the error
            //dispatch(addError(JSON.parse(error.message)))
        }
    }
}

export function fetchUserName(token, userName){

    return async function(dispatch, getState) {

        // todo: add loader before to start fetching data
        //dispatch(addLoader())

        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: 'PUT',
                headers: {
                    'Authorization': 'Bearer' + token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName: userName })
            });
            
            if(!response.ok){
                throw new Error(JSON.stringify(response.status))
            }
            
            dispatch(setUserName(userName));
        }
        
        catch (error) {
            // todo: do something with the error
            //dispatch(addError(JSON.parse(error.message)))
        }
    }
}

// Export all actions
export const { 
    // Fetching actions
    addData, 
    addError, 
    addLoader, 

    // Logging actions
    setLoginStatus, 
    setLoginToken, 
    logout, 

    // User profile actions
    setFirstName, 
    setLastName,
    setUserName } = user.actions;

// Export reducer
export default user.reducer;