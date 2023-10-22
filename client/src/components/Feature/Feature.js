import './Feature.css';

//import imageTest from "../../assets/icon-chat.png"

function Feature({imageSrc, imageAlt, title, content}) {
    console.log(imageSrc)

    return (
        <div className="feature-item">
          <img src={imageSrc} alt={imageAlt} className="feature-icon" />
          <h3 className="feature-item-title">{title}</h3>
          <p>{content}</p>
        </div>
    )
}

export default Feature;