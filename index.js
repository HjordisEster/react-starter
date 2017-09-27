import React, { Component } from 'react';
import { render } from 'react-dom';

import Herobanner from './components/Herobanner';

import './scss/styles.scss';

export default class App extends Component {
  render() {
    return(
      <Herobanner />
    );
  }
}

render(
  <App />, document.getElementById('app')
)
