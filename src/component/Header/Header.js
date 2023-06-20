import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='menu bg-dark p-2 text-center'>
                <NavLink to='/' className='text-decoration-none p-1'>Home</NavLink>
                <NavLink to='/todo-list' className='text-decoration-none p-1'>TodoList</NavLink>
                <NavLink to='/charts' className='text-decoration-none p-1'>Chart</NavLink>
            </nav>
        </div>
    );
};

export default Header;