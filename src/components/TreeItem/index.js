import React  from 'react'
import Avatar from 'react-avatar';
import PropTypes from 'prop-types';

const TreeItem = ({ img, name, location, bornYear }) => {
  return (
      <div>
        <div className="treeItem">
            <div className="box">
            <Avatar facebookId={img} size="50" round={true} />  
            </div>
            <div className="box"> {name} <br/> {location}</div>
            <div className="box">
            </div>
        </div>
      </div>
  );
};

TreeItem.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    bornYear: PropTypes.string.isRequired,
    
  };

export default TreeItem;


