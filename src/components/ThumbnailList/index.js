import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ThumbnailList = ({ link, title, img}) => { 

    return(
        <div className="ThumbnailList Card"> 
        <div className="controls"> 
            <div>
              <Link to={link}>   
             {title}
              </Link> 
            </div>

            <div>  <i class="material-icons">redo</i></div>
        </div>
        <div className="img_container">
            {/* <div className="gallery_indicator"> 
            <i class="material-icons">collections</i>
            </div> */}
            <Link to={link}> 
            <img src={img} alt=""/>
            </Link>
        </div>
    </div>
    )
};

ThumbnailList.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,

  };
  
export default ThumbnailList; 







