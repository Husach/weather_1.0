import React, { Component } from 'react';

class Result extends Component {

  getData() {
    let temp = 0,
        humidity = 0,
        count = 0,
        icon;

    for (let key in this.props.data) {
        if (this.props.data[key]) {
          temp = temp + JSON.parse(this.props.data[key].temp);
          humidity = humidity + JSON.parse(this.props.data[key].humidity);
          count = count + 1;
        }
        if (this.props.data[key].icon) {
          icon = this.props.data[key].icon
        }
    }

    temp = temp / count;
    humidity = humidity / count;
    return {temp, humidity, icon};
  }

  render() {
    const {temp, humidity, icon} = this.getData.call(this);
    
    return (
      <div className="block__result">
        <img src={icon} alt="" width="64" height="64" />
        <div className="block__result-temp">
          <span>Temp: </span>
          <span> {temp.toFixed(1)} C</span>
        </div>
        <div className="block__result-hum">Humidity:
          <span> {humidity.toFixed(1)} %</span>
        </div>
      </div>
    );
  }
}

export default Result;
