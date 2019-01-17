import React, { Component } from 'react'
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

// TreeGroupItem

export default class TreeBranchItem extends Component {
  render() {
    return (
      <div>
        <div className="treeItem-group">

              <div class="box">
              <Link to={this.props.link}>
                <Avatar facebookId={this.props.img} size="40" round={true} />
              </Link> 
              </div>
              <div class="box"> <Link to={this.props.link}> {this.props.name} </Link> </div>
              <div class="box">
                  {this.props.bornYear}
              </div>
            
        </div>
      </div>
    )
  }
}
