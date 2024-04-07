import React, { Component } from 'react';

class TextField extends Component {
  render() {
    const { label, name, type, value, onChange } = this.props;

    return (
      <div className="form-outline mb-2">
        <label className="form-label xlabel" htmlFor={label}>{label}</label>
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className="form-control"
        />
      </div>
    );
  }
}

export default TextField;
