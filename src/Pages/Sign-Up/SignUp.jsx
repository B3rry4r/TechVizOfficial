import React, { useState } from 'react';
import './SignUp.scss';
import signUp from '../../Assets/image4.jpg';
import signUp2 from '../../Assets/signUp3.jpg';
import appLogoWO from '../../Assets/AppLogos/TechvizAppLogoWO.svg'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [step, setStep] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleNextClick = () => {
        setError('');

        // Check if the input fields are empty
        if (step === 0 && firstName.trim() === '') {
            setError('Please enter your First Name.');
            return;
        }
        if (step === 1 && lastName.trim() === '') {
            setError('Please enter your Last Name.');
            return;
        }
        if (step === 2 && email.trim() === '') {
            setError('Please enter your Email.');
            return;
        }
        if (step === 3 && password.trim() === '') {
            setError('Please enter your Password.');
            return;
        }

        // Proceed to the next step or show "Sign Up" button
        if (step < 3) {
            setStep((prevStep) => prevStep + 1);
        } else {
            handleSignUp();
        }
    };

    const handleSignUp = () => {
        // Handle Sign Up logic here
        // For now, let's just show an alert with the user's details
        alert(`Thank you for signing up!\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPassword: ${password}`);
    };

    return (
        <div className='signUp'>
            <div className="line"></div>
            <div className="left">
                <h2>TECV<span>I</span>Z</h2>
                <h1>Welcome</h1>
                <p>Create an account to unlock personalized experiences and embark on your journey. Sign up now!</p>
                <div className="form">
                    <input
                        type="text"
                        placeholder='Enter Your First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        style={{ display: step >= 0 ? 'block' : 'none' }}
                    />
                    <input
                        type="text"
                        placeholder='Enter Your Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        style={{ display: step >= 1 ? 'block' : 'none' }}
                    />
                    <input
                        type="text"
                        placeholder='Enter Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ display: step >= 2 ? 'block' : 'none' }}
                    />
                    <input
                        type="password"
                        placeholder='Enter Your Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ display: step >= 3 ? 'block' : 'none' }}
                    />

                    {error && <p className="error-message">{error}</p>}

                    {step < 3 ? <button onClick={handleNextClick}>Next</button> : <button onClick={handleNextClick}>Sign Up</button>}
                </div>
            </div>
            <div
                className="right"
                style={{
                    backgroundImage: `url(${signUp})`
                }}
            >
                <div className="content">
                    <h1>Already Have An Account?</h1>
                    <p>Sign in to access personalized experiences and begin your adventure. Your journey awaits!</p>
                    <Link to="/sign-in" className='button' >Sign In</Link>
                </div>

                <img src={appLogoWO} alt="" />
            </div>
        </div>
    );
};

export default SignUp;
