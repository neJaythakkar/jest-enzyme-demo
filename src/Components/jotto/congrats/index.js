import React from "react";
import PropTypes from 'prop-types';

const Congrats = (props) => {
  const { success } = props;
  return success ? (
    <div className="congrats-wrapper" data-test="jotto-congrats-component">
      <h3
        className="congrats-message"
        data-test="jotto-congrats-component-congrats-message"
      >
        congrats! you guessed the secret word...
      </h3>
    </div>
  ) : null;
};

Congrats.propTypes = {
    success : PropTypes.bool.isRequired
}

export default Congrats;