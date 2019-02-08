import React, { Component } from 'react'
import Avatar from 'react-avatar';
import PropTypes from 'prop-types';

const RecipeStep = ({ img, step, instructions}) => { 

    return(
      <div> 
      <div className="imgPost Card"> 
          <div className="controls"> 
              <div>   
                Step {step}
              </div>

              <div> 
                  <i className="material-icons">favorite_border</i> 
                  <i className="material-icons">redo</i>
              </div>
          </div>

          <div className="img_container">
              
              <img src={img} alt=""/>  
          </div>

          <div> 
              <p>{instructions}</p> 
          </div>
      </div>
    </div>
    )
};

RecipeStep.propTypes = {
    img: PropTypes.string.isRequired,
    step: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
  };

  export default RecipeStep;