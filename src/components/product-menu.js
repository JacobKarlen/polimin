import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import AddIcon from '@material-ui/icons/Add';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class ProductMenu extends React.Component {
  state = { open1: false, open2: false };

  handleClick1 = () => {
    this.setState(state => ({ open1: !state.open1, 
    	open2: false,
    	open3: false }));

  };

  handleClick2 = () => {
  	this.setState(state => ({ open2: !state.open2, 
  		open1: false,
  		open3: false }));
  }

  handleClick3 = () => {
  	this.setState(state => ({ open3: !state.open3, 
  		open1: false,
  		open2: false }));

  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List
          component="nav"
          subheader={<ListSubheader component="div">Produkter</ListSubheader>}

        >
          

          <ListItem button onClick={this.handleClick1}>
            
            <ListItemText inset primary={"Kategori 1"} />
            {this.state.open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={this.state.open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>

              <Link to="/produkter/category1/product1">
            	  <ListItem button className={classes.nested}>
    	                <ListItemIcon>
    	                	<NoteAddIcon />
    	                </ListItemIcon>
    	                <ListItemText inset primary="Produkt 1" />
                </ListItem>
              </Link>

              <Link to="/produkter">
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <NoteAddIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Produkt 2" />
                </ListItem>
              </Link>

              <Link to="/produkter">
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <NoteAddIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Produkt 3" />
                </ListItem>
              </Link>

            </List>
          </Collapse>

          <ListItem button onClick={this.handleClick2}>
            
            <ListItemText inset primary="Kategori 2" />
            {this.state.open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={this.state.open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>

              <Link to="/produkter">
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <NoteAddIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Produkt 1" />
                </ListItem>
              </Link>

              <Link to="/produkter/category2/product2">
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <NoteAddIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Produkt 2" />
                </ListItem>
              </Link>

              <Link to="/produkter">
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                     <NoteAddIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Produkt 3" />
                </ListItem>
              </Link>

            </List>
          </Collapse>

          <ListItem button onClick={this.handleClick3}>
           
            <ListItemText inset primary="Kategori 3" />
            {this.state.open3 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={this.state.open3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>

              <Link to="/produkter">
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <NoteAddIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Produkt 1" />
                </ListItem>
              </Link>

              <Link to="/produkter">
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <NoteAddIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Produkt 2" />
                </ListItem>
              </Link>

              <Link to="/produkter">
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                   	<NoteAddIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Produkt 3" />
                </ListItem>
              </Link>

            </List>
          </Collapse>

        </List>
      </div>
    );
  }
}

ProductMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductMenu);