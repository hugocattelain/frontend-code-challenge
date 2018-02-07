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
    const thumbnail = ad.advertisementAssets.advertisementThumbnails.inventory_m.url || ad.advertisementAssets.advertisementThumbnails.thumb_xs.url || '';

    return(
      <MuiThemeProvider>
        <Card className="card__container">
          <FlatButton className="card__button" label={ad.advertisementPrice.sellPrice ? 'Kaufen' : 'Mieten'} />
          <CardMedia className="card__media">
            <img src={thumbnail} alt="" />
          </CardMedia>
          <CardText className="card__text-summary">
            {ad.title.length > 55 ? ad.title.substring(0,55)+'-' : ad.title}
          </CardText>
          <CardText className="card__text-location" color="#cecece">
            {ad.realestateSummary.address.postalCode} {ad.realestateSummary.address.city} / {ad.realestateSummary.address.street}
          </CardText>
          <CardActions>
            <CardText className="card__text-price">
              {parseInt( ad.advertisementPrice.sellPrice ).toLocaleString() || parseInt( ad.advertisementPrice.baseRent ).toLocaleString()} €
            </CardText>
            <CardText className="card__text-size">
              ab {Math.round(ad.realestateSummary.space)} m²
            </CardText>
            <CardText className="card__text-rooms">
              {ad.realestateSummary.numberOfRooms} Zimmer
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
