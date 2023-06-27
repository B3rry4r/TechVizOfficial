import React, { useState, useEffect } from 'react';
import Tabs from '../../Components/Tabs/Tabs';
import image1 from '../../Assets/image(1).jpg';
import image2 from '../../Assets/image(2).jpg';
import image3 from '../../Assets/image(3).jpg';
import image4 from '../../Assets/image(4).jpg';
import image5 from '../../Assets/image(5).jpg';
import image6 from '../../Assets/image(6).jpg';
import tv from '../../Assets/tv.json';
import sphere from '../../Assets/shpereM.json';
import ScrollReveal from 'scrollreveal';
import Lottie from 'lottie-react';
import './Home.scss';
import CountdownTimer from '../../Components/CountdownTimer/CountdownTimer';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const preloadedImages = images.map((images) => {
            const image = new Image();
            image.src = images.url;
            return image;
        });

        Promise.all(preloadedImages.map((image) => image.decode())).then(() => {
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        if (isLoading) {
            document.body.classList.add('no-scrollbar');
        } else {
            document.body.classList.remove('no-scrollbar');
        }
    }, [isLoading]);


    //Scroll Reveal
    useEffect(() => {
        if (!isLoading) {
            const sr = ScrollReveal();

        // Define the configuration options for each element
        const revealConfigs = [
            {
                element: '.static-element',
                config: {
                    origin: 'bottom',
                    distance: '40px',
                    duration: 400,
                    delay: 200,
                    easing: 'ease-out',
                    reset: true,
                },
            },
            {
                element: '.static-element p',
                config: {
                    origin: 'right',
                    distance: '70px',
                    duration: 800,
                    delay: 200,
                    easing: 'ease-out',
                    reset: true,
                },
            },
            {
                element: '.static-element h3',
                config: {
                    origin: 'right',
                    distance: '100px',
                    duration: 800,
                    delay: 300,
                    easing: 'ease-out',
                    reset: true,
                },
            },
            {
                element: '.static-element h1',
                config: {
                    origin: 'left',
                    distance: '70px',
                    duration: 800,
                    delay: 300,
                    easing: 'ease-out',
                    reset: true,
                },
            },
            {
                element: '.static-element button',
                config: {
                    origin: 'left',
                    distance: '70px',
                    duration: 800,
                    delay: 300,
                    easing: 'ease-out',
                    reset: true,
                },
            },
            {
                element: '.staticAnimation',
                config: {
                    origin: 'top',
                    distance: '70px',
                    duration: 800,
                    delay: 300,
                    easing: 'ease-out',
                    reset: true,
                },
            },
            //SomeThingBigElements
            // Add more objects for additional elements
        ];

        revealConfigs?.forEach(({ element, config }) => {
            const elements = document?.querySelectorAll(element);
            sr?.reveal(elements, config);
        });
        }
    }, [isLoading]);


    //Carousel
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        { "url": image3 },
        { "url": image1 },
        { "url": image2 },
        { "url": image4 },
        { "url": image5 },
        { "url": image6 },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000); // Change the duration (in milliseconds) to adjust the sliding speed

        return () => {
            clearInterval(interval);
        };
    }, [images.length]);

    return (
        <div className='home'>
            {/* <>
                {
                    isLoading ? (
                        
                    ) : (
                        ''
                    )
                }
            </> */}
            {
                isLoading ? (
                    <>
                        <div className="tecvizLoading">
                            <h1>TECV<span>I</span>Z<span>.</span></h1>
                        </div>
                        <div className="loader-overlay">
                            <div className="loader-line"></div>
                            <div className="loader">
                                <div></div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="carousel">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.url}
                                    alt={`Images ${index + 1}`}
                                    className={`slide ${index === currentImage ? 'active' : ''}`} />
                            ))}
                            <div className="static-element">
                                <h3 className=''>Welcome to</h3>
                                <h1>TECV<span>I</span>Z</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit voluptas in quam hic! Impedit, neque!</p>
                                <button>Learn More</button>
                            </div>
                            <div className="staticAnimation">
                                <Lottie animationData={tv} loop={true} />
                            </div>
                        </div><div className="aboutSec">
                            <div className="content">
                                <div className="file">
                                    <img src="https://images.unsplash.com/photo-1580920461931-fcb03a940df5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                                </div>
                                <div className="contentDesc">
                                    <h1>Our <span>Story</span></h1>
                                    <p>Tecviz is a brand that is still in its early stages, which was founded in 2021. We are all about using modern technology to solve problems, and developing innovative systems that are relevant to everyone everywhere.
                                        Tecviz also participates in poverty eradication programs by providing clients and talented individuals with the necessary skills and tools to combat unemployment.
                                        Most importantly, we assist you in developing your talent into professional skills by utilizing our number one system, the Hub Lab</p>
                                    <button>Read More</button>
                                </div>
                            </div>
                        </div>

                        <div className="somethingBig">
                            <p>Hey</p>
                            <h2>Something <span>Big</span> is Coming!</h2>
                            <CountdownTimer />
                            <div className="bigAnimation">
                            <Lottie animationData={sphere} loop={true} />
                            </div>
                        </div>

                        <div className="visionSection">
                            <div className="content">
                                <div className="file">
                                    <img src="" alt="" />
                                </div>
                                <div className="contentDesc">
                                    <h1>Our <span>Vision</span></h1>
                                    <p>In less than a decade, to become Africa's, and the world's best tech company.</p>
                                    <div className="visionDesc">
                                        <div className="descContent">
                                            <div className="contentHeaders">
                                                <h2>Exceed</h2>
                                                <span>customer expectations</span>
                                            </div>
                                            <p>To produce experiences that foster client engagement and sustain higher revenue, unleash the creative expression of your team.</p>
                                        </div>
                                        <div className="descContent">
                                            <div className="contentHeaders">
                                                <h2>Level up </h2>
                                                <span>content velocity</span>
                                            </div>
                                            <p>Centralize content for stakeholders across your business to resolve silos, maximize reuse, and ensure trustworthy content.</p>
                                        </div>
                                        <div className="descContent">
                                            <div className="contentHeaders">
                                                <h2>Future-proof </h2>
                                                <span>your enterprise</span>
                                            </div>
                                            <p>Adopt a content architecture that is really composable and compatible with disruptive technology of the future.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><Tabs /><div className="productSection">
                            <div className="content">
                                <div className="contentDesc">
                                    <h1>Our <span>Products</span></h1>
                                    <p>We offer you a wide range of services</p>
                                </div>
                                <div className="products">
                                    <p>Web Development</p>
                                    <p>Artificial Intelligence</p>
                                    <p>Graphics Design</p>
                                    <p>UI/UX Design</p>
                                    <p>App Development</p>
                                    <p>Architechture</p>
                                    <p>Studio Management</p>
                                    <p>Videography</p>
                                    <p>Robotics</p>
                                    <p>Content Creation</p>
                                    <p>Computer Hardware</p>
                                    <p>Social Media Management</p>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, sint!</p>
                            <button>Get Started <span>&#8594;</span></button>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Home