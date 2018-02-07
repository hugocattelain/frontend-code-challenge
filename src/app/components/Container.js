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
    //Selecting 10 elements in the middle of the list to avoid corrupted datas
    const adList = json.data.splice(110,10);
    this.setState({ advertisements : adList});
    // fetch('https://api.mcmakler.de/v1/advertisements')
    //   .then(Utils.checkStatus)
    //   .then(Utils.parseJSON);
  }

  render() {
    const advertisements = this.state.advertisements;

    return (
      <div className="container">
        <div className="row">
          {advertisements.map((advertisement, i) =>
            <div className="col-4" key={i}>
              <AdvertCard
                key={i}
                advertisement={advertisement}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Container;
