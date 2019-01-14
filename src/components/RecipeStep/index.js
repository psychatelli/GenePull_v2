import React, { Component } from 'react'
import Avatar from 'react-avatar';

export default class RecipeStep extends Component {
  render() {
    return (
      <div> 
        <div className="imgPostPublic Card"> 
            <div className="controls"> 
                <div>   
                  STEP 1
                </div>

                <div> <i class="material-icons">favorite_border</i> <i class="material-icons">redo</i></div>
            </div>
            <div className="img_container">
                <div className="gallery_indicator"> 
                <i class="material-icons">collections</i>
                </div>
                <img src={this.props.img} alt=""/>  
            </div>

            <div> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p> 
            </div>
        </div>
      </div>
    )
  }
}
