import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

{/* takes an argument of content={jsx} */}

const styles = theme => ({
  root: {
    flexGrow: 1,
     ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "100%"
  },
  flex: {
    flex: 1
  },
  contentWrapper: {
    textAlign: "left"
  },
  width: "100%",
  button: {
    marginTop: "10px",
  },
  content: {
    textAlign: "left"
  }
});

class AboutPage extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
          <Grid item xs={12}>
            <Paper className={classes.root} elevation={1}>
              <Typography gutterBottom variant="headline" component="h2">
                Om oss
              </Typography>

              <Typography component="p">
            	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Typography>
              <br />
              <Typography component="p">
              	"Vi är ett företag verksamt inom byggsektorn som säljer olika byggmaterial som t.ex. ceasdmmas mkasdmaskdmaskmd kmdk maekdm akd kmeakd meak mdaksmd kaem kd"
              </Typography>
          </Paper>  
        </Grid>
      </React.Fragment>
    );
  }
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutPage);
