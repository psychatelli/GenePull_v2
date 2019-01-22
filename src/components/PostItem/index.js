import React, { Component } from 'react'
import Avatar from 'react-avatar';
 
export default class ImgPostPublic extends Component {
  render() {
    return (
      <div> 
        <div className="imgPost Card"> 
            <div className="controls"> 
                <div>   
                  <Avatar facebookId={this.props.img} size="40" round={true} /> <span className="Name"> {this.props.name}</span>
                </div>

                <div> <i class="material-icons">favorite_border</i> <i class="material-icons">redo</i></div>
            </div>
            <div className="img_container">
                <div className="gallery_indicator"> 
                <i class="material-icons">collections</i>
                </div>
                <img src={this.props.post} alt=""/> 
            </div>
        </div>
      </div>
    )
  }
}
