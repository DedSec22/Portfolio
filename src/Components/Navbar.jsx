import React from 'react';
import { MouseEvent, useState } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../img/logo/logo.png';

const Navbar = ({ navigations }) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <header className="header-navbar">
            <div className="container">
                <nav className="navbar">
                    <div className="logo">
                        <Link to="/" className='navbar-brand'>
                            <img src={logo} alt="YourLogo" className="logo-image" />
                        </Link>
                    </div>
                    <ul className="navbar-nav">
                        {navigations.map((navigation, index) => (
                            <li
                                key={index}
                                id={'list-group-item-' + index}
                                className={selectedIndex === index ? 'nav-item active' : 'nav-item'}>
                                <Link
                                    to={navigation.path}
                                    className="nav-link"
                                    onClick={() => setSelectedIndex(index)}>
                                    {navigation.text} 
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar