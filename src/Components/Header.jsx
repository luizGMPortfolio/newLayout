import Logo from './Logo'
import { Link } from "react-router-dom";
import './Header.css'
import { useState, useEffect } from 'react';


const Header = ({ menu, setMenu }) => {


    useEffect(() => {
        console.log('menu' + menu)
    }, []);

    return (
        <div className='header'>
            <div className='Container-logo'>
                <Logo />
            </div>
            <menu className='desktop'>
                <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}><li>Home</li></Link>
                <Link to='/Building' onClick={() => setMenu('building')} className={menu === 'building' ? 'active' : ''}><li>Building</li></Link>
                <Link to='/Themes' onClick={() => setMenu('themes')} className={menu === 'themes' ? 'active' : ''}><li>Themes</li></Link>
                <Link to='/About' onClick={() => setMenu('about')} className={menu === 'about' ? 'active' : ''}><li>About</li></Link>
                <Link to='/Contact' onClick={() => setMenu('contact')} className={menu === 'contact' ? 'active' : ''}><li>Contact Us</li></Link>
            </menu>
            <menu className='mobile'>

                < div className='m-contact' >
                    <i class="fa-solid fa-envelope"></i>
                </div >

                <div className='m-building'>
                    <i class="fa-solid fa-screwdriver-wrench"></i>
                </div>

                <div className='m-themes'>
                    <i class="fa-solid fa-layer-group"></i>
                </div>

                <div className='m-container'>
                    <div className='m-home'>
                        <i class="fa-solid fa-house"></i>
                    </div>
                    <div className='m-menu'>
                        <i class="fa-solid fa-bars"></i>
                    </div>

                </div>

            </menu>

        </div>
    )
}


export default Header
