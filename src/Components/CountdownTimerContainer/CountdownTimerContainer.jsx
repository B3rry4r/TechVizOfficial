import React from 'react'
import CountdownTimer from '../CountdownTimer/CountdownTimer'
import appLogoWO from '../../Assets/AppLogos/TechvizAppLogoWO.svg'
import sphere from '../../Assets/shpereM.json';
import Lottie from 'lottie-react';
import './CountdownTimerContainer.scss';

const CountdownTimerContainer = () => {
    return (
        <div>
            <div className="somethingBig">
                <p>Hey</p>
                <h2>Something <span>Big</span> is Coming!</h2>
                <CountdownTimer />
                <div className="bigAnimation">
                    <Lottie animationData={sphere} loop={true} />
                </div>
                <div className="appLogo">
                    <img src={appLogoWO} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CountdownTimerContainer