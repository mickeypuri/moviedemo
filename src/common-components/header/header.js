import React from 'react';
import styles from './header.module.css';

function Header () {

    return (
        <>
        <div className={styles.main}>
            <span className={styles.primary}>hey</span>
            <span className={styles.secondary}>cinema</span>
        </div>

        </>
    )
}

export default Header;