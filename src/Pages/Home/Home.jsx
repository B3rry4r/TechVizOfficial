import React, { useState, useEffect } from 'react';
import image1 from '../../Assets/image(1).jpg';
import aboutSImg from '../../Assets/AppLogos/TechvizAppLogoBW.svg';
import image2 from '../../Assets/image(2).jpg';
import image3 from '../../Assets/image(3).jpg';
import image4 from '../../Assets/image(4).jpg';
import image5 from '../../Assets/image(5).jpg';
import image6 from '../../Assets/image(6).jpg';
import tv from '../../Assets/tv.json';
import ScrollReveal from 'scrollreveal';
import Lottie from 'lottie-react';
import './Home.scss';
import CountdownTimer from '../../Components/CountdownTimer/CountdownTimer';
import CountdownTimerContainer from '../../Components/CountdownTimerContainer/CountdownTimerContainer';


const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentImage, setCurrentImage] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { "url": image4 },
        { "url": image1 },
        { "url": image2 },
        { "url": image5 },
        { "url": image3 },
        { "url": image6 },
    ];

    // const images = [
    //     { "url": "https://tecvizhub.github.io/tecviz-images/Assets/image(3).jpg" },
    //     { "url": "https://tecvizhub.github.io/tecviz-images/Assets/image(1).jpg" },
    //     { "url": "https://tecvizhub.github.io/tecviz-images/Assets/image(2).jpg" },
    //     { "url": "https://tecvizhub.github.io/tecviz-images/Assets/image(4).jpg" },
    //     { "url": "https://tecvizhub.github.io/tecviz-images/Assets/image(5).jpg" },
    //     { "url": "https://tecvizhub.github.io/tecviz-images/Assets/image(6).jpg" },
    // ]

    useEffect(() => {
        const interval = setInterval(() =>{
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 6);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const headings = ["T","E","C","V","I","Z"];

    useEffect(() => {
        if (isLoading) {
            // Scroll to the top of the page
            window.scrollTo(0, 0);
        }
    }, [isLoading]);


    useEffect(() => {
        const loadImage = (url) => {
          return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve();
            image.onerror = () => reject();
            image.src = url;
          });
        };
      
        const preloadImages = async () => {
          const maxConcurrency = 4; // Maximum number of concurrent image loads
          const imagesCount = images.length;
          const preloadedImages = [];
      
          // Preload images concurrently with limited concurrency
          for (let i = 0; i < imagesCount; i += maxConcurrency) {
            const imagePromises = images.slice(i, i + maxConcurrency).map((image) => loadImage(image.url));
            await Promise.all(imagePromises);
            preloadedImages.push(...imagePromises);
          }
      
          setIsLoading(false);
        };
      
        preloadImages();
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
                        origin: 'left',
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
                        origin: 'left',
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
                        origin: 'bottom',
                        distance: '100px',
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
            ];

            const paragraphs = document.querySelectorAll('.animated-p');
            paragraphs.forEach((paragraph, index) => {
                sr.reveal(paragraph, {
                    delay: 200 * index, // Delay increases for each paragraph
                    distance: '40px',
                    origin: 'bottom',
                    duration: 300,
                    easing: 'ease-out',
                    reset: true
                });
            });

            revealConfigs?.forEach(({ element, config }) => {
                const elements = document?.querySelectorAll(element);
                sr?.reveal(elements, config);
            });
        }
    }, [isLoading]);


    //Carousel
  

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
                                <div className="text">
                                    {headings.map((content, index) =>(
                                        <h1 key={index} style={{ color : index === currentIndex ? "#F58125" : "White "}} >
                                            {content}
                                        </h1>
                                    ))}
                                </div>
                                <p>Your Dependable Associate in Cutting-Edge Technology Services</p>
                            </div>
                            <div className="staticAnimation">
                                <Lottie animationData={tv} loop={true} />
                            </div>
                        </div>
                        <div className="aboutSec">
                            <div className="content">
                                <div className="file">
                                    <img src={aboutSImg} alt="" />
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
                        <CountdownTimerContainer />
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
                                            <p>Adopt a content architecture that is genuinely composable and compatible with future transformative technologies.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <Tabs /> */}
                        <div className="productSection">
                            <div className="content">
                                <div className="contentDesc">
                                    <h1>Our <span>Services</span></h1>
                                    <p>We offer you a wide range of services</p>
                                </div>
                                <div className="productsHome">
                                    <p className='animated-p' >Web Development</p>
                                    <p className='animated-p' >Artificial Intelligence</p>
                                    <p className='animated-p' >Graphics Design</p>
                                    <p className='animated-p' >UI/UX Design</p>
                                    <p className='animated-p' >App Development</p>
                                    <p className='animated-p' >Architechture</p>
                                    <p className='animated-p' >Studio Management</p>
                                    <p className='animated-p' >Videography</p>
                                    <p className='animated-p' >Robotics</p>
                                    <p className='animated-p' >Content Creation</p>
                                    <p className='animated-p' >Computer Hardware</p>
                                    <p className='animated-p' >Social Media Management</p>
                                </div>
                            </div>
                            <p className='animated-p'>With Tecviz, Unlock the potential of innovation: Your Path to Cutting-Edge Solutions Where Innovation Meets Excellence</p>
                            <button>Get Started <span>&#8594;</span></button>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Home