import React, { Component } from 'react'
import Avatar from 'react-avatar';

export default class Comment extends Component {
  render() {

    return (
        <div key={this.props.id} className="Card Comment">
            <div>
            <Avatar facebookId={this.props.avatar} size="50" round={true} /> 
            </div>

            <div>
            {this.props.comment}
            </div>

            <div>
            Reply
            </div>
        </div>
    )
  }
}
