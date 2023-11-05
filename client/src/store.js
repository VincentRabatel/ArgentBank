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
import user from "./features/user"

// Transformation of the "unpersistedLogin" reducer into a persited one
const login = persistReducer(
    {
        key: 'login',
        storage: storage,
        blacklist: ["loading", "error"]
    },
    
    unpersistedLogin
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

/*

export const ConfigureStore = () => {
    const config = {
        key: 'root',
        storage: storage,
        blacklist: ['user.error']
    }

    const store = createStore(
        persistCombineReducers(config, {
            settings,
            themeMode,
            articles
        }),
        applyMiddleware(thunk, logger)
    );

    const persistor = persistStore(store);
    return {persistor, store};
}

*/