import React from 'react';
import {Link} from "react-router-dom";

import '../../../styles/App.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className='navbar__links'>
                <Link to="/comps">Components</Link>
                <Link to="/posts">Posts task</Link>
                <Link to="/about">About application</Link>
            </div>
        </div>
    );
};

export default Navbar;
