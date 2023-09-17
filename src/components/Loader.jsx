import React from 'react';
import {Watch } from 'react-loader-spinner';

const CustomLoader = () => (
  <div className="loader">
    <Watch type="ThreeDots" color="#00BFFF" height={80} width={80} />
  </div>
);

export default CustomLoader;