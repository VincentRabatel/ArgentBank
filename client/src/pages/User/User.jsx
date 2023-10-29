import './User.css';

import { Fragment } from 'react';
import { useSelector } from "react-redux";

// Components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Account from '../../components/Account/Account';

// Create objects to configure Features
const accountA = {
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance"
}

const accountB = {
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance"
}

const accountC = {
    title: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    description: "Current Balance"
}

function User() {
    // todo: change "logstatus" for a better name
    const logstatus = useSelector(state => state.logstatus);

    return (
        <Fragment>
            <Header />
            <main className="main bg-dark">
                <div className="user-header">
                    <h1>Welcome back<br />
                    {`${logstatus.userFirstName} ${logstatus.userLastName}!`}
                    </h1>

                    {/* todo: create a component for this button */}
                    <button className="edit-button">Edit Name</button>
                </div>

                <h2 className="sr-only">Accounts</h2>

                <Account
                    title={accountA.title}
                    amount={accountA.amount}
                    description={accountA.description}
                />
                <Account
                    title={accountB.title}
                    amount={accountB.amount}
                    description={accountB.description}
                />
                <Account
                    title={accountC.title}
                    amount={accountC.amount}
                    description={accountC.description}
                />
            </main>
            <Footer />
        </Fragment>
    )
}

export default User;