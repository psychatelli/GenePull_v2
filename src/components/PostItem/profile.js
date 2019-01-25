import React, { Component } from 'react'
import Avatar from 'react-avatar';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import TargetDetails from '../../../components/TargetDetails/profile';




export default class ImgPostProfile extends Component {

    state = {
        anchorEl: null,
        // selectedIndex: 0,
      };
    
      handleClickListItem = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleMenuItemClick = (event, index) => {
        this.setState({ selectedIndex: index, anchorEl: null });

        if(index == 1) {
            console.log("this is the firt one");
           
        }
      };
    
      handleClose = () => {
        this.setState({ anchorEl: null });
      };


      showDetails = () => {
          let Post = this.props.post
          console.log(Post.name, Post.img)
        }

  render() {
    const { anchorEl } = this.state;
    const { post } = this.props;

    return (
      <div> 
        <div onClick={this.showDetails} className="imgPost Card"> 
            <div className="controls"> 
                <div>   
                  <Avatar facebookId={post.img} size="40" round={true} /> <span className="Name"> {post.name}</span>
                </div>

                <div> 
                    <List>
                        <i class="material-icons">favorite_border</i> 
                        <a  aria-haspopup="true" aria-controls="lock-menu" onClick={this.handleClickListItem}>
                        <i className="material-icons">more_horiz</i></a>
                    </List>
 
                    <Menu  id="lock-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                        <MenuItem  selected={0 === this.state.selectedIndex} onClick={this.handleClose}> <Link to="/tree">Share</Link>  </MenuItem>
                        <MenuItem  selected={1 === this.state.selectedIndex} onClick={this.handleClose}> <Link to="/tree/grandparents">Edit</Link>  </MenuItem>
                        <MenuItem  selected={2 === this.state.selectedIndex} onClick={this.handleClose}> <Link to="/tree/familyHub">Hide From Timeline</Link>  </MenuItem>
                        <MenuItem  selected={3 === this.state.selectedIndex} onClick={this.handleClose}> <Link to="/tree/familyHub">Delete</Link>  </MenuItem>
                    </Menu>
                </div>
            </div>
            <div className="img_container">
                <div className="gallery_indicator"> 
                <i className="material-icons">collections</i>
                </div> 
                <img src={post.thumbnail} alt=""/> 
            </div>
        </div>
      </div>
    )
  }
}

ImgPostProfile.propTypes = {
    Posts: PropTypes.object.isRequired
  };   