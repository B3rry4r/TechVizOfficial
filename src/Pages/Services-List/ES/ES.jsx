import React from 'react';
import './ES.scss';
import appLogoWO from '../../../Assets/AppLogos/TechvizAppLogoWO.svg';
import heroLogo from '../../../Assets/Products-Logo/embedded-c-logo-o.svg';
import es from '../../../Assets/es.json';
import hubLogo from '../../../Assets/AppLogos/Hub-Lab-tw.svg'

import Lottie from 'lottie-react';
import CountdownTimerContainer from '../../../Components/CountdownTimerContainer/CountdownTimerContainer';


const ES = () => {
    return (
        <div className='es'>
            <div class="hero">
                <div class="container">
                    <h1>Embedded Systems</h1>
                    <p>Learn the fundamentals and advance your skills in embedded systems development.</p>
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
                            <p>Start your journey in embedded systems with these introductory topics:</p>
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i> Introduction to Embedded Systems</li>
                                <li><i class="fa-regular fa-circle-check"></i> Microcontrollers and Microprocessors</li>
                                <li><i class="fa-regular fa-circle-check"></i> Embedded C Programming</li>
                                <li><i class="fa-regular fa-circle-check"></i> Interfacing Basics</li>
                                <li><i class="fa-regular fa-circle-check"></i> Sensor Integration</li>
                            </ul>
                        </div>
                    </div>

                    <div class="level intermediate">
                        <div class="container">
                            <h2>Intermediate Level</h2>
                            <p>Expand your knowledge and skills in embedded systems development:</p>
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i> Real-time Operating Systems (RTOS)</li>
                                <li><i class="fa-regular fa-circle-check"></i> Peripheral Interfacing</li>
                                <li><i class="fa-regular fa-circle-check"></i> Communication Protocols (SPI, I2C, UART)</li>
                                <li><i class="fa-regular fa-circle-check"></i> Device Drivers Development</li>
                                <li><i class="fa-regular fa-circle-check"></i> Data Acquisition and Processing</li>
                            </ul>
                        </div>
                    </div>

                    <div class="level advanced">
                        <div class="container">
                            <h2>Advanced Level</h2>
                            <p>Become an expert in embedded systems with these advanced topics:</p>
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i> Embedded Linux Development</li>
                                <li><i class="fa-regular fa-circle-check"></i> Embedded GUI Development</li>
                                <li><i class="fa-regular fa-circle-check"></i> Wireless Connectivity (Bluetooth, Wi-Fi)</li>
                                <li><i class="fa-regular fa-circle-check"></i> Security in Embedded Systems</li>
                                <li><i class="fa-regular fa-circle-check"></i> Embedded Systems Testing and Debugging</li>
                            </ul>
                        </div>
                    </div>


                </div>
                <div class="resources">
                    <div class="container">
                        <h2>Additional Resources</h2>
                        <p>Explore these additional resources to enhance your embedded systems skills:</p>
                        <ul>
                            <li><i class="fa-regular fa-circle-check"></i>Recommended Books and References</li>
                            <li><i class="fa-regular fa-circle-check"></i>Online Tutorials and Courses</li>
                            <li><i class="fa-regular fa-circle-check"></i>Embedded Systems Development Tools and Kits</li>
                            <li><i class="fa-regular fa-circle-check"></i>Community Forums and Discussion Groups</li>
                        </ul>
                    </div>
                </div>
            </div>
            <CountdownTimerContainer />
        </div>
    )
}

export default ES