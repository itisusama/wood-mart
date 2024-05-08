import React from "react";
import { FaEnvelope } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <>
      <div class="intro-header">
        <div class="newsletter-container" align="center">
          <div class="tab-content custom-tab-content" align="center">
            <div class="subscribe-panel">
              <h2>Newsletter!!!</h2>
              <p>Subscribe to our weekly Newsletter and stay tuned.</p>

              <form action="" method="post">
                <div class="col-md-4"></div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">
                     <FaEnvelope style={{fontSize: '50px', marginRight: '10px'}} />
                    </span>
                    <input
                      type="text"
                      class="form-control input-lg"
                      name="email"
                      id="email"
                      placeholder="Enter your Email"
                    />
                  </div>
                </div>
                <div class="col-md-4"></div>
                <br />
                <button class="btn btn-primary btn-lg">Subscribe Now!</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;