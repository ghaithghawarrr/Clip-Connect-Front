import React, { Component } from 'react';

class RadioList extends Component {
  render() {
    // Destructure the props for easier access
    const { info } = this.props;

    // Ensure that info and info.options are defined before mapping over them
    const options = info?.options || [];

    return (
      <div className="form-outline mb-4 form-check-inline">
        {/* Render the label for the radio list */}
        <div className="form-outline form-check-inline">
          <label className="form-label xlabel">{info?.name}</label>
        </div>
        {/* Render the radio inputs and labels */}
        {options.map((option, index) => (
          <div className="form-check form-check-inline" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id={`inlineRadio${index + 1}`}
              value={option}
            />
            <label className="form-check-label" htmlFor={`inlineRadio${index + 1}`}>{option}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default RadioList;
