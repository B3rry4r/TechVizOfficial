import React, { useEffect } from 'react'
import hubLogo from '../../Assets/AppLogos/Hub-Lab-tw.svg'
import './TheHub.scss';
import aboutSImg from '../../Assets/AppLogos/TechvizAppLogoOW.svg';
import ScrollReveal from 'scrollreveal';
import { useNavigate } from 'react-router-dom';
import Black from '../../Components/Black/Black';



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
            <Black/>
            <div className="theHubHero">
                <div className="left">
                    <div className="spinner">
                        <img className='spinner-content' src={hubLogo} alt="" />
                    </div>
                </div>
                <div className="right">
                    <h2>The Hub Lab</h2>
                    <p>Welcome to Hub Lab, the cutting-edge training platform by Tecviz, where we unlock your true potential and equip you with the skills that shape the future. With a diverse range of courses in Web Development, Artificial Intelligence, Graphics Design, Studio Management, Videography, and Architecture, we are your ultimate destination for transformative learning experiences.</p>
                </div>
            </div>

            <div className="theHubMainA">
                <div className="tvLogoContainer">
                <img src={aboutSImg} alt="" />
                </div>
                <div className="concept">
                    <h1>Concept of <span>The Hub Lab</span></h1>
                    <p>Hub Lab is a transformative training platform by Tecviz, empowering individuals with future-ready skills in Web Development, Artificial Intelligence, Graphics Design, Studio Management, Videography, and Architecture. Guided by industry experts and equipped with state-of-the-art infrastructure, Hub Lab offers a personalized learning experience with hands-on projects, flexible schedules, and a commitment to career advancement. Whether you are a beginner or a professional seeking to upskill, Hub Lab unlocks your true potential, preparing you for success in an ever-evolving world, where innovation and creativity thrive. Step into the realm of endless possibilities and embark on a journey of growth and discovery with Hub Lab – where knowledge and imagination converge to shape the future.</p>
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