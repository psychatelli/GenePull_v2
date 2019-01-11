import React, { Component } from 'react'
import Avatar from 'react-avatar';

export default class TreeItem extends Component {
  render() {
    return (
      <div>
        <div className="treeItem">
            <div class="box">
            <Avatar facebookId={this.props.img} size="50" round={true} />  
            </div>
            <div class="box"> {this.props.name} <br/> {this.props.location}</div>
            <div class="box">
                {this.props.bornYear}
            </div>
        </div>
      </div>
    )
  }
}
