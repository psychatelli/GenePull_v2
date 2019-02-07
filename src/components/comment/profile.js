import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';


const Comment = ({id, avatar, comment }) => {
    return (
      <div className="CommentSectionWrapper"> 
          <div className="Card Comment"> 
              <div key={id} >
              <Avatar facebookId={avatar} size="50" round={true} /> 
              </div>

              <div>
              {comment}
              </div>

              <div>
                Reply
              </div>
          </div>
      </div>  
    )
};

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
  
};

export default Comment;