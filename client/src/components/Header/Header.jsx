import './Header.css';

import logo from "../../assets/argentBankLogo.png";

function Header() {

    return (
        <header>
            <nav className="main-nav">
                <a className="main-nav-logo" href="/">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                <div>
                    <a className="main-nav-item" href="/signin">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header;