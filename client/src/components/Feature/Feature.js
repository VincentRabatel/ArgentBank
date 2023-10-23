import './Feature.css';

function Feature({ imageSrc, imageAlt, title, content }) {

    return (
        <div className="feature-item">
            <img src={imageSrc} alt={imageAlt} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default Feature;