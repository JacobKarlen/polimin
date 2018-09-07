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
import { Link } from "react-router-dom";

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
    textAlign: "left",
    paddingLeft: "16px"
  },
  width: "100%",
  button: {
    marginTop: "10px",
  },
  content: {
    textAlign: "left"
  },
  socialIcon: {
    paddingLeft: "32px",
    paddingRight: "32px",
    width: "100%",
    fontSize: "x-large",
    textDecoration: "none",
    color: "black",
    marginBottom: "8px",
    "&:hover": {
      textDecoration: "none"
    }

  },
});

class ContactPage extends React.Component {

  state = {
    name: "",
    email: "",
    message: ""
  };

  change = e => {
    //this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });


  };

  onSubmit = e => {
    e.preventDefault();

    this.setState({
      name: "",
      email: "",
      message: ""
    });
  }
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>

          <Grid item xs={12}>
            <Paper className={classes.root} elevation={1}>
              <Typography gutterBottom variant="headline" component="h2">
                Kontakta oss via Telefon
              </Typography>
              <Typography component="div" className={classes.contentWrapper}>
                <h5>John Doe, Projektutvecklare - 076 039 30 01</h5>
                <h5>Jane Doe, Teknisk rådgivare - 076 032 38 01</h5>
              </Typography>
            </Paper>  
            </Grid>

            <Grid item xs={12}>
            <Paper className={classes.root} elevation={1}>
              <Typography gutterBottom variant="headline" component="h2">
                Kontakta oss via E-mail
              </Typography>
              <Typography component="div" className={classes.contentWrapper}>
                <div className="content">
                  <form>
                    <TextField
                      name="name"
                      label="Namn"
                      value={this.state.name}
                      fullWidth={true}
                      onChange={e => this.change(e)}
                    />
                    <br />

                     <TextField
                      name="email"
                      label="E-mail"
                      value={this.state.email}
                      fullWidth={true}
                      onChange={e => this.change(e)}
                    />
                    <br />

                    <TextField
                      name="message"
                      label="Meddelande"
                      value={this.state.message}
                      fullWidth={true}
                      onChange={e => this.change(e)}
                      multiline={true}
                    />
                    <br />

                  </form>

                  <Button variant="contained" color="primary" onClick={e => this.onSubmit(e)} className={classes.button}>
                    Skicka
                  </Button>
                </div>
              </Typography>
          </Paper>  
        </Grid>

        <Grid item xs={12}>
            <Paper className={classes.root} elevation={1}>
              <Typography gutterBottom variant="headline" component="h2">
                Kontakta oss via sociala medier
              </Typography>
              <Typography component="div" className={classes.contentWrapper}>
                <a className={classes.socialIcon}  href="http://www.facebook.com">
                  <img hspace="20" className="socialIcon" src="./../../images/facebook-icon.png" alt="facebook icon" />
                  <span>Facebook</span>
                </a>
                <a className={classes.socialIcon} href="http://www.instagram.com">
                  <img hspace="20" className="classes.socialIcon" src="./../../images/instagram-icon.png" alt="instagram icon" /> 
                  <span>Instagram</span>
                </a>
              </Typography>
            </Paper>  
            </Grid>
      </React.Fragment>
    );
  }
}

ContactPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactPage);
