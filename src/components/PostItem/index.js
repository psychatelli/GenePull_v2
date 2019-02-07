import React, { Component } from 'react'
import Avatar from 'react-avatar';
import PropTypes from 'prop-types';

const ImgPostPublic = ({ img, name, post}) => { 

    return(
      <div> 
      <div className="imgPost Card"> 
          <div className="controls"> 
              <div>   
                <Avatar facebookId={img} size="40" round={true} /> <span className="Name"> {name}</span>
              </div>

              <div> <i className="material-icons">favorite_border</i> <i className="material-icons">redo</i></div>
          </div>
          <div className="img_container">
              <div className="gallery_indicator"> 
              <i class="material-icons">collections</i>
              </div>
              <img src={post} alt=""/> 
          </div>
      </div>
    </div>
    )
};

ImgPostPublic.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired

  };
  
export default ImgPostPublic; 


