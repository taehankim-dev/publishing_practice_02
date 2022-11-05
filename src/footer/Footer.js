import React from "react";

import './footer.scss'

function Footer(){
  const abstractList = [
    {idx : 0, name : "Abstract", title : true},
    {idx : 1, name : "Start Trial"},
    {idx : 2, name : "Pricing"},
    {idx : 3, name : "Download"},
  ]

  const resourecesList = [
    {idx : 0, name : "Resources", title : true},
    {idx : 1, name : "Blog"},
    {idx : 2, name : "Help Center"},
    {idx : 3, name : "Release Notes"},
    {idx : 4, name : "Status"},
  ]

  const communityList = [
    {idx : 0, name : "Community", title : true},
    {idx : 1, name : "Twitter"},
    {idx : 2, name : "Linkedln"},
    {idx : 3, name : "Dribbble"},
    {idx : 4, name : "Podcast"},
  ]

  const companyList = [
    {idx : 0, name : "Company", title : true},
    {idx : 1, name : "About Us"},
    {idx : 2, name : "Careers"},
    {idx : 3, name : "Legal"},
    {idx : 4, name : ""},
    {idx : 5, name : "Contact Us", subTitle : true},
    {idx : 6, name : "abcd@abcd.com"},
  ]

  return(
    <>
      <div className="footer-container">
        <div className="footer-inner" id="footer-inner">
          <div className="row">
            <div className="col col-xl-9 col-sm-12">
              <div className="row">
                <div className="col col-xl-3 col-sm-6">
                  <div className="footer-list-wrap">
                    <ul className="footer-list">
                      {abstractList.map((e)=> (
                        e.title
                        ? 
                        <li className="footer-list-item footer-list-item-title" key={e.idx}>{e.name}</li>
                        :
                        <li className="footer-list-item" key={e.idx}>{e.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col col-xl-3 col-sm-6">
                  <div className="footer-list-wrap">
                    <ul className="footer-list">
                      {resourecesList.map((e)=> (
                        e.title
                        ? 
                        <li className="footer-list-item footer-list-item-title" key={e.idx}>{e.name}</li>
                        :
                        <li className="footer-list-item" key={e.idx}>{e.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col col-xl-3 col-sm-6">
                  <div className="footer-list-wrap">
                    <ul className="footer-list">
                      {communityList.map((e)=> (
                        e.title
                        ? 
                        <li className="footer-list-item footer-list-item-title" key={e.idx}>{e.name}</li>
                        :
                        <li className="footer-list-item" key={e.idx}>{e.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col col-xl-3 col-sm-6">
                  <div className="footer-list-wrap">
                    <ul className="footer-list">
                      {companyList.map((e)=> (
                        e.title
                        ? 
                        <li className="footer-list-item footer-list-item-title" key={e.idx}>{e.name}</li>
                        :
                          e.subTitle 
                          ?
                          <li className="footer-list-item footer-list-item-subTitle" key={e.idx}>{e.name}</li>
                          :
                          <li className="footer-list-item" key={e.idx}>{e.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-xl-3 col-sm-12">
              <div className="footer-list-wrap footer-list-copyRight">
                <ul className="footer-list">
                  <li className="footer-list-item">Sample</li>
                  <li className="footer-list-item">Copyright</li>
                  <li className="footer-list-item">Design, Inc.</li>
                  <li className="footer-list-item">All rights reserved</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-help-btn-wrap">
          <button>Help</button>
        </div>
      </div>
    </>
  )
}

export default Footer;