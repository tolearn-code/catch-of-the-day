import React, { Fragment, Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Seafood Daily" />
          </div>
          <Inventory />
          <Order />
        </div>
      </Fragment>
    );
  }
}

export default App;
