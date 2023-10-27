import { Fragment } from 'react';

import './SignIn.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer.js/Footer';

function SignIn() {

    return (
        <Fragment>
            <Header />
            <main className='main bg-dark'>
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label for="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label for="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label for="remember-me">Remember me</label>
                        </div>
                        {/* PLACEHOLDER DUE TO STATIC SITE */}
                        <a href="/user/test" className="sign-in-button">Sign In</a>
                        {/* SHOULD BE THE BUTTON BELOW */}
                        {/* <button className="sign-in-button">Sign In</button> */}
                    </form>
                </section>
            </main>
            <Footer />
        </Fragment>
    )
}

export default SignIn;