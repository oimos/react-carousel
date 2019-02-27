import React from 'react';

// Font Awesome Import
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

// Custom Content Import
import Slider from '../Slider';
import PrevButton from '../PrevButton';
import NextButton from '../NextButton';
import Pagination from '../Pagination';
import styles from './App.css';

// Load Using FontAwesome Typeface
library.add(faCaretRight, faCaretLeft);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.imageInfo = [
      {
        src: 'https://via.placeholder.com/500x200?text=Photo1',
        alt: 'Photo 1',
        href: 'https://www.google.co.jp/',
      },
      {
        src: 'https://via.placeholder.com/500x200?text=Photo2',
        alt: 'Photo 2',
        href: 'https://microsoft.com/ja-jp',
      },
      {
        src: 'https://via.placeholder.com/500x200?text=Photo3',
        alt: 'Photo 3',
        href: 'https://www.amazon.co.jp/',
      },
    ];
  }

  incrementIndex = () => {
    this.setState({
      // value will be reset to 0 when currentIndex is larger than image number
      currentIndex: this.imageInfo.length - 1 > this.state.currentIndex ? this.state.currentIndex + 1 : 0,
    });
  };

  decrementIndex = () => {
    this.setState({
      // value will be reset to this.imageInfo.length - 1 when currentIndex - 1 is smaller than 0
      currentIndex: this.state.currentIndex - 1 < 0 ? this.imageInfo.length - 1 : this.state.currentIndex - 1,
    });
  };

  setCurrentSlider = (paginationIndex) => {
    this.setState({
      currentIndex: paginationIndex,
    });
  };

  render() {
    return (
      <div>
        <div className={styles.Wrapper}>
          <PrevButton decrement={this.decrementIndex} />
          <Slider
            sliderIndex={this.state.currentIndex}
            images={this.imageInfo}
            imageWidth={500} />
          <NextButton increment={this.incrementIndex} />
        </div>
        <Pagination
          changeSlider={this.setCurrentSlider}
          sliderIndex={this.state.currentIndex}
          images={this.imageInfo} />
      </div>
    );
  }
}

export default App;
