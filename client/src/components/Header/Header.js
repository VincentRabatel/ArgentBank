import './Header.css';

import logo from "../../assets/argentBankLogo.png" // relative path to image

function Header() {
    return (
        <header>
            <nav class="main-nav">
                <a class="main-nav-logo" href="/">
                    <img
                        class="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 class="sr-only">Argent Bank</h1>
                </a>
                <div>
                    <a class="main-nav-item" href="/signin">
                    <i class="fa fa-user-circle"></i>
                    Sign In
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header;