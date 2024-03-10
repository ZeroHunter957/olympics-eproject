import React from "react";
import "./Sportsdetail.css";

function GLF() {
  return (
    <div>
      <div class="sports">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6 col-md-6">
              <div class="sports-main">
                <img src="/images/Bao/assets/Sports-image/GLF.svg" class="detail-image" />
                <h1 class="sports-title">GOLF</h1>
              </div>
            </div>
            <div class="col-6 col-md-6">
              <div class="sports-side">
                <div class="sports-info">Olympic Debut</div>
                <div class="sports-info">Paris 1900</div>
                <div class="sports-info">Most Gold Medals</div>
                <div class="sports-info">Chandler Egan (USA)</div>
              </div>
            </div>
            <br />
            <div class="col-5 col-md-5">
              <div class="sports-history">
                <h1>HISTORY OF</h1>
                GOLF
              </div>
            </div>
            <div class="col-7 col-md-7">
              <div class="sports-detail">
                <h2>What is Golf?</h2>
                Golf is a sport where the idea is to hit a ball with a club from
                the tee into the hole in as few strokes as possible.
                <br />
                <br />
                <h2>By whom, where and when was Golf invented?</h2>
                Golf is believed to have been practised first in the Netherlands
                under the name “colf” or “kolven” and arrived in Britain in the
                15th century.
                <br />
                <br />
                Its first rules were established in the Scottish city of St.
                Andrews, long known as the home of golf, in 1754
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GLF;
