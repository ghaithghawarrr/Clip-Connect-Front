import React, { Component } from 'react';


export default function Spacer(props) {
      const { height = 0, width = 0 } = props;
      return (
            <div style={{ height: height, width: width }}></div>
      );
}
