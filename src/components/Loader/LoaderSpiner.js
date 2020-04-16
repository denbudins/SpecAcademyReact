import React from 'react';
import Loader from "react-loader-spinner";
import '../Loader/LoaderSpiner.scss';

const LoaderSpiner = () => {
    return(
      <div className="spinner">
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
      />
    </div>
    );
}

export default LoaderSpiner;