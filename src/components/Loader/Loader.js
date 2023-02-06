import React from 'react';
import { loader } from '../../utils/images';
import "./Loader.scss";

const Loader = () => {
  return (
    <div className='loader flex align-center justify-center my-5'>
        <img src = {loader} alt = "" />
    </div>
  )
}

export default Loader