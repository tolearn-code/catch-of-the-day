import React, { Fragment, Component } from 'react';
import { render } from 'react-dom';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <header className="top">
          <h1>
            Catch
            <span className="ofThe">
              <span className="of">of</span>
              <span className="The">the</span>
            </span>
            Day
          </h1>
          <h3 className="tagline">
            <span>{this.props.tagline}</span>
          </h3>
        </header>
      </Fragment>
    );
  }
}
export default Header;
