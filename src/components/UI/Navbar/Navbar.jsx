import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import '../../../styles/App.css'
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }
    return (
        <div className="navbar">
            <MyButton onClick={logout}>LOGOUT</MyButton>
            <div className='navbar__links'>
                <Link to="/comps">Components</Link>
                <Link to="/posts">Posts task</Link>
                <Link to="/about">About application</Link>
            </div>
        </div>
    );
};

export default Navbar;
