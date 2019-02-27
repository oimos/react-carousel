import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './PrevButton.css';

const PrevButton = props => (
  <button
    className={styles.Button}
    onClick={props.decrement}>
    <FontAwesomeIcon icon="caret-left" />
  </button>
);

export default PrevButton;
