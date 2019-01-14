import React, { Component } from 'react'
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

export default class ThumbnailList extends Component {
  render() {
    return (
        <div className="ThumbnailList Card"> 
            <div className="controls"> 
                <div>
                  <Link to={this.props.link}>   
                 {this.props.title}
                  </Link> 
                </div>

                <div>  <i class="material-icons">redo</i></div>
            </div>
            <div className="img_container">
                {/* <div className="gallery_indicator"> 
                <i class="material-icons">collections</i>
                </div> */}
                <Link to={this.props.link}> 
                <img src={this.props.img} alt=""/>
                </Link>
            </div>
        </div>





    )
  }
}
