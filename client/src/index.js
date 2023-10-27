// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// React Rooter
import { BrowserRouter } from 'react-router-dom';

// React Redux Toolkit
import { store } from "./store.jsx"
import { Provider } from "react-redux" 

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();