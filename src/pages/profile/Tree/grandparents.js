import React from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import LeftNav from '../../../components/LeftNav';
import InfoCard from '../../../components/Infocard';
import TreeItem from '../../../components/TreeItem';
import Pageheader from '../../../components/PageHeader';
import TreeBranchGroup from '../../../components/TreeBranchGroup'; 



  export default class GrandparentsTree extends React.Component {

    
    state = {
        anchorEl: null,
        selectedIndex: 1,
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



    render() {
        const { anchorEl } = this.state;

      return (
        <div className="Wrapper"> 
        <div className="Grid_wrapper">
            <div className="Grid_2Col">
                <div className="Column_feed">
                    <TreeItem img="100008343750912" name="Adam Donatelli" location="St. Petersburg" bornYear="1983"/>
                    <LeftNav/>
                    <InfoCard 
                        location='St. Petersburg'
                        age='35'
                        education='University of Arizona'
                        bornIn="Hobbs,NM"
                        />
                </div>
            <div> 
                <div className="HeaderWrapper"> 
                <Pageheader text="Tree" icon="burst_mode" />
                <div>
                <List>
                    <a 
                    className="btn-floating teal darken-1"
                    aria-haspopup="true"
                            aria-controls="lock-menu"
                            // aria-label="When device is locked"
                            onClick={this.handleClickListItem}
                    >
                    <i className="material-icons">menu</i></a>
                </List>

                    <Menu  id="lock-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                        <MenuItem  selected={0 === this.state.selectedIndex} onClick={this.handleClose}> <Link to="/tree">Immediate Family</Link>  </MenuItem>
                        <MenuItem  selected={1 === this.state.selectedIndex} onClick={this.handleClose}> <Link to="/tree/grandparents">Granparents View</Link>  </MenuItem>
                        <MenuItem  selected={2 === this.state.selectedIndex} onClick={this.handleClose}> <Link to="/tree/familyHub">Family Hubs</Link>  </MenuItem>
                    </Menu>
                </div>

                </div>

               <div className="TreeBranchWrapper">
                
                <TreeBranchGroup title="Angelo Donatelli (Brother)"/>
                <TreeBranchGroup title="Greg and Victoria Donatelli (Mom & Dad)"/>

                </div>

            </div>
            
                </div>
            </div>
        </div>



        );
    }
}



