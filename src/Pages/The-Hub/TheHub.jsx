import React, { useEffect } from 'react'
import hubLogo from '../../Assets/AppLogos/Hub-Lab-tw.svg'
import './TheHub.scss';
import aboutSImg from '../../Assets/AppLogos/TechvizAppLogoOW.svg';
import ScrollReveal from 'scrollreveal';
import { useNavigate } from 'react-router-dom';



const TheHub = () => {
  const navigate = useNavigate();


    const webDev = 'https://tecvizhub.github.io/tecviz-images/Assets/product-1.jpg';
    const embeddedSystems = 'https://tecvizhub.github.io/tecviz-images/Assets/image(5).jpg';
    const videography = 'https://tecvizhub.github.io/tecviz-images/Assets/videography.jpg';
    const architecture = 'https://tecvizhub.github.io/tecviz-images/Assets/architecture.jpg';
    const contentCreation = 'https://tecvizhub.github.io/tecviz-images/Assets/social-media.jpg';
    const grapgicsDesign = 'https://tecvizhub.github.io/tecviz-images/Assets/grapgics-design.jpg';
    const socialMedia = 'https://tecvizhub.github.io/tecviz-images/Assets/content-creation.jpg'

    useEffect(() => {
            const sr = ScrollReveal();

            // Define the configuration options for each element


            const divs = document.querySelectorAll('.animated-divs');
            divs.forEach((paragraph, index) => {
                sr.reveal(paragraph, {
                    delay: 200 * index, // Delay increases for each paragraph
                    distance: '60px',
                    origin: 'bottom',
                    duration: 300,
                    easing: 'ease-out',
                    reset: true
                });
            });
    }, []);

    return (
        <div className='theHub' >
            <div className="theHubHero">
                <div className="left">
                    <div className="spinner">
                        <img className='spinner-content' src={hubLogo} alt="" />
                    </div>
                </div>
                <div className="right">
                    <h2>The Hub Lab</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam hic omnis asperiores rerum ducimus explicabo cum similique ipsam! Quis, aperiam.</p>
                </div>
            </div>

            <div className="theHubMainA">
                <div className="tvLogoContainer">
                <img src={aboutSImg} alt="" />
                </div>
                <div className="concept">
                    <h1>Concept of <span>The Hub Lab</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi reprehenderit consequatur, rerum, veritatis id, fugiat facere atque doloribus numquam temporibus eos? Facere minima maxime illum laudantium iure pariatur voluptatum! Libero, itaque! Tempora at facere, blanditiis aspernatur mollitia debitis repellat iusto.</p>
                </div>
            </div>
            <div className="courses">
                <h1>Courses</h1>

                    <div className="courseContentContainer">
                        <div className="card">
                            <img src={webDev} alt="" />
                            <div className="animated-divs content">

                                <h2>Web Development</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eius fuga et culpa quia animi voluptates, facere explicabo est ad.</p>
                                <button onClick={() => navigate('/the-hub/website-development')} >Learn More</button>
                            </div>
                        </div>
                        <div className="card">
                            <img src={embeddedSystems} alt="" />
                            <div className="animated-divs content">

                                <h2>Embedded Systems</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eius fuga et culpa quia animi voluptates, facere explicabo est ad.</p>
                                <button onClick={() => navigate('/the-hub/embedded-systems')} >Learn More</button>
                            </div>
                        </div>
                        <div className="card">
                            <img src={videography} alt="" />
                            <div className="animated-divs content">

                                <h2>VideoGraphy</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eius fuga et culpa quia animi voluptates, facere explicabo est ad.</p>
                                <button>Learn More</button>
                            </div>
                        </div>
                        <div className="card">
                            <img src={architecture} alt="" />
                            <div className="animated-divs content">

                                <h2>Architecture</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eius fuga et culpa quia animi voluptates, facere explicabo est ad.</p>
                                <button>Learn More</button>
                            </div>
                        </div>
                        <div className="card">
                            <img src={contentCreation} alt="" />
                            <div className="animated-divs content">

                                <h2>Content Creation</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eius fuga et culpa quia animi voluptates, facere explicabo est ad.</p>
                                <button>Learn More</button>
                            </div>
                        </div>
                        <div className="card">
                            <img src={socialMedia} alt="" />
                            <div className="animated-divs content">

                                <h2>Social Media Management</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eius fuga et culpa quia animi voluptates, facere explicabo est ad.</p>
                                <button>Learn More</button>
                            </div>
                        </div>
                        <div className="card">
                            <img src={grapgicsDesign} alt="" />
                            <div className="animated-divs content">

                                <h2>Graphics Design</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eius fuga et culpa quia animi voluptates, facere explicabo est ad.</p>
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default TheHub