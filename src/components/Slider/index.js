import React from 'react';
import styles from './Slider.css';

const Slider = props => (
  <div className={styles.Wrapper}>
    <div className={styles.Inner} style={{ transform: 'translateX(' + props.sliderIndex * props.imageWidth * -1 + 'px)' }}>
      {props.images.map((image, index) => (
        <a href={image.href} key={`${index}_slider`}>
          <img src={image.src} alt={image.alt}/>
        </a>
      ))}
    </div>
  </div>
);

export default Slider;
