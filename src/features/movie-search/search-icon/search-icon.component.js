import Icon from '@material-ui/icons/Search';
import React from 'react';
import styles from './search-icon.module.css';

function SearchIcon () {
    return (
      <Icon className={styles.icon} style={{ fontSize: 50 }} />
    );
}

export default SearchIcon;