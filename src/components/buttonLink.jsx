import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ButtonLink extends Component {
      render() {
            const { type, name, onClick, disabled } = this.props;
            return (
                  <button
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        type={type}
                        onClick={type === 'button' ? onClick : null}
                        disabled={disabled}
                  >
                        {name}
                  </button>
            );
      }
}
