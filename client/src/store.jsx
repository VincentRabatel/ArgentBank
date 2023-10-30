// Import of configureStore, 
// an easy way to create and configure a Redux store
import {configureStore} from "@reduxjs/toolkit"

// Import of our reducers,
// they initialize the state and then allow us to modify the state  
import user from "./features/user"

// Creation of our store
export const store = configureStore({
    // We pass here our reducers 
    reducer: {
        user
      }
})