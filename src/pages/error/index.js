import React from 'react';
import PropTypes from 'prop-types';
import Back from './../../components/Back';

const Error = ({history}) => {

  return (
    <div className="page-error">
      <div className="error">
        <Back history={history} />
      </div>
    </div>
  );
};

Error.propTypes = {
  router: PropTypes.object
};

export default Error;
