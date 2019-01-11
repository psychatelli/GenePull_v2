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


class InfoCardSkills extends Component {


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

      <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>  <i class="material-icons">card_giftcard</i> </Typography>
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

InfoCardSkills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoCardSkills);


