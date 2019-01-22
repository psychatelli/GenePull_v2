import React, { Component } from 'react'

export default class ImgPostPrivate extends Component {
  render() {
    return (
      <div>
        <div className="imgPostPublic Card"> 
            <div className="controls"> 
                <div><i class="material-icons">favorite_border</i> <i class="material-icons">redo</i></div>
                <div> <i class="material-icons">more_horiz</i></div>
            </div>
            <div className="img_container">
                <img src={this.props.post} alt=""/>
            </div>
        </div>
      </div>
    )
  }
}
