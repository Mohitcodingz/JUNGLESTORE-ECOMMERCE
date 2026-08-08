import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
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

                <Link to="/login">
                    Account
                </Link>

                <Link to="/cart">
                    Cart
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;