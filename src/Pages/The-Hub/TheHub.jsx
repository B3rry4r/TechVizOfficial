import React from 'react'
import hubLogo from '../../Assets/AppLogos/Hub-Lab-tw.svg'
import './TheHub.scss';

const TheHub = () => {
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
                <div className="concept">
                    <h1>Concept of <span>The Hub Lab</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi reprehenderit consequatur, rerum, veritatis id, fugiat facere atque doloribus numquam temporibus eos? Facere minima maxime illum laudantium iure pariatur voluptatum! Libero, itaque! Tempora at facere, blanditiis aspernatur mollitia debitis repellat iusto.</p>
                </div>
                <div className="courses">
                    <h1>Courses</h1>
                </div>
            </div>

        </div>
    )
}

export default TheHub