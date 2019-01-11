import React, { Component } from 'react';
import Avatar from 'react-avatar';

export default class PublicPostDetails extends Component {
  render() {
    return (
      <div className="PublicPostDetails_Wrapper">
        <div className="Thumbnail"> <img src="https://photos.smugmug.com/Test/i-fwbctT5/0/1c13d36b/S/floridafamily-S.jpg" alt=""/> 
        </div>

        <div className="Description"> 
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          </div>



        <div class="input-field col s12">
          <i class="material-icons prefix">textsms</i>

          <input type="text" placeholder="Comment..." className="autocomplete"/>
        </div>

        <div className="CommentSectionWrapper"> 
         
          <div className="Card Comment">
            <div>
            <Avatar facebookId={this.props.img} size="50" round={true} /> 
            </div>

            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

            </div>

            <div>
              Reply
            </div>

          </div>
       


          <div className="Comment Card">
            <div>
            <Avatar facebookId={this.props.img2} size="50" round={true} /> 
            </div>

            <div>
            Sed do eiusmodLorem ipsum dolor sit amet.
            </div>

            <div>
              Reply
            </div>

          </div>
        </div>



      </div>
    )
  }
}


