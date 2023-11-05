import { createSlice } from "@reduxjs/toolkit";

// Definition of the default state
const initialState = {
    fetchData: undefined,
    fetchError: false,
    // todo: add loader before to start fetching data
    fetchLoading: false,
    
    loginStatus: false,
    loginToken: ""
}

export const login = createSlice({
    name: "login",
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
        }
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
        } 
        
        catch (error) {
            // todo: do something with the error
            dispatch(addError(JSON.parse(error.message)))
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
    setLoginToken } = login.actions;

// Export reducer
export default login.reducer;