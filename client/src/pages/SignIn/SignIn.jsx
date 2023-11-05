import './SignIn.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from "react-redux"

import { fetchLogin } from '../../features/login';

import * as paths from "../../services/paths.js"

// Components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const login = useSelector(state => state.login)

    // Redirect to the user's board if the user is connected 
    useEffect(() => {
        if (login.loginStatus){
            navigate(paths.board)
        }
    },[login.loginStatus, navigate])

    async function handleLogin(event) {
        event.preventDefault();

        // Get informations from the form to try login
        const userInfos = {
            "email": document.querySelector('input[name="username"]').value,
            "password": document.querySelector('input[name="password"]').value
        }

        try {
            dispatch(fetchLogin(userInfos));
        } catch (error) {
            console.log("YES", error)
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

                    {login.error &&
                        <p className="login-error">
                            {login.error.message}
                        </p>
                    }
                </section>
            </main>
            <Footer />
        </>
    )
}

export default SignIn;