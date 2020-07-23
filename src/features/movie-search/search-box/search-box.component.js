import React from 'react';
import PropTypes from 'prop-types';

//import  SearchIcon  from './features/movie-search/search-icon/search-icon.component';
import SearchIcon from '../search-icon/search-icon.component';

import styles from './search-box.module.css';

const SearchBox = ({defaultText}) => (
    <div className={styles.container}>
        <input 
            className={styles.input} 
            placeholder={defaultText}
        />
        <SearchIcon />
    </div>
);

SearchBox.propTypes = {
    defaultText: PropTypes.string
}

SearchBox.defaultProps = {
    defaultText: "Enter Search Term"
}

export default SearchBox;