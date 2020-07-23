import React from 'react';
import PropTypes from 'prop-types';

import CardBase from '../../../common-components/card-base/card-base.component';


import styles from './card.module.css';

const MovieCard = ({heading, subTitle, callout, imgUrl}) => (
    <CardBase className={styles.container}>
        <div className={styles.imgContainer}>
            <img className={styles.img} src={imgUrl} alt="movie" />
        </div>
        <div className={styles.info}>
            <h1>{ heading }</h1>
            <div className={styles.subtitle}>{ subTitle }</div>
            <p className={styles.callout}>{ callout }</p>
        </div>
    </CardBase>
);

MovieCard.propTypes = {
    heading: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    callout: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
}

export default MovieCard;

