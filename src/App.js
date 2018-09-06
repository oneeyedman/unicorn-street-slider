import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderCurrent: 0,
      sliderTotal: 5,
      sliderPosition: '0%',
      sliderTransition: 'margin ease 1s'
    }
    this.getPosition = this.getPosition.bind(this);
  }

  componentDidMount() {
    this.effect = setInterval(this.getPosition, 3000);
  }

  createSlides() {
    const slides = [];
    for (let s=0; s<this.state.sliderTotal-1; s++) {
      slides.push(<div className={`slide slide--${s}`} key={s}>{s}</div>)
    }
    slides.push(<div className={`slide slide--${0}`} key={'0c'}>{0}</div>)
    return slides;
  }

  getPosition() {
    let currentPosition = this.state.sliderPosition;
    let currentSlide = this.state.sliderCurrent;
    let totalSlides = this.state.sliderTotal;
    
    currentSlide++;
    const newPosition = `${currentSlide * -100}%`;
    this.setState({
      sliderCurrent: currentSlide,
      sliderPosition: newPosition,
      sliderTransition: 'margin ease 1s'
    });
    if (currentSlide === totalSlides) {
      // es la última
      clearInterval(this.effect);
      
      this.setState({
        sliderCurrent: 0,
        sliderPosition: '0%',
        sliderTransition: 'none'
      });
      this.effect = setInterval(this.getPosition, 3000);
    }

  }

  render() {
    const sliderStyles = {
      marginLeft: this.state.sliderPosition,
      width: `${this.state.sliderTotal}00%`,
      transition: this.state.sliderTransition
    }
    return (
      <div className="visor">
        <div className="slides" style={sliderStyles}>
          {this.createSlides()}
        </div>
      </div>
    );
  }
}

export default App;
