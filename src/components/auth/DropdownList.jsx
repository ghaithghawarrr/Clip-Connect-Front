import React, { Component } from 'react';

export default class DropdownList extends Component {
  render() {
    const { onChange, selected, label, name } = this.props;
    const options = this.props.options || [];

    return (
      <div className="form-outline mb-2">
        <label className="form-label xlabel">{label}</label>
        <select name={name} className="form-select" value={selected} onChange={onChange}>
          {options.map((option, index) => (
            <option key={index} value={option.toLowerCase()}>{option}</option>
          ))}
        </select>
      </div>
    );
  }
}

