import React from 'react';

import "./article01.scss";

function Article01(){
  return(
    <>
      <div className='container article-container'>
        <div className="container-inner">
          <div className="row">
            <div className="col col-xl-6 col-sm-12">
              <div className="img-wrap">
                <img src="./imgs/link.png" alt="link" />
              </div>
              <div className="text-wrap">
                <div className="text-title">
                  <span>Using</span>
                </div>
                <div className="text-body">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className='text-link'>
                  <span>Learn More</span>
                </div>
              </div>
            </div>
            <div className="col col-xl-6 col-sm-12">
              <div className="img-wrap">
                <img src="./imgs/people.png" alt="people" />
              </div>
              <div className="text-wrap">
                <div className="text-title">
                  <span>Manage your account</span>
                </div>
                <div className="text-body">
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='text-link'>
                  <span>Learn More</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col col-xl-6 col-sm-12">
              <div className="img-wrap">
                <img src="./imgs/jigsaw.png" alt="puzzle" />
              </div>
              <div className="text-wrap">
                <div className="text-title">
                  <span>Manage organizations, teams, and projects</span>
                </div>
                <div className="text-body">
                  <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className='text-link'>
                  <span>Learn More</span>
                </div>
              </div>
            </div>
            <div className="col col-xl-6 col-sm-12">
              <div className="img-wrap">
                <img src="./imgs/money.png" alt="money" />
              </div>
              <div className="text-wrap">
                <div className="text-title">
                  <span>Manage billing</span>
                </div>
                <div className="text-body">
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className='text-link'>
                  <span>Learn More</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col col-xl-6 col-sm-12">
              <div className="img-wrap">
                <img src="./imgs/key.png" alt="key" />
              </div>
              <div className="text-wrap">
                <div className="text-title">
                  <span>Authenticate</span>
                </div>
                <div className="text-body">
                  <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
                <div className='text-link'>
                  <span>Learn More</span>
                </div>
              </div>
            </div>
            <div className="col col-xl-6 col-sm-12">
              <div className="img-wrap">
                <img src="./imgs/comments.png" alt="comments" />
              </div>
              <div className="text-wrap">
                <div className="text-title">
                  <span>Support</span>
                </div>
                <div className="text-body">
                  <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                </div>
                <div className='text-link'>
                  <span>Learn More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Article01;