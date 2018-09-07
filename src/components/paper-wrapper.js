import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

{/* takes an argument of content={jsx} */}

const styles = theme => ({
  root: {
    flexGrow: 1,
     ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  flex: {
    flex: 1
  },
  copyright: {
    textAlign: "center"
  },
  width: "100%"
});

class PaperWrapper extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography component="p" className={classes.copyright}>
            {this.props.content}
          </Typography>
        </Paper>
      </div>
    );
  }
}

PaperWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperWrapper);