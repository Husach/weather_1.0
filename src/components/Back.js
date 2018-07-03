import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Back = ({history}) => (
  <div className="btn-back">
    <RaisedButton label="Back" primary={true} onClick={() => history.push("/")} />    
  </div>
);

export default Back;
