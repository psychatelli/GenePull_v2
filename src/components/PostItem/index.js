import React, { Component } from 'react'
import Avatar from 'react-avatar';
import PropTypes from 'prop-types';

const PostItem = ({ img, name, post, gallery}) => { 

    return(
      <div> 

       <div className="imgPost Card"> 
          <div className="controls"> 
              <div>   
              <Avatar facebookId={img} size="40" round={true} /> <span className="Name"> {name}</span>
              </div>

              <div> 
                  <i className="material-icons">favorite_border</i> 
                  <i className="material-icons">redo</i>
              </div>
          </div>
  
          <div className="img_container">
          <div className="gallery_indicator"> 
                <span> <i className="material-icons"> { gallery ? "collections" : ""} </i></span>
          </div> 
              <img src={post} alt=""/>   
          </div>

      </div>




    </div>
    )
};

PostItem.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
    gallery: PropTypes.bool.isRequired,

  };
  
export default PostItem; 


