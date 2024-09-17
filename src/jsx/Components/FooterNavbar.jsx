import React from 'react';
import { MouseEvent, useState } from "react";
import { Link } from 'react-router-dom';
import chatImage from '../../img/icons/chat.svg';
import userImage from '../../img/icons/user.svg';

const FooterNavbar = ({ navigations }) => {
    const images = [chatImage, userImage];
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <nav className="navbar">
            <div className="navbar-nav">
                {navigations.map((navigation, index) => (

                    <Link to={navigation.path} key={index} className={selectedIndex === index ? 'nav-item active' : 'nav-item'} onClick={() => setSelectedIndex(index)}>

                        <img src={images[index]} alt={`Image for ${navigation.text}`} className="nav-icon" />

                        <div className="nav-link"> {navigation.text} </div>
                    </Link>

                ))}
            </div>
        </nav>
    );
}

export default FooterNavbar