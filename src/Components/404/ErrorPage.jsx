import React from 'react';
import './ErrorPage.scss'
import { Link, useNavigate } from 'react-router-dom';
import hubLogo from '../../Assets/AppLogos/Hub-Lab-tw.svg'
import appLogoWO from '../../Assets/AppLogos/TechvizAppLogoWO.svg'


const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className='errorPage'>
            <div className="content">
                <div>
                <h1>404</h1>
                <div class="line-loader"></div>
                </div>
                <div className="sorry">
                    <p>Sorry the page your trying to access now currently doesnt exist</p>
                    <p>Apologies, This site is still under development</p>
                </div>
                <div className="logoLink">
                    <img src={hubLogo} alt="" onClick={()=> navigate('/the-hub')}/>
                    <img src={appLogoWO} alt="" onClick={()=> navigate('/')}/>
                </div>
                <div className="visit">
                    <Link to='/the-hub'>Visit The HUB</Link>
                    <span>or</span>
                    <Link to='/'>Tecviz Home</Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage