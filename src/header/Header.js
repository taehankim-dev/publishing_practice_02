import React from "react";

import './header.scss'

function header(){
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
          <div className="topbar-controls">
            <div className="topbar-controls-request">
              <button className="topbar-controls-btn">Submit a request</button>
            </div>
            <div className="topbar-controls-signIn">
              <button  className="topbar-controls-btn">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default header;