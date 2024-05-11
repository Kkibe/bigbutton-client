import {DarkMode, MenuOpen, MenuOutlined} from '@mui/icons-material';
import React from 'react';
import Logo from '../assets/logo.png';
import { useState } from 'react';
import {
    Link,
    NavLink
  } from "react-router-dom";


const Topbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='topbar'>
            <Link to="/" className='logo'>
                    <img src={Logo}/>
            </Link> 
            <div className='navlinks'>
                <NavLink to="/" className='link' end>Home</NavLink>
                <NavLink to="/products" className='link' end>Products</NavLink>
                <NavLink to="/read" className='link' end>Blogs</NavLink>
                <NavLink to="/contact" className='link' end>Contact Us</NavLink>
            </div>
            {
                open ? <MenuOpen className='menu-open' onClick={() => setOpen(!open)}/>: <MenuOutlined className='menu-icon' onClick={() => setOpen(!open)}/>
            }

        </div>
    );
}

export default Topbar;
