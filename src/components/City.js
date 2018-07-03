import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class City extends Component {

  render() {
    return (
      <Link className="city" to={`info/${this.props.item.name.toLowerCase()}`}>
        <div className="city__name">{this.props.item.name}</div>
        <div className="city__country">{this.props.item.country}</div>
      </Link>
    );
  }
}

export default City;
