import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './TermsAndConditions.scss';

const TermsAndConditions = () => {
    return (
        <div className="terms-page">
            <header className="header">
                <Link to="/" className="back-link">
                <FaArrowLeft />
                </Link>
                <div className="logo">Logo</div>
                <div className="title">Terms and Conditions</div>
            </header>
            <div className="main-content">
                <div className="background-image">
                    <h1 className='terms'>Terms & Condition</h1>
                </div>
                <div className="content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris eget
                        ultricies convallis, neque ex tincidunt lectus, sed tincidunt justo urna a metus.
                        Aenean hendrerit id velit id fringilla. Proin non odio nec nisl eleifend faucibus.
                        Nullam id semper tortor. Cras ut risus a purus convallis laoreet. Duis maximus
                        tellus nec lacinia fermentum. Mauris auctor sem nec metus congue hendrerit. Sed
                        auctor libero at ipsum auctor, et accumsan ante consequat.
                    </p>
                    <h2>Delivery Hero</h2>
                </div>
            </div>
            <footer className="footer">
                <div className="logo">Logo</div>
                <h3>Delivery Hero</h3>
            </footer>
        </div>
    );
}

export default TermsAndConditions;
