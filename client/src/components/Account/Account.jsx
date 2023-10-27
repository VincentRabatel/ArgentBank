import './Account.css';

function Account({ title, amount, description }) {

    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>

            {/* todo: create a component for this button */}
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )
}

export default Account;