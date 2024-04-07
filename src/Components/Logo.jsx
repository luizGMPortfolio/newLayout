import React from 'react'
import './Logo.css'
import { GoChevronLeft } from "react-icons/go";

const Logo = () => {
    return (
        <div className='logo'>
            <div className='left-arrow'>
                <div>
                    <i class="fa-solid fa-chevron-left fa-2xl"></i>
                </div>

            </div>
            <div className='center'>
                <h1>LGM</h1>
                <h2>Developer</h2>
                <div className='line'>
                    <div></div>
                </div>
            </div>
            <div className='right-arrow'>
                <div>
                    <i class="fa-solid fa-chevron-right fa-2xl"></i>
                </div>
            </div>
        </div>
    )
}

export default Logo