import { createSlice } from "@reduxjs/toolkit";

// Definition of the default state
const initialState = {
    loading: false,
    error: undefined,
    
    loginStatus: false,
    loginToken: ""
}

export const login = createSlice({
    name: "login",
    initialState,

    // Creation of the reducer and the actions, they will modify the state
    reducers: {
        // Fetching actions
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            console.error("Error :", action.payload)
            state.error = action.payload;
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

        dispatch(setLoading(true))

        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(userInfos)
            });

            // Error management
            if(!response.ok){

                let errorMessage;

                // We setup the error message according to the structure { status: status, message: message }
                switch (response.status) {
                    // This is done differently for the 400 error, as we get infomation from the server :
                    // "Error: User not found!" or "Error: Password is invalid"
                    case 400:
                        errorMessage = await response.json()
                    break;

                    // This is done manually for other cases
                    case 404:
                        errorMessage = { status: response.status, message: "Error 404: Not found" };
                    break;

                    case 500:
                        errorMessage = { status: response.status, message: "Error 500: Internal Server Error" };
                    break;

                    default :
                        errorMessage = { status: response.status, message: "Error: Unknown" };
                }

                throw new Error(JSON.stringify(errorMessage))
            }
            
            const data = await response.json()
            
            dispatch(setLoading(false))
            dispatch(setError(undefined))
            
            dispatch(setLoginStatus(true))
            dispatch(setLoginToken(data.body.token))
        } 
        
        catch (error) {
            dispatch(setLoading(false))
            dispatch(setError(JSON.parse(error.message)))
        }
    }
}

// Export all actions
export const { 
    // Fetching actions
    setLoading, 
    setError, 

    // Logging actions
    setLoginStatus, 
    setLoginToken } = login.actions;

// Export reducer
export default login.reducer;