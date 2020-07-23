import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../search-icon/search-icon.component';

import { useSelector, useDispatch } from 'react-redux';
import { selectMovieSearch, updateMovieSearch, updateMovies } from '../movieSlice';

import styles from './search-box.module.css';

const SearchBox = ({defaultText}) => {
    const searchText = useSelector(selectMovieSearch);
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <input 
                className={styles.input} 
                placeholder={defaultText}
                onChange={e => dispatch(updateMovieSearch(e.target.value))}
                value={searchText}
            />
            <div onClick={() => dispatch(updateMovies(searchText))}>
                <SearchIcon />
            </div>
           
        </div>
    );
};




SearchBox.propTypes = {
    defaultText: PropTypes.string
}

SearchBox.defaultProps = {
    defaultText: "Enter title or an IMDB Id starting with tt"
}

export default SearchBox;