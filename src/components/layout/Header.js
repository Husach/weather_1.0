import React, { Component } from 'react';
import Select from './../Select';
const database = require('./../../data/base-min.json');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      open: false
    };
  }

  handleChange(event, index, value) {
    this.props.history.push(`/info/${value.toLowerCase()}`);
  }

  getItem() {
    let {city} = this.props.params;
    if(!city || typeof city !== "string") return false;
    let foundCity = database.find(itm => itm.name.toLowerCase() === city.toLowerCase());
    if(!foundCity) {
      this.props.history.push("/error");
      return {};
    }
    return {
      name: foundCity.name,
      country: foundCity.country
    };
  }

  render() {
    let {name, country} = this.getItem.call(this);
    return (
      <div className="page-header">
        <div className="header__empty"/>

        <div className="header__info">
          <div className="header__city">{name}</div>
          <div className="header__country">{country}</div>
        </div>

        <Select
          options={database}
          selected={name}
          handleChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

export default Header;
