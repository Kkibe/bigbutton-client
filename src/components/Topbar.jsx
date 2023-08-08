import {DarkMode} from '@mui/icons-material';
import React, { useEffect } from 'react';
import Logo from '../assets/logo.png';
import { useState } from 'react';
import {
    Link
  } from "react-router-dom";


const Topbar = () => {
    const [theme, setTheme] = useState("light");

    const handleChange = () => {
        const body = document.querySelector('.app');
        const top = document.querySelector('.topbar');
        if(theme === "light") {
            body.classList.remove('dark-theme');
            top.style.background = "white";
        } else {
            body.classList.add('dark-theme');
            top.style.background = "black";
        }
    }

    const handleTheme= () => {
        if(theme === "light") {
            setTheme("dark");
        } else setTheme("light");

    }



    useEffect(() => {
        handleChange();
    }, [theme])
    return (
        <div className='topbar theme'>
            
            <Link to="/" className='logo'>
                    <img src={Logo}/>
            </Link> 
            <div className='navlinks'>
                <Link to="/" className='link'>Home</Link>
                <Link to="/products" className='link'>Products</Link>
                <Link to="/read" className='link'>Blogs</Link>
                <Link to="/about" className='link'>About</Link>
            </div>
            <div className='search'>
                <input type="text" placeholder="Search"/>
            </div>
            <DarkMode style={{
                color: "#ffbd59"
            }}  onClick = {handleTheme}/>

        </div>
    );
}

export default Topbar;
