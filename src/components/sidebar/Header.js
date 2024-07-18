import React from 'react';
// import './sidebar.scss';
import { FaEnvelope, FaBell,FaRocketchat } from 'react-icons/fa';
const Header = () => {

    return (
        <>
        <div className="header-section">
            <div className="header-left">
                <h2 className="owner-name">Hallo, Raza mushtaq</h2>
            </div>
            <div className="header-right" style={{cursor:'pointer' }}>
                <FaRocketchat style={{ marginRight: '10px' }}/>
                <FaEnvelope style={{ marginRight: '10px' }}  />
                <FaBell />
            </div>
            
            </div>

        </>
    );
};

export default Header;