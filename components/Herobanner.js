import React, { Component } from 'react';

class Herobanner extends Component {
  render() {
    return(
      <div className="herobanner">
        <h1 className="herobanner__heading">Þetta er herobanner</h1>
        <p className="herobanner__subtext">þetta er aukatexti</p>
        <div className="herobanner__image__container">
          <div></div>
        </div>
      </div>
    );
  }
}

export default Herobanner;
