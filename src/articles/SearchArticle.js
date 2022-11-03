import React from 'react';
import "./searchArticle.scss";

function SearchArticle(){
  return(
    <>
      <div className="container">
        <div className="container-inner">
          <div className="title-wrap">
            <span>How can we help?</span>
          </div>
          <div className="search-wrap">
            <form>
              <input type="text" id="search" placeholder='Search'/>
              <label htmlFor="search"></label>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchArticle;