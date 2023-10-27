// Styling
import './Header.css';
import logo from "../../assets/argentBankLogo.png";

// React Router
import { useNavigate } from 'react-router';

function Header() {
    const navigate = useNavigate();

    function onClickHome(event) {
        event.preventDefault();

        navigate("/");
    }

    function onClickSignin(event) {
        event.preventDefault();

        navigate("/signin");
    }

    return (
        <header>
            <nav className="main-nav">
                <div className="main-nav-logo" onClick={event => onClickHome(event)}>
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </div>
                <div>
                    <div className="main-nav-item" onClick={event => onClickSignin(event)}>
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;