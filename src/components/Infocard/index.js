import React, { Component } from 'react'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});


class InfoCard extends Component {


  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };


  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className="infoCard">

      <div >
      <ExpansionPanel className="Card" expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>        
            <div className='infoTitle'> <i className="material-icons">person</i>  </div>
          </Typography>
            <Typography className={classes.secondaryHeading}>About</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            <ul>
            <li><span className='label'> Location:</span> {this.props.location} </li>
            <li><span className='label'> Age:</span>{this.props.age}</li>
            <li><span className='label'> Education:</span> {this.props.education}</li>
            <li><span className='label'> Born In:</span> {this.props.bornIn}</li>
          </ul>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

         <ExpansionPanel className="Card" expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>  <i className="material-icons">card_giftcard</i> </Typography>
            <Typography className={classes.secondaryHeading}>Knowledge</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            <ul>
           <li>UX/UI</li>
           <li>Graphic Design</li>
           <li>Video Production</li>
           <li>Digital Marketing</li>
       </ul>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

      </div>

       
      </div>
    )
  }
}

InfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoCard);


