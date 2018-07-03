import React from 'react';
import PropTypes from 'prop-types';
import Back from './../../components/Back';
import Header from './../../components/layout/Header';
import Content from './../../components/layout/Content';

const Info = ({match: {params}, history}) => {

  return (
    <div className="page-wrapper">
      <Header params={params} history={history} />
      <Content params={params} history={history} />
      <Back history={history} />
    </div>
  );
};

Info.propTypes = {
  router: PropTypes.object
};

export default Info;
