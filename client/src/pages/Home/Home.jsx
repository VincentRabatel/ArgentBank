import './Home.css';

import { Fragment } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Feature from '../../components/Feature/Feature';

// Import all images to configure Feature's props
import featureLeftImage from "../../assets/icon-chat.png";
import featureMidImage from "../../assets/icon-money.png";
import featureRightImage from "../../assets/icon-security.png";

// Create objects to configure Features
const featureLeft = {
    imageSrc: featureLeftImage,
    imageAlt: "Chat icon",
    title: "You are our #1 priority",
    content: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
}

const featureMid = {
    imageSrc: featureMidImage,
    imageAlt: "Money icon",
    title: "More savings means higher rates",
    content: "The more you save with us, the higher your interest rate will be!"
}

const featureRight = {
    imageSrc: featureRightImage,
    imageAlt: "Security icon",
    title: "Security you can trust",
    content: "We use top of the line encryption to make sure your data and money is always safe."
}

function Home() {

    return (
        <Fragment>
            <Header />
            <main>
                <Hero />
                <section className='features'>
                    <h2 className="sr-only">Features</h2>
                    <Feature
                        imageSrc={featureLeft.imageSrc}
                        imageAlt={featureLeft.imageAlt}
                        title={featureLeft.title}
                        content={featureLeft.content}
                    />
                    <Feature
                        imageSrc={featureMid.imageSrc}
                        imageAlt={featureMid.imageAlt}
                        title={featureMid.title}
                        content={featureMid.content}
                    />
                    <Feature
                        imageSrc={featureRight.imageSrc}
                        imageAlt={featureRight.imageAlt}
                        title={featureRight.title}
                        content={featureRight.content}
                    />
                </section>

            </main>
            <Footer />
        </Fragment>
    )
}

export default Home;