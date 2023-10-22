import { Fragment } from 'react';

import './User.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer.js/Footer';

function User() {
    return (
        <Fragment>
            <Header />
            <h1>User</h1>
            <Footer />
        </Fragment>
    )
}

export default User;