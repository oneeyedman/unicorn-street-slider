import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderCurrent: 0,
      sliderTotal: 4,
      sliderPosition: '0%'
    }
    this.getPosition = this.getPosition.bind(this);
  }

  componentDidMount() {
    setInterval(this.getPosition, 3000);
  }

  createSlides() {
    const slides = [];
    for (let s=0; s<this.state.sliderTotal; s++) {
      slides.push(<div className={`slide slide--${s}`} key={s}>{s}</div>)
    }
    return slides;
  }

  getPosition() {
    let currentPosition = this.state.sliderPosition;
    let currentSlide = this.state.sliderCurrent;
    let totalSlides = this.state.sliderTotal;
    if (currentSlide < totalSlides-1) {
      // no es la última
      currentSlide++;
      const newPosition = `${currentSlide * -100}%`;
      this.setState({
        sliderCurrent: currentSlide,
        sliderPosition: newPosition
      });
    } else {
      // es la última
      this.setState({
        sliderCurrent: 0,
        sliderPosition: '0%'
      });
    }
  }

  render() {
    return (
      <div className="visor">
        <div className="slides" style={{marginLeft: this.state.sliderPosition, width: `${this.state.sliderTotal}00%`}}>
          {this.createSlides()}
        </div>
      </div>
    );
  }
}

export default App;
