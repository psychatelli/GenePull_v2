import React  from 'react'
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TreeBranchItem = ({ img, link, name, bornYear}) => { 

    return(
      <div className="treeItem-group">

      <div className="box">
      <Link to={link}>
        <Avatar facebookId={img} size="40" round={true} />
      </Link> 
      </div>
      <div className="box"> <Link to={link}> {name} </Link> </div>
      <div className="box">
          {/* {bornYear} */}
      </div>
    
</div>
    )
};

TreeBranchItem.propTypes = {
    img: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bornYear: PropTypes.string.isRequired,
    
  };
  
export default TreeBranchItem; 



