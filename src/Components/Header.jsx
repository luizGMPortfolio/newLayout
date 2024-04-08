import Logo from './Logo'
import { Link } from "react-router-dom";
import './Header.css'
import { useState, useEffect } from 'react';


const Header = ({ menu, setMenu }) => {

    const [mobileActive, setMobileActive] = useState('')


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

                <div class="wobble"></div>
                <div class="wobble"></div>
                <div id="toggle-nav" class="toggle" onClick={() => setMobileActive(mobileActive === 'active' ? '' : 'active')}>
                    <i class={mobileActive === 'active' ? 'fa-solid fa-xmark fa-xl' : 'fa-solid fa-bars fa-xl'}></i>
                </div>

                <nav>
                    <Link to='/Building' className={`nav-item ${mobileActive === 'active' ? 'slide-out' : ''}`}>
                        <div ><i class="fa-solid fa-screwdriver-wrench"></i></div>
                    </Link>
                    <Link to='/Contact' className={`nav-item ${mobileActive === 'active' ? 'slide-out' : ''}`}>
                        <div><i class="fa-solid fa-envelope"></i></div>
                    </Link>
                    <Link to='/Themes' className={`nav-item ${mobileActive === 'active' ? 'slide-out' : ''}`}>
                        <div ><i class="fa-solid fa-layer-group"></i></div>
                    </Link>
                    <Link to='/About' className={`nav-item ${mobileActive === 'active' ? 'slide-out' : ''}`}>
                        <div ><i class="fa-solid fa-address-card"></i></div>
                    </Link>
                    <Link to='/' className={`nav-item ${mobileActive === 'active' ? 'slide-out' : ''}`}>
                        <div ><i class="fa-solid fa-house"></i></div>
                    </Link>

                </nav>








            </menu>

        </div>
    )
}


export default Header
