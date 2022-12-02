import React, { Fragment, Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import './css/style.css';

class Apps extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Header />
        </div>
        <Order />
        <Inventory />
      </Fragment>
    );
  }
}

export default Apps;
