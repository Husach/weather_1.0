import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Result from './../containers/Result';
import WeatherBit from './../containers/WeatherBit';
import Apixu from './../containers/Apixu';
import Open from './../containers/Open';
import WWO from './../containers/WWO';
const database = require('./../../data/base-min.json');

const KEY = {
  APIXU: "APIXU",
  WWO: "WWO",
  BIT: "BIT",
  OPEN: "OPEN"
};

class Content extends Component {
  state = {
    data: {}
  };

  onLoadData(key, input) {
    let {data} = this.state;
    data[key] = input;
    this.setState({
      data
    });
  }

  getItem() {
    let {city} = this.props.params;
    if(!city || typeof city !== "string") return false;
    let foundCity = database.find(itm => itm.name.toLowerCase().match(city.toLowerCase()));
    if(!foundCity) {
      return {};
    }
    return foundCity;
  }
  render() {
    let selected = this.getItem.call(this);
    return (
      <div className="page-weather">
        <Apixu
            selected={selected}
            onLoadData={this.onLoadData.bind(this, KEY.APIXU)}
        />
        <WWO
            selected={selected}
            onLoadData={this.onLoadData.bind(this, KEY.WWO)}
        />
        <Open
            selected={selected}
            onLoadData={this.onLoadData.bind(this, KEY.OPEN)}
        />
        <WeatherBit
            selected={selected}
            onLoadData={this.onLoadData.bind(this, KEY.BIT)}
        />
        <Result data={this.state.data} />
      </div>
    );
  }
}

Content.propTypes = {
  router: PropTypes.object
};

export default Content;
