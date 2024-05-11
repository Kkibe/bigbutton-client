import { Facebook, Instagram, LinkedIn, Pinterest, Twitter, YouTube } from '@mui/icons-material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social'>
                <h2>Follow us</h2>
                <div className='wrapper'>
                    <a href='#' title='facebook'><Facebook /></a>
                    <a href='#' title='instagram'><Instagram /></a>
                    <a href='#' title='twitter'><Twitter /></a>
                    <a href='#' title='youtube'><YouTube /></a>
                    <a href='#' title='linkedin'><LinkedIn /></a>
                    <a href='#' title='pinterest'><Pinterest /></a>
                </div >
                
            </div>

            <div className='section-wrapper'>
                <section>
                    <h2>Resources</h2>
                    <div className='items-container'>
                        <NavLink to='/contact' title='contact us'>Contact us</NavLink>
                        <NavLink to='/read' title='read blogs'>Read Blogs</NavLink>
                        <NavLink to='/help' title='help center'>Help center</NavLink>
                        <NavLink to='/services' title='services'>Our services</NavLink>
                        <NavLink to='/products' title='explore store'>Store</NavLink>
                    </div>
                </section>

                <section>
                    <h2>Featured</h2>
                    <div className='items-container'>
                        <Link to={"/bigplay"}>Bigplay</Link>
                        <Link to={"/bigplay"}>Coongames</Link>
                        <Link to={"/bigplay"}>Bigshare</Link>
                        <Link to={"/bigplay"}>Photomore</Link>
                        <Link to={"/bigplay"}>Workfit</Link>
                    </div>
                </section>

                <section>
                    <h2>Developers</h2>
                    <div className='items-container'>
                        <Link to={"/bigplay"}>Codespear</Link>
                        <Link to={"/bigplay"}>Dev Editor</Link>
                        <Link to={"/bigplay"}>Contribute</Link>
                    </div>
                </section>
            </div>

            <hr />

            <div className='footer-bottom'>
                <p>&copy; Bigbutton {new Date().getFullYear()}</p>
                <a>Privacy & cookies</a>
                <a>Terms of use</a>
                <a> Help</a>
            </div>
        </div>
    );
}

export default Footer;
