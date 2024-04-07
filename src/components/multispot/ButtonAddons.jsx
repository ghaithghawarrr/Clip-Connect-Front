import React, { Component } from 'react';

export default class ButtonAddons extends Component {
  render() {
    const { btntype, btnname, onClick, disabled, label, nptname, npttype, value, onChange } = this.props;

    return (
      <><label className="form-label xlabel" htmlFor={label}>{label}</label>
        <div className="input-group mb-3">
          <input name={nptname} type={npttype} value={value} onChange={onChange} className="form-control" />
          <button className="btn btn-dark" id="button-addon2" type={btntype} onClick={btntype === 'button' ? onClick : null} disabled={disabled}>{btnname}
          </button>
        </div>
      </>
    );
  }
}
