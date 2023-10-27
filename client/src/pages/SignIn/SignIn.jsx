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


function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleLogin(event, username, password) {
        event.preventDefault();

        dispatch(login(username));

        navigate("/user/test");
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
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        {/* PLACEHOLDER DUE TO STATIC SITE */}
                        {/* <a href="/user/test" className="sign-in-button">Sign In</a> */}
                        {/* SHOULD BE THE BUTTON BELOW */}
                        <button 
                            className="sign-in-button"
                            onClick={event => handleLogin(event, "Test username", "Test password")}
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