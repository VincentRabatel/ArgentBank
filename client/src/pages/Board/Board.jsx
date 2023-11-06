import './Board.css';

import { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUserName, fetchUserProfile } from "../../features/user";

import * as paths from '../../services/paths.js';

// Components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Account from '../../components/Account/Account';
import Loader from "../../components/Loader/Loader";

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

function Board() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = useSelector(state => state.login);
    const user = useSelector(state => state.user);
    
    useEffect(() => {
        // Fetch and dispatch User Profile
        if (login.loginStatus){
            dispatch(fetchUserProfile(login.loginToken))
        
        // Redirect to Sign In page if user isn't connected
        } else {
            navigate(paths.signin)
        }
    },[login, navigate, dispatch])

    
    // Username editing button state
    const [editing, setEditing] = useState(false);
    
    // Function to open or close Edit Mode
    function handleEdit(event){
        event.preventDefault();

        if (editing) setEditing(false)
        else setEditing(true)
    }

    // Function to save a new username
    async function handleSave(event){
        event.preventDefault();

        // Get the new User Name from the form
        const newUserName = document.querySelector('input[name="username"]').value

        try {
            dispatch(fetchUserName(login.loginToken, newUserName));
        } catch (error) {
            console.log(error)
        }

        setEditing(false)
    }

    // Function to cancel the edition
    function handleCancel(event){
        event.preventDefault();

        setEditing(false)
    }

    return (
        <Fragment>
            <Header />
            <main className="main bg-dark">

                {user.loading &&
                    <Loader />
                }
                
                <div className="user-header">
                    
                    <h1>Welcome back<br />
                    {`${user.userFirstName} ${user.userLastName}!`}
                    </h1>

                    {editing ? 
                        <section className='edit-content'>
                            <form>
                                <div className="input-wrapper">
                                    <label className="edit-label" htmlFor="username">User name:</label>
                                    <input 
                                        placeholder="..."
                                        type="text"
                                        id="username"
                                        name="username" />
                                </div>
    
                                <div className="input-wrapper">
                                    <label className="edit-label-disabled" htmlFor="firstName">First name:</label>
                                    <input 
                                        className="edit-input-disabled" 
                                        placeholder={user.userFirstName}
                                        type="firstName" 
                                        id="firstName" 
                                        name="firstName" 
                                        disabled />
                                </div>
    
                                <div className="input-wrapper">
                                    <label className="edit-label-disabled" htmlFor="lastName">Last name:</label>
                                    <input 
                                        className="edit-input-disabled"
                                        placeholder={user.userLastName}
                                        type="lastName" 
                                        id="lastName"
                                        name="lastName"
                                        disabled />
                                </div>
    
                                <div className="edit-buttons-container">
                                    <button 
                                        className="edit-button"
                                        onClick={event => handleSave(event)}>
                                        Save
                                    </button>
        
                                    <button 
                                        className="edit-button"
                                        onClick={event => handleCancel(event)}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </section>         
                        
                        :

                        // todo: create a component for this button ?
                        <button 
                            className="edit-button"
                            onClick={event => handleEdit(event)}>
                            Edit Name
                        </button>
                    }

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

export default Board;