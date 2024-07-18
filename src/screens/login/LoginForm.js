import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link, useNavigate } from 'react-router-dom';
import './logindesign.scss'
import { validateForm } from '../../helper/formLoginValidation'
import login from '../../assets/login-back.jpg'
import { authStore } from '../../stores/authStore';

const LoginForm = observer(() => {
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log("handel", e.target.value)
        authStore.setFormField(name, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting form...");
        if (validateForm()) {
            console.log("Form validation successful. Navigating to sidebar...",authStore.formFields);
            navigate('/sidebar');
            authStore.clearFormFields();
        } else {
            console.log("Form validation failed. Cannot navigate to sidebar.");
        }
    };

    return (
        <div className='containerform'>
            <div className="forms">
                <div className="login-form">
                    <h1>YumYum</h1>
                    <h3>Welcome Back!</h3>
                    <p className='p'>Login with Restaurant name and License key!</p>
                    <form onSubmit={handleSubmit}>
                        <div className="input-boxes">
                            <div className="input-box">
                                <input
                                    placeholder="Enter your Restaurant name"
                                    type="text"
                                    name="restaurantName"
                                    value={authStore.formFields.restaurantName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <input
                                    placeholder="Enter your licenseKey"
                                    type="text"
                                    name="licenseKey"
                                    value={authStore.formFields.licenseKey}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="button">
                                <button type='submit'>LOGIN</button>
                                <p>Don't have an account? <Link to="signup">Signup</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="front">
                <img src={login} alt="not found" />
            </div>
        </div>
    );
});

export default LoginForm;
