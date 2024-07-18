// RestaurantForm.js

import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import appStore from '../../stores/AppStore';
import InputMask from 'react-input-mask';
import '../signup/restaurant.scss';
import { validateForm } from '../../helper/formSignupValidation';
import { useNavigate } from 'react-router-dom';

const RestaurantForm = observer(() => {
    const navigate = useNavigate(); // Accessing navigation functionality

    useEffect(() => {
       
        // appStore.currentTime; 
        console.log(appStore.currentTime); 
    }, []); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        appStore.setFormField(name, value);
        // console.log(appStore.formFields); 
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Check if all form fields are filled
        const allFieldsFilled = Object.values(appStore.formFields).every(value => !!value);
    
        if (!allFieldsFilled) {
            alert('Please fill in all fields.');
            return;
        }
    
        // Perform form validation
        const validationError = validateForm(appStore.formFields);
        if (validationError) {
            alert(validationError);
            return;
        }
    
        console.log("data", appStore.formFields);
        navigate('/sidebar');
        appStore.clearFormFields();
    };
    
    
    


    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h1>Boost Your Business</h1>
                <div className="input-container">
                    <InputMask
                        mask="+929999999999"
                        maskChar=" "
                        type="tel"
                        name="phoneNumber"
                        value={appStore.formFields.phoneNumber || '+92'}
                        placeholder="Phone Number"
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        name="licenseKey"
                        placeholder="License Key"
                        value={appStore.formFields.licenseKey}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="input-row">
                    <div className="input-container">
                        <label>Enter starting Time</label>
                        <input
                            type="time"
                            name="openingTime"
                            value={appStore.formFields.openingTime || appStore.currentTime}
                            onChange={handleInputChange}
                            placeholder="Opening Time"
                        />
                    </div>
                    <div className="input-container">
                        <label>Enter Closing Time</label>
                        <input
                            type="time"
                            name="closingTime"
                            value={appStore.formFields.closingTime || appStore.currentTime}
                            onChange={handleInputChange}
                            placeholder="Closing Time"
                            required // Apply validation
                        />
                    </div>
                </div>
                <button type="submit">Get Started</button>
            </form>
        </div>
    );
});

export default RestaurantForm;
