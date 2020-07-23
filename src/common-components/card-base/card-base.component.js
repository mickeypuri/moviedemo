import React from 'react';
import styles from './card-base.module.css';
import PropTypes from 'prop-types';

const CardBase = props => (
    <div className={styles.container}>{props.children}</div>
)

CardBase.propTypes = {
    children: PropTypes.node.isRequired
}

export default CardBase;