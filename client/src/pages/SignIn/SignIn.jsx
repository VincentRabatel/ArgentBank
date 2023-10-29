// Styles
import './SignIn.css';

// Components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// React
import { Fragment } from 'react';

// React Router
import { useNavigate } from 'react-router';

// React Redux
import { useDispatch } from "react-redux";
import { login } from "../../features/logstatus";

// Custom services
import * as api from "../../services/api.js"
import * as storage from "../../services/storage.js"

function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function handleLogin(event) {
        event.preventDefault();

        // Get ths login attempt informations from the form
        const userInfos = {
            "email": document.querySelector('input[name="username"]').value,
            "password": document.querySelector('input[name="password"]').value
        }

        // Post login attempt infortmations to the server
        const loginInfo = await api.postLogin(userInfos);
        
        switch(loginInfo.status){
            // STATUS == Connected
            case 200 :
                storage.storeLoginToken(loginInfo.token);
                
                dispatch(login());
                navigate("/user/test");
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
        <Fragment>
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
                            onClick={event => handleLogin(event)}
                            href="/user/test">
                            Sign In
                        </button>

                    </form>
                </section>
            </main>
            <Footer />
        </Fragment>
    )
}

export default SignIn;