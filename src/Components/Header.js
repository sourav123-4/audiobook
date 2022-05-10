import React from 'react'
import "../Styles/Header.css";
const Header = () => {
    return (
        <div>
            <header className='topNav'>
                <div className='navMaxWidth'>
                    <div className='navLeft clear-margin-top'>
                        <a href='https://instaread.co/'>
                            <img src='https://instaread.co/images/instaread_logo_grey.svg' alt="Instaread Logo"/>
                        </a>
                    </div>
                    <div className='navRight clear-margin-top'>
                        <span className='menu-item desktop-inline-block'><a href='https://instaread.co/discover'>Discover</a></span>
                        <span className='menu-item desktop-inline-block'><a href='https://instaread.co/search'>Search</a></span>
                        <span className='menu-item desktop-inline-block'><a href='#' style={{color: "#0085e6"}}>Try Instaread</a></span>
                        <span className='menu-item desktop-inline-block'><a href='https://instaread.co/login'>Login</a></span>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;