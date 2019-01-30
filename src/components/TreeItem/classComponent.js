import React, { Component } from 'react'
import Avatar from 'react-avatar';


export default class TreeItem extends Component {
  render() {
    return (
      <div>
        <div className="treeItem">
            <div className="box">
            <Avatar facebookId={this.props.img} size="50" round={true} />  
            </div>
            <div className="box"> {this.props.name} <br/> {this.props.location}</div>
            <div className="box">
                {this.props.bornYear} 
            </div>
        </div>
      </div>
    )
  }
}
