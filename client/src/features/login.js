import { createSlice } from "@reduxjs/toolkit";

// Definition of the default state
const initialState = {
    // fetching: false,
    loading: false,
    error: undefined,
    // todo: add loader before to start fetching data
    
    loginStatus: false,
    loginToken: ""
}

export const login = createSlice({
    name: "login",
    initialState,

    // Creation of the reducer and the actions, they will modify the state
    reducers: {
        // Fetching actions
        // setFetching: (state, action) => {
        //     state.fetching = action.payload;
        // },
        // todo: add loader before to start fetching data
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            console.log("Error :", action.payload)
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

        // todo: add loader before to start fetching data
        dispatch(setLoading(true))

        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(userInfos)
            });

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
                        errorMessage = { status: response.status, message: "Error: Not found" };
                    break;

                    case 500:
                        errorMessage = { status: response.status, message: "Error: Internal Server Error" };
                    break;

                    default :
                        errorMessage = { status: response.status, message: "Error: Unknown" };
                }

                throw new Error(JSON.stringify(errorMessage))
            }
            
            const data = await response.json()
            
            dispatch(setLoading(false))
            
            dispatch(setLoginStatus(true))
            dispatch(setLoginToken(data.body.token))
        } 
        
        catch (error) {
            // todo: do something with the error
            dispatch(setLoading(false))
            dispatch(setError(JSON.parse(error.message)))
        }
    }
}

// Export all actions
export const { 
    // Fetching actions
    // setFetching, 
    setLoading, 
    setError, 

    // Logging actions
    setLoginStatus, 
    setLoginToken } = login.actions;

// Export reducer
export default login.reducer;