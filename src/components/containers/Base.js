import React, { Fragment, Component } from 'react';
import Block from './../Block';

class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    if(!this.props.selected || !this.props.selected.lat || !this.props.selected.lng) return false;
    this.load(this.props);
  }

  componentWillReceiveProps(props) {
    if(!props.selected || !props.selected.lat || !props.selected.lng) return false;
    if((props.selected && props.selected.name) !== (this.props.selected && this.props.selected.name)) {
      this.load(props);
    }
  }

  render() {
    return (
      <Fragment>
        <Block data={this.state.data} info={this.state.info}/>
      </Fragment>
    );
  }
}

export default Base;
