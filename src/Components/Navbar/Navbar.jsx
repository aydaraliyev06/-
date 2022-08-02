import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='left'>
                <img width={53} src="https://old.rdn-grp.ru/upload/iblock/706/70660c73ff85e7b64d4a29dfbc0ca701.png" alt="icon" />
            </div>
            <div className='right'>
                <NavLink className='nav-Link' to='/'>Home</NavLink>
                <NavLink className='nav-Link' to='/info'>Info</NavLink>
                <NavLink className='nav-Link' to='/films'>Films</NavLink> 
            </div>
        </div>
    );
};

export default Navbar;