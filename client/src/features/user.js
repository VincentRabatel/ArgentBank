import { createSlice } from "@reduxjs/toolkit";

import { UserProfile } from "../data/userProfile";

// Definition of the default state
const initialState = {
    // todo: add loader before to start fetching data
    loading: false,
    error: undefined,
    
    userFirstName: "",
    userLastName: "",
    userName: ""
}

export const user = createSlice({
    name: "user",
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

export function fetchUserProfile(loginToken){

    return async function(dispatch, getState) {

        // dispatch(setLoading(true))

        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer' + loginToken
                }
            });

            // Error management
            if(!response.ok){

                let errorMessage;

                // We setup the error message according to the structure { status: status, message: message }
                switch (response.status) {
                    // Not sure how we could end up here, but the endpoint exist
                    case 400:
                        errorMessage = { status: response.status, message: "Error 400: Invalid Fields" };
                    break;

                    case 401:
                        errorMessage = { status: response.status, message: "Error 401: Unauthorized" };
                    break;

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
           
            const userProfile = new UserProfile(
                data.body.createdAt,
                data.body.email,
                data.body.firstName,
                data.body.id,
                data.body.lastName,
                data.body.updatedAt,
                data.body.userName
            );
            
            // dispatch(setLoading(false))
            dispatch(setError(undefined))

            dispatch(setFirstName(userProfile.firstName));
            dispatch(setLastName(userProfile.lastName));
            dispatch(setUserName(userProfile.userName));
        }
        
        catch (error) {
            // dispatch(setLoading(false))
            dispatch(setError(JSON.parse(error.message)))
        }
    }
}

export function fetchUserName(token, userName){

    return async function(dispatch, getState) {

        // dispatch(setLoading(true))

        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: 'PUT',
                headers: {
                    'Authorization': 'Bearer' + token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName: userName })
            });
            
            // Error management
            if(!response.ok){

                let errorMessage;

                // We setup the error message according to the structure { status: status, message: message }
                switch (response.status) {
                    case 400:
                        errorMessage = { status: response.status, message: "Error 400: Invalid Fields" };
                    break;

                    case 401:
                        errorMessage = { status: response.status, message: "Error 401: Unauthorized" };
                    break;

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

            // dispatch(setLoading(false))
            dispatch(setError(undefined))

            dispatch(setUserName(userName));
        }
        
        catch (error) {
            // dispatch(setLoading(false))
            dispatch(setError(JSON.parse(error.message)))
        }
    }
}

// Export all actions
export const { 
    // Fetching actions
    setLoading, 
    setError, 

    // User profile actions
    setFirstName, 
    setLastName,
    setUserName } = user.actions;

// Export reducer
export default user.reducer;