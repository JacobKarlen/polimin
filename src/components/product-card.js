import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: "100%"

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
};

class ProductCard extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardMedia  
            className={classes.media}
            image={this.props.selectedProduct.image}
            title={this.props.selectedProduct.imageTitle}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {this.props.selectedProduct.headline}
            </Typography>
            <Typography component="p">
              {this.props.selectedProduct.text}
              
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium" color="primary">
              <CallIcon />
              <span style={{marginLeft: "10px"}}>
                Kontakta oss
              </span>
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  } 
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCard);