import React, { Fragment, Component } from 'react';
import { render } from 'react-dom';

const Header = (props) => {
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
        <span>{props.tagline}</span>
      </h3>
    </header>
  </Fragment>;
};

// class Header extends Component {

//   render() {
//     return (
//       header()
//     );
//   }
// }
export default Header;
