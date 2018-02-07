import React, { Component } from 'react';
//eslint-disable-next-line
import Utils from '../../utils/Utils';
import AdvertCard from './Card';


class Container extends Component {
  constructor(props){
    super(props);

    this.state = {
      advertisements: []
    };
  }

  componentDidMount(){
    const json = require('../../utils/data.json');
    this.setState({ advertisements : json.data});
    // fetch('../../utils/data.json')
    //   .then(Utils.checkStatus)
    //   .then(Utils.parseJSON);
  }

  render() {
    const advertisements = this.state.advertisements;
    //eslint-disable-next-line
    console.log(advertisements);
    return (
      //<div></div>
      //thumbnail={apartment.advertisementAssets[0].advertisementThumbnails.thumb_xs.url || ''}
      <div>

        {advertisements.map((advertisement, i) =>
          <AdvertCard
            key={i}
            advertisement={advertisement}
          />
        )}

      </div>
    );
  }
}

export default Container;
