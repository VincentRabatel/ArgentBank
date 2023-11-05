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
import unpersistedUser from "./features/user"

const persistConfig = {
    key: 'root',
    storage
};

// Transformation of the "user" reducer into a persited one
const user = persistReducer(persistConfig, unpersistedUser);

// Creation of our store
export const store = configureStore({
    // We pass here our reducers 
    reducer: {
        user
    },
    
    //devTools: process.env.NODE_ENV !== 'production',
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    middleware: [logger, thunk]
})