import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NextButton.css';

const NextButton = props => (
  <button className={styles.Button} onClick={props.increment}>
    <FontAwesomeIcon icon="caret-right" />
  </button>
);

export default NextButton;
