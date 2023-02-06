import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer py-4 bg-purple'>
        <div className='container'>
            <div className='footer-content text-white text-center'>
                <p className='copyright-text font-rubik fw-4 ls-1'>©2022 CopyRight Example. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer