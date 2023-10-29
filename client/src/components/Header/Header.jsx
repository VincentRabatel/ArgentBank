// Styling
import './Header.css';
import logo from "../../assets/argentBankLogo.png";

// React Router
import { useNavigate } from 'react-router';

// React Redux
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { logout } from "../../features/logstatus";

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logstatus = useSelector(state => state.logstatus)

    // Debug logs
    // if (logstatus.connected) {
    //     console.log("Is redux store connected ?", logstatus.connected)
    // }
    // else {
    //     console.log("Is redux store connected ?", logstatus.connected)
    // }

    function onClickHome(event) {
        event.preventDefault();

        navigate("/");
    }

    function onClickSign(event) {
        event.preventDefault();

        if (logstatus.connected) {
            dispatch(logout());
            navigate("/")
        } else {
            navigate("/signin")
        }
    }

    function onClickUserName(event) {
        event.preventDefault();

        navigate("/user/test");
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


                {
                    // Change the header content depending if an user is connected
                    logstatus.connected ?

                    <div className="main-nav-signin">
                        <div className="main-nav-item" onClick={event => onClickUserName(event)}>
                            <i className="fa fa-user-circle"></i>
                            Tony
                        </div>
                        <div className="main-nav-item" onClick={event => onClickSign(event)}>
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </div>
                    </div>
                    
                    :

                    <div className="main-nav-signin">
                        <div className="main-nav-item" onClick={event => onClickSign(event)}>
                            <i className="fa fa-user-circle"></i>
                            Sign in
                        </div>
                    </div>
                }
            </nav>
        </header>
    )
}

export default Header;