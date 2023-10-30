import './SignIn.css';

// React Router
import { useNavigate } from 'react-router';

// React Redux
import { useDispatch } from "react-redux";
import { login, setFirstName, setLastName, setUserName } from "../../features/user";

import * as api from "../../services/api.js"
import * as paths from "../../services/paths.js"

// Components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function handleLogin(event) {
        event.preventDefault();

        // Get informations from the form to try login
        const userInfos = {
            "email": document.querySelector('input[name="username"]').value,
            "password": document.querySelector('input[name="password"]').value
        }

        // Post informations from the form to the server
        const loginInfo = await api.postLogin(userInfos);
        
        switch(loginInfo.status){
            // STATUS == Connected
            case 200 :
                // Dispatch the login action with the login token to be stored
                dispatch(login(loginInfo.token));
                
                // Get the user profile and dispatch its name to be stored
                const userProfile = await api.getUserProfile(loginInfo.token);
                
                dispatch(setFirstName(userProfile.firstName));
                dispatch(setLastName(userProfile.lastName));
                dispatch(setUserName(userProfile.userName));

                navigate(paths.board);
            break;
        
            // STATUS == Invalid Fields
            case 400 :
                window.alert("Invalid Fields");
            break;
            
            // STATUS == Internal Server Error
            case 500 :
                window.alert("Internal Server Error");
            break;

            default:
                window.alert("Something Wrong Happened");
        }
    }

    return (
        <>
            <Header />
            <main className='main bg-dark'>
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>

                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" />
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" />
                        </div>

                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>

                        <button 
                            className="sign-in-button"
                            onClick={event => handleLogin(event)}>
                            Sign In
                        </button>

                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default SignIn;