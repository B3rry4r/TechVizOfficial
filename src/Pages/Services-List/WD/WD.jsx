import React from 'react';
import CountdownTimerContainer from '../../../Components/CountdownTimerContainer/CountdownTimerContainer';
import Lottie from 'lottie-react';
import appLogoWO from '../../../Assets/AppLogos/TechvizAppLogoWO.svg';
import es from '../../../Assets/es.json';
import './WD.scss';
import hubLogo from '../../../Assets/AppLogos/Hub-Lab-tw.svg'

const WD = () => {
    return (
        <div className='wd'>
            <div class="hero">
                <div class="container">
                    <h1>Website Development</h1>
                    <p>Learn how to create websites from scratch and take your skills to the next level.</p>
                </div>
                <div className="esLottie">
                    <Lottie animationData={es} loop={true} />
                    <img className='hubLogo' src={hubLogo} alt="" />
                    <img src={appLogoWO} alt="" />
                </div>
            </div>
            <div className="hub">
                <h1>THE HUB LAB</h1>

                <div className="hubLevels">

                    <div class="level beginner">
                        <div class="container">
                            <h2>Beginner Level</h2>
                            <p>Start your journey in website development with these introductory topics:</p>
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>HTML Fundamentals</li>
                                <li><i class="fa-regular fa-circle-check"></i>CSS Basics and Styling</li>
                                <li><i class="fa-regular fa-circle-check"></i>CSS intermediate</li>
                                <li><i class="fa-regular fa-circle-check"></i>Bootsrap 5</li>
                                <li><i class="fa-regular fa-circle-check"></i>Responsive Web Design</li>
                            </ul>
                        </div>
                    </div>

                    <div class="level intermediate">
                        <div class="container">
                            <h2>Intermediate Level</h2>
                            <p>Expand your knowledge and skills in website development:</p>
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>Advanced CSS and CSS Frameworks</li>
                                <li><i class="fa-regular fa-circle-check"></i>Intro to JavaScript</li>
                                <li><i class="fa-regular fa-circle-check"></i>JavaScript Intermediate (DOM)</li>
                                <li><i class="fa-regular fa-circle-check"></i>Version Control with Git</li>
                                <li><i class="fa-regular fa-circle-check"></i>Advanced Javascript</li>
                            </ul>
                        </div>
                    </div>

                    <div class="level advanced">
                        <div class="container">
                            <h2>Advanced Level</h2>
                            <p>Become an expert in website development with these advanced topics:</p>
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>Backend Development</li>
                                <li><i class="fa-regular fa-circle-check"></i>Database Integration</li>
                                <li><i class="fa-regular fa-circle-check"></i>Building Restful APIs</li>
                                <li><i class="fa-regular fa-circle-check"></i>Authentication and Authorization</li>
                                <li><i class="fa-regular fa-circle-check"></i>Performance Optimization</li>
                                <li><i class="fa-regular fa-circle-check"></i>React js</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div class="resources">
                    <div class="container">
                        <h2>Additional Resources</h2>
                        <p>Explore these additional resources to enhance your website development skills:</p>
                        <ul>
                            <li><i class="fa-regular fa-circle-check"></i>Recommended Books and Online Courses</li>
                            <li><i class="fa-regular fa-circle-check"></i>Code Editors and Development Tools</li>
                            <li><i class="fa-regular fa-circle-check"></i>Online Communities and Forums</li>
                            <li><i class="fa-regular fa-circle-check"></i>Design and Prototyping Tools</li>
                        </ul>
                    </div>
                </div>
            </div>
            <CountdownTimerContainer />
        </div>
    )
}

export default WD