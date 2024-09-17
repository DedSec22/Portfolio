import React from 'react';
import FooterNavbar from './FooterNavbar';

const navigations = [
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
];

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-inner">
                    <div className="container-fluid">
                        <div className="footer-nav">
                            <FooterNavbar navigations={navigations} />
                        </div>
                        <span className='title'>
                            ALL VISUALS ARE PROTECTED UNDER&nbsp; COPYRIGHT ACT&nbsp;© 2024.
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer