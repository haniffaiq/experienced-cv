import React from 'react';
import './style.css'
import instagram_logo from '../../assets/images/icons/instagram.png'
const SocialMediaLinks = () => {
    const handleSocialMediaClick = (url) => {
        window.open(url, '_blank'); // Membuka link di tab baru
    };

    return (
        <div className="flex items-center space-x-4">
            <button
                onClick={() => handleSocialMediaClick('https://www.instagram.com/')}
            >
                <img src={instagram_logo} alt="Instagram" className="w-8 h-8" />
            </button>
            <button
                onClick={() => handleSocialMediaClick('https://twitter.com/')}
            >
                <img src={instagram_logo} alt="Instagram" className="w-8 h-8" />
            </button>
            <button
                onClick={() => handleSocialMediaClick('https://www.linkedin.com/in/')}
            >
                <img src={instagram_logo} alt="Instagram" className="w-8 h-8" />
            </button>
        </div>
    );
};
const Footer = () => {
    return (
        <div className="text-white min-w-screen">
            <div className="container mx-auto flex items-center justify-center my-10">
                <p className=''>"Even a small change, it's a step forward."</p>
            </div>
            <div className="container mx-auto flex items-center justify-center my-10">
            <SocialMediaLinks />
            </div>


            <footer className="text-white py-4">
                <p className="text-center copyright">&copy; 2023 lama2dingin.id</p>
            </footer>
        </div>
    );
};

export default Footer;