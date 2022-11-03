import React from 'react';
import "../grid.scss";
import "./searchArticle.scss";

function searchArticle(){
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
              <label for="search"></label>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default searchArticle;