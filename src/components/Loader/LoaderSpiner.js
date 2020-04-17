import React from 'react';
import Loader from "react-loader-spinner";
import {LoaderSpinner} from './LoaderSpinerStyle';

const LoaderSpiner = () => {
    return(
      <LoaderSpinner>
        <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
        />
      </LoaderSpinner>
    );
}

export default LoaderSpiner;