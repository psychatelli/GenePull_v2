import React, { Component } from 'react'
import Avatar from 'react-avatar';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import TargetDetails from '../../components/TargetDetails/profile';
import Menu_dropdown from '../common/menu_dropdown';

const ImgPostProfile = ({showDetails, img, name, thumbnail}) => {


  return(
        <div onClick={showDetails}> 
            <div className="imgPost Card"> 
                <div className="controls"> 
                    <div>   
                    <Avatar facebookId={img} size="40" round={true} /> <span className="Name"> {name}</span>
                    </div>

                    <div> 
                        <Menu_dropdown/>
                    </div>
                </div>
                <div className="img_container">
                    <div className="gallery_indicator"> 
                    <i className="material-icons">collections</i>
                    </div> 
                    <img src={thumbnail} alt=""/> 
                </div>
            </div>
        </div>
        )
    }

    ImgPostProfile.propTypes = {
        showDetails: PropTypes.func.isRequired,
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
      };


export default ImgPostProfile;
