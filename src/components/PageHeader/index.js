import React, { Component } from 'react'
import PropTypes from 'prop-types';


const PageHeader = ({ icon, text}) => { 

  return(
    <div className="PageHeader">
      <p>   <i className="material-icons">{icon}</i> {text} </p>
  </div>
  )
};

PageHeader.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
  
};

export default PageHeader; 


