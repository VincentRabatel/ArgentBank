// Import of configureStore, 
// an easy way to create and configure a Redux store
import { configureStore } from "@reduxjs/toolkit";

// Redux persist
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

// Immport of our middlewares
import logger from "redux-logger";
import thunk from "redux-thunk";

// Import of our reducers,
// they initialize the state and then allow us to modify the state  
import unpersistedLogin from "./features/login"
import unpersistedUser from "./features/user"

// Transformation of the "unpersistedLogin" reducer into a persited one
const login = persistReducer(
    {
        key: 'login',
        storage: storage,
        blacklist: ["loading", "error"]
    },
    
    unpersistedLogin
);

const user = persistReducer(
    {
        key: 'user',
        storage: storage,
        whitelist: ["userName"]
    },
    
    unpersistedUser
);


// Creation of our store
export const store = configureStore({
    // We pass here our reducers 
    reducer: {
        login,
        user
    },

    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    middleware: [logger, thunk]
})