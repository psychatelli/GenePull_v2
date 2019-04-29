import React, { Component } from 'react'
import { connect } from 'react-redux';
import EditableInput from "../common/editableInput";
import { deletePost, showDetails } from '../../actions/postActions';
import Menu_dropdown from './menu_dropdown';

class TargetDetails extends Component {

  onDeletePost(id) {
    console.log(id)
    this.props.deletePost(id)

    this.props.showDetails(id + 1)
}

  render() {

    const { postId, title, thumbnail, newComment, handleCommentSubmitChange, handleCommentSubmit, description } = this.props;

      return (
        <div>
        <div className="TargetDetails">  
            <div className="spacebetween">
                <div>

                </div>

                <div>

                  <Menu_dropdown Delete={this.onDeletePost.bind(this, postId)}  />                  
                {/* <button 
                  className="waves-effect waves-light btn" 
                  onClick={this.onDeletePost.bind(this, postId)}> Delete 
                </button> */}
                </div>
            </div>
             
         <div> 
           <h3>{title}</h3>
         </div>
 
         <div className="Thumbnail"> 
           <img className="Card"  src={thumbnail} alt=""/> 
           
         </div>
        
 
       <div className="Description"> 
           {/* <EditableInput {...props}/> */}
           <EditableInput description={description}/>
       </div>
  
         <div className="input-field col s12">
           <form onSubmit={handleCommentSubmit}>
           <i className="material-icons prefix">textsms</i>
           <input type="text" placeholder="Comment..." className="autocomplete" value={newComment} onChange={handleCommentSubmitChange}/>
           </form>
         </div>
       </div>
     </div>
      )
  }
}



const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { deletePost, showDetails })(TargetDetails);