import React, { Component } from 'react'
import Avatar from 'react-avatar';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import TargetDetails from '../../components/TargetDetails/profile';
import Menu_dropdown from '../common/menu_dropdown';

export default class ImgPostProfile extends Component {
       
     
        

    render() {
    // const { anchorEl } = this.state;
    const { post } = this.props;
    
    return (
      <div onClick={this.props.showDetails}>  
        <div className="imgPost Card"> 
            <div className="controls"> 
                <div>   
                  <Avatar facebookId={post.img} size="40" round={true} /> <span className="Name"> {post.name}</span>
                </div>

                <div> 
                    <Menu_dropdown />
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