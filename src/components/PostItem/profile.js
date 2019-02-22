import React, { Component } from 'react'
import Avatar from 'react-avatar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
import { deletePost  } from '../../actions/postActions';
 


class PostItem extends Component {


    onDeletePost(id) {
        this.props.deletePost(id)

    }

    render() {
        const { postId, displayDetails, avatar, name, thumbnail, gallery, liked, findUserLike, deletePost } = this.props;


        return (

           
        <div onClick={displayDetails}> 
            <div className="imgPost Card"> 
            {/* <button 
            className="waves-effect waves-light btn" 
            onClick={this.onDeletePost.bind(this, postId)}> Delete 
            </button> */}

                <div className="controls"> 
                    <div>   
                        <Avatar facebookId={avatar} size="40" round={true} /> <span className="Name"> {name}</span>
                    </div>

                    <div> 
                        <i onClick={findUserLike} className="material-icons"> {liked ? 'favorite_border' : 'favorite'} </i> 
                        <i className="material-icons">redo</i>

                    </div>
                </div>

                    <div className="img_container">
                        <div className="gallery_indicator"> 
                            <span> <i className="material-icons"> {gallery ? 'collections' : ''} </i></span>
                        </div> 

                        <img src={thumbnail} alt=""/> 

                    </div>
                </div>
            </div>
 
        )
    }
}


    PostItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    gallery: PropTypes.bool.isRequired,
    deletePost: PropTypes.func.isRequired,
    displayDetails: PropTypes.func.isRequired,

    // liked: PropTypes.bool.isRequired,
    // postId: PropTypes.string.isRequired
    };



const mapStateToProps = state => ({

  });
  
  export default connect(mapStateToProps, { deletePost })(PostItem);