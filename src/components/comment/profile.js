import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import CommentItem from './commentItem';

class CommentFeed extends Component {
  render() {
    const { comments, postId } = this.props;

    return comments.map(comment => (
        <CommentItem key={comment.id} comment={comment}  />

    ));
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentFeed;




