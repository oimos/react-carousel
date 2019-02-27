import React from 'react';
import styles from './Pagination.css';

const Pagination = props => (
  <div className={styles.Wrapper}>
  {
    props.images.map((_, index) => (
      <div
        key={`${index}_pagination`}
        className={[styles.Pagination, (props.sliderIndex === index ? styles.Active : '')].join(' ')}
        onClick={() => props.changeSlider(index)} />
    ))
  }
  </div>
);

export default Pagination;
