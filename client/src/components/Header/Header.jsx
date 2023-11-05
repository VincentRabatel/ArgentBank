import './Header.css';
import logo from '../../assets/argentBankLogo.png';

// React Router
import { useNavigate } from 'react-router';

// React Redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setLoginStatus, setLoginToken, setFirstName, setLastName, setUserName} from '../../features/user';

import * as paths from '../../services/paths';

function Header() {
    const user = useSelector(state => state.user)
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function onClickHome(event) {
        event.preventDefault();

        navigate(paths.home);
    }

    function onClickSign(event) {
        event.preventDefault();

        if (user.loginStatus) {
            dispatch(setLoginStatus(false))
            dispatch(setLoginToken(undefined))

            dispatch(setFirstName(undefined))
            dispatch(setLastName(undefined))
            dispatch(setUserName(undefined))

            navigate(paths.home)

        } else {
            navigate(paths.signin)
        }
    }

    function onClickUserName(event) {
        event.preventDefault();

        navigate(paths.board);
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
                    user.loginStatus ?

                    <div className="main-nav-signin">
                        <div className="main-nav-item" onClick={event => onClickUserName(event)}>
                            <i className="fa fa-user-circle"></i>
                            {user.userName}
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