import React, { Fragment, Component } from 'react';
import { render } from 'react-dom';

class StorePicker extends Component {
  render() {
    return (
      <Fragment>
        <form className="store-selector">
          <h1>Please Enter Store Name</h1>
          <input
            type="text"
            required
            placeholder="Enter your store name"
            className="Store"
          />
          <input type="submit" />
        </form>
      </Fragment>
    );
  }
}
export default StorePicker;
