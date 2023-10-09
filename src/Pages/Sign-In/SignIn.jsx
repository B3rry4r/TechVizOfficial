import React, { useState } from 'react';
import './SignIn.scss';
import signUp from '../../Assets/image4.jpg';
import appLogoWO from '../../Assets/AppLogos/TechvizAppLogoWO.svg'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [step, setStep] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleNextClick = () => {
        setError('');

        // Check if the input fields are empty
        if (step === 0 && email.trim() === '') {
            setError('Please enter your Email.');
            return;
        }
        if (step === 1 && password.trim() === '') {
            setError('Please enter your Password.');
            return;
        }

        // Proceed to the next step or show "Sign Up" button
        if (step < 1) {
            setStep((prevStep) => prevStep + 1);
        } else {
            handleSignUp();
        }
    };

    const handleSignUp = () => {
        // Handle Sign Up logic here
        // For now, let's just show an alert with the user's details
        alert(`Thank you for signing in!\n\n${email}\nPassword: ${password}`);
    };

    return (
        <div className='signIn'>
            <div className="line"></div>
            <div className="left">
                <h2>TECV<span>I</span>Z</h2>
                <h1>Welcome Back!</h1>
                <p>Sign in to access personalized experiences and begin your adventure.</p>
                <div className="form">
                    <input
                        type="text"
                        placeholder='Enter Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ display: step >= 0 ? 'block' : 'none' }}
                    />
                    <input
                        type="password"
                        placeholder='Enter Your Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ display: step >= 1 ? 'block' : 'none' }}
                    />

                    {error && <p className="error-message">{error}</p>}

                    {step < 1 ? <button onClick={handleNextClick}>Next</button> : <button onClick={handleNextClick}>Sign In</button>}
                </div>
            </div>
            <div
                className="right"
                style={{
                    backgroundImage: `url(${signUp})`
                }}
            >
                <div className="content">
                    <h1>Don't Have An Account?</h1>
                    <p>Create an account now to unlock personalized experiences </p>
                    <Link to="/sign-up" className='button' >Sign Up</Link>
                </div>

                <img src={appLogoWO} alt="" />
            </div>
        </div>
    );
};

export default SignUp;
