import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    const token = localStorage.getItem('token');
    return (
        <nav className={styles.navbar}>

            {/* Left - Logo */}
            <div className={styles.logo}>
                <Link to="/">JungleStore</Link>
            </div>
        
            {/* Middle - Search */}
            <div className={styles.search}>
                <input
                    type="text"
                    placeholder="Search products..."
                />
                <button>Search</button>
            </div>

            {/* Right - User / Cart */}
            <div className={styles.actions}>

                {
                 token ? (<Link to='/login'>Profile</Link>) : (<Link to='/register'>Account</Link>)

                }

                 

                <Link to="/cart">
                    Cart
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;