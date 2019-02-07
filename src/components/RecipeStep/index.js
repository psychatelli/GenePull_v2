import React, { Component } from 'react'
import Avatar from 'react-avatar';
import PropTypes from 'prop-types';

const RecipeStep = ({ img, step, text}) => { 

    return(
      <div> 
      <div className="imgPost Card"> 
          <div className="controls"> 
              <div>   
                {step}
              </div>

              <div> <i className="material-icons">favorite_border</i> <i className="material-icons">redo</i></div>
          </div>

          <div className="img_container">
              <div className="gallery_indicator"> 
              <i class="material-icons">collections</i>
              </div>
              <img src={img} alt=""/>  
          </div>

          <div> 
              <p>{text}</p> 
          </div>
      </div>
    </div>
    )
};

RecipeStep.propTypes = {
    img: PropTypes.string.isRequired,
    step: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  export default RecipeStep;