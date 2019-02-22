import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';

class CommentItem extends Component {
 
  render() {
    const { comment } = this.props;
 
    return (
      <div className="CommentSectionWrapper"> 
        <div className="Card Comment"> 
            <div key={comment.id} > <Avatar facebookId={comment.avatar} size="50" round={true} /> </div>
            <div>{comment.text}</div>
            <div>Reply</div>
        </div>
      </div> 
    );
  }
}


export default CommentItem;
