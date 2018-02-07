import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardMedia, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import '../../styles/card.scss';


class AdvertCard extends Component {
  constructor(props){
    super(props);

    this.state={

    };
  }

  render(){
    const ad = this.props.advertisement;
    const thumbnail = ad.advertisementAssets.advertisementThumbnails.thumb_xs.url;
    //eslint-disable-next-line
    //console.log(thumbnail);
    return(
      <MuiThemeProvider>
        <Card className="card__container">
          <FlatButton className="card__button" label="Action1" />
          <CardMedia className="card__media">
            <img src={thumbnail} alt="" />
          </CardMedia>
          <CardText className="card__text-summary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          </CardText>
          <CardText className="card__text-location" color="#cecece">
            35764 Sinn / Fleisbach
          </CardText>
          <CardActions>
          <CardText className="card__text-price">
            1.954€
          </CardText>
          <CardText className="card__text-rooms">
            3 Zimmer
          </CardText>
          <CardText className="card__text-size">
            ab 35 m²
          </CardText>
          </CardActions>
        </Card>
      </MuiThemeProvider>
    );
  }
}

AdvertCard.propTypes = {
  advertisement: PropTypes.object.isRequired
};

export default AdvertCard;
