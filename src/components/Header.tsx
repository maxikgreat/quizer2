import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import logoNav from '../assets/images/quiz_logo.png';

export const Header = () => {
    return(
        <header>
            <div className="navbar navbar-expand-lg navbar-light">
                <div className="navbar-brand">
                    <Link to='/'>
                        <img src={logoNav} alt="Logo" />
                    </Link>
                </div>
                <nav className="mr-auto">
                    <NavLink exact activeClassName='active' to = '/' className='btn btn-outline-primary mr-2'>Quizes</NavLink>
                    <NavLink activeClassName='active' to = '/profile' className='btn btn-outline-primary'>Profile</NavLink>
                </nav>
            </div>
        </header>
    )
};