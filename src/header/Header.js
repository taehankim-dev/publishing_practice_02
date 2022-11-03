import React, { useEffect } from 'react';
import { useState } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faBars} from '@fortawesome/free-solid-svg-icons';


import './header.scss';

function Header(){
  const [pageWidth, setPageWidth] = useState(document.body.offsetWidth);

  const handleResize = () => {
    setPageWidth(document.body.offsetWidth);
  }

  useEffect(()=> {
    window.addEventListener("resize", handleResize)
    return() => {
      window.addEventListener("resize",handleResize)
    }
  },[]);


  return(
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-logo">
            <div className='topbar-logo-link'>
              <span>Sample</span>
            </div>
            <div className="topbar-logo-line"></div>
            <div className='topbar-logo-subtitle'>
              <span>Help Center</span>
            </div>
          </div>
          {
            pageWidth > 1024 
            ? 
            <div className="topbar-controls">
              <div className="topbar-controls-request">
                <button className="topbar-controls-btn">Submit a request</button>
              </div>
              <div className="topbar-controls-signIn">
                <button  className="topbar-controls-btn">Sign In</button>
              </div>
            </div>
            :
            <div className="topbar-controls">
              <div className="topbar-controls-sm topbar-controls-search">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <div className="topbar-controls-sm topbar-controls-bars">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
          }
          
        </div>
      </div>
    </>
  )
}

export default Header;