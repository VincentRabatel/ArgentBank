import './App.css';

import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import Board from './pages/Board/Board';

// Pages paths
import * as paths from './services/paths';

function App() {
    return (
        <Routes>
            <Route path={paths.home} element={<Home />} />
            <Route path={paths.signin} element={<SignIn />} />
            <Route path={paths.board} element={<Board />} />

            {/* There isn't any error page yet so we redirect back to home page */}
            <Route path="/*" element={<Home />} />
        </Routes>
    );
}

export default App;