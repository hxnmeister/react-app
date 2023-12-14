import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => 
{
    return (
        <div className={styles.navPanel}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/todo">ToDo</NavLink>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/users">Users</NavLink>
        </div>
    );
}

export default Header;
