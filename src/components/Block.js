import React, { Component } from 'react';

class Block extends Component {
  constructor(props) {
    super(props);
    this.rotateX = this.rotateX.bind(this)
  }

  rotateX() {
    return {
      transform: `rotate(${this.props.data.wind_degree}deg)`
    }
  }


  wind() {
    let value = this.props.data.wind_kph;

    if (this.props.data.wind_mps) {
      value = (this.props.data.wind_mps * 3.6).toFixed(1);
    }
    return <div className="block__text">Wind: {value} km/h</div>;
  }

  render() {
    return (
      <div className="block">
        <div className="block__service">{this.props.info.site}</div>
        <div className="block__info">
          <div className="block__text">Temp: {this.props.data.temp} C</div>
          <div className="block__text">Humidity: {this.props.data.humidity} %</div>
          {this.wind()}
          {/*<div className="block__text">Direction: {Math.round(((this.props.data.wind_degree) * 10) / 10)} deg</div>*/}
          <div className="block__wind">
            <span>Direction:</span>
            <div className="block__direction" style={this.rotateX()}></div>
          </div>
          <div className="block__text">Description: {this.props.data.description}</div>
        </div>
        {/*<div className="block__update">Last update: {this.props.data.last_updated}</div>*/}
      </div>
    );
  }
}

export default Block;
