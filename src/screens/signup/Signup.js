// Signup.js
import './signup.scss';
import image from '../../assets/sig.png';
import signup from '../../assets/sign.png';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import formStore from '../../stores/signUp';
import { validateForm } from '../../helper/signupValiadtions';

const Signup = observer(() => {
  const navigate = useNavigate();
  const { formData } = formStore;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    formStore.setFormData(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    if (validateForm()) {
      navigate('/proceed');
      formStore.clearFormData();
    }
    else{
      console.log("error");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={signup} alt='' />
      </div>
      <div className="signup-form-container">
        <h2>Let’s start!</h2>
        <p>It should only take a few minutes</p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Restaurant Owner Name"
            value={formData.ownerName}
            onChange={handleInputChange}
            name="ownerName" // Add name attribute
            required
          />
          <input
            type="text"
            placeholder="Restaurant Name"
            value={formData.restaurantName}
            onChange={handleInputChange}
            name="restaurantName" // Add name attribute
            required
          />
          <input
            type="email"
            placeholder="Restaurant Email"
            value={formData.restaurantEmail}
            onChange={handleInputChange}
            name="restaurantEmail" // Add name attribute
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            name="address" // Add name attribute
            required
          />
          <button type="submit">Proceed</button>
        </form>
      </div>
      <div className="signup-right">
        <img src={image} alt='' />
      </div>
    </div>
  );
});

export default Signup;
