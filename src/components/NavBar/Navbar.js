import React from 'react';
import './style.css'
const Navbar = () => {
    return (

        <div className="text-white min-w-screen">
            <nav className="py-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        {/* <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-2" /> */}
                        <span className="font-semibold text-xl"></span>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="nav-menu rounded-lg px-6 py-2">Home</a>
                        <a href="#" className="nav-menu rounded-lg px-6 py-2">About</a>
                        <a href="#" className="nav-menu rounded-lg px-6 py-2">Project</a>
                        <a href="#" className="nav-menu rounded-lg px-6 py-2">Contact</a>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;