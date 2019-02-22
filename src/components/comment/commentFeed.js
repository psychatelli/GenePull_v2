import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentItem from './commentItem';
import Avatar from 'react-avatar';

class CommentFeed extends Component {
  render() {
    const { comments, postId } = this.props;

    return comments.map(comment => (
        <div className="CommentSectionWrapper"> 
            <div className="Card Comment"> 
                <div key={comment.id} > <Avatar facebookId={comment.avatar} size="50" round={true} /> </div>
                <div>{comment.text}</div>
                <div>Reply</div>
            </div>
        </div> 
    ));
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentFeed;




