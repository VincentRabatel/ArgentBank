// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// React Redux Toolkit
import { store } from "./store.js"
import { Provider } from "react-redux" 

// React Rooter
import { BrowserRouter } from 'react-router-dom';

// React Persist
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}> 
                    <App />
                </PersistGate>  
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();