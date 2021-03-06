import React from "react";
import PropTypes from "prop-types";

const Header = ({ tagline }) => (
  <header className="top">
    <h1 className="farsiStyle">
      شکار
      <span className="ofThe">
        <span className="of"> تازه </span>
        <span className="of">هر</span>
      </span>
      روز
    </h1>
    <h3 className="tagline">
      <span> {tagline} </span>
    </h3>
  </header>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired
};

export default Header;
