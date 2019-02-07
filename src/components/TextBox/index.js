import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ title, content}) => { 

    return(
        <div className="TextBox">
                           <div className="Title"> {title} </div>
                           <div className="Content">
                            <p>
                            {content}
                            </p>
                           </div>
        </div>
    )
};

TextBox.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};
  
export default TextBox; 