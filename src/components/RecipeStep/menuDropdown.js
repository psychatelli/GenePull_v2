import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

class MenuDropdown extends React.Component {

// const MenuDropdown = ({ name, value, error, info, onChange, options }) => {
    
   
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


        return (
        <div> 
                <div> 
                    <a  aria-haspopup="true" aria-controls="lock-menu" onClick={this.handleClickListItem}>
                    <i className="material-icons">more_horiz</i></a>
                    <Menu  id="lock-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                        <MenuItem  selected={1 === this.state.selectedIndex} onClick={this.handleClose}> <Link to="/tree/grandparents">Remove Image</Link>  </MenuItem>
                        <MenuItem  selected={2 === this.state.selectedIndex} onClick={this.handleClose}> <Link to="/tree/familyHub">Delete Step</Link>  </MenuItem>
                        {/* <MenuItem  selected={3 === this.state.selectedIndex} onClick={this.handleClose}> <Link to="/tree/familyHub">Delete Step</Link>  </MenuItem> */}
                    </Menu>
                </div>
        </div>
    );
  }
}


  MenuDropdown.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
  };
  
  export default MenuDropdown;