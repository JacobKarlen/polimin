import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { Link } from "react-router-dom";
const styles = {
  root: {
    flexGrow: 1,
  },
}

class IconLabelTabs extends React.Component {
  state = {
    value: "kontakt",
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentWillMount() {

    let urlPath = window.location.pathname;
    let currentTab = urlPath.split("/").pop();

    if (currentTab == "") {
      currentTab = "produkter";
    }

    //console.log(currentTab);
    this.setState({ value: currentTab });
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper style={{ width: "100%" }} className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >
        
          <Tab icon={<ShoppingCartIcon />} value="produkter" label="PRODUKTER" component={Link} to="/produkter" />
        
          <Tab icon={<PhoneIcon />} value="kontakt" label="KONTAKTA OSS" component={Link} to="/kontakt" />

          <Tab icon={<PersonPinIcon />} value="om-oss" label="OM OSS" component={Link} to="/om-oss" />
         
        </Tabs>
      </Paper>
    );
  }
}

IconLabelTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelTabs);