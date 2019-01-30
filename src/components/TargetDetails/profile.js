import React, { Component } from 'react';
import Avatar from 'react-avatar';

export default class TargetDetails extends Component {
  render() {
    return (
      <div className="TargetDetails">  
        <div> 
          <h3>{this.props.title}</h3>
        </div>

        <div className="Thumbnail"> <img className="Card"  src={this.props.thumbnail} alt=""/> 
        </div>
       
        <div className="Description"> 
          <p>
            {this.props.description}
          </p>
          </div>
 


        <div class="input-field col s12">
          <i class="material-icons prefix">textsms</i>

          <input type="text" placeholder="Comment..." className="autocomplete"/>
        </div>
 
        <div className="CommentSectionWrapper"> 
         
          {/* <div className="Card Comment">
                <div>
                <Avatar facebookId={this.props.img} size="50" round={true} /> 
                </div>
 
                <div>
                {this.props.comments}
                </div>
 
                <div>
                  Reply
                </div>
          </div> */}
       
        </div>



      </div>
    )
  }
}


