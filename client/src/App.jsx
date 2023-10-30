import { Routes, Route } from "react-router-dom";

import './App.css';

import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import Board from './pages/Board/Board';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/board" element={<Board />} />

            {/* There isn't any error page yet so we redirect back to home page */}
            <Route path="/*" element={<Home />} />
        </Routes>
    );
}

export default App;
