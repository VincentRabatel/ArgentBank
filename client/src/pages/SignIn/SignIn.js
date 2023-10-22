import { Fragment } from 'react';

import './SignIn.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer.js/Footer';

function SignIn() {
    return (
        <Fragment>
            <Header />
            <h1 className='signin-title'>Sign in</h1>
            <Footer />
        </Fragment>
    )
}

export default SignIn;