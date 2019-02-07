import React, { Component } from 'react';
import button from '@material-ui/core';
import EditableInput from "../common/editableInput";

const TargetDetails = (props) => {
  return(
    <div>
       <div className="TargetDetails">  
        <div> 
          <h3>{props.title}</h3>
        </div>

        <div className="Thumbnail"> 
          <img className="Card"  src={props.thumbnail} alt=""/> 
        </div>
       

      <div className="Description"> 
         
          <EditableInput {...props}/>
      </div>
 
        <div className="input-field col s12">
          <form onSubmit={props.handleCommentSubmit}>
          <i className="material-icons prefix">textsms</i>
          <input type="text" placeholder="Comment..." className="autocomplete" value={props.newComment} onChange={props.handleCommentSubmitChange}/>
          </form>
        </div>

      </div>
    </div>
  )
}


export default TargetDetails;