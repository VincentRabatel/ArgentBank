import { Fragment } from 'react';

import './User.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer.js/Footer';
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
    return (
        <Fragment>
            <Header />

            <main className="main bg-dark">
                <div className="user-header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>

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