import React from "react";
import "./Sportsdetail.css";

function SWM() {
  return (
    <div>
      <div class="sports">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6 col-md-6">
              <div class="sports-main">
                <img src="/images/Bao/assets/Sports-image/SWM.svg" class="detail-image" />
                <h1 class="sports-title">SWIMMING</h1>
              </div>
            </div>
            <div class="col-6 col-md-6">
              <div class="sports-side">
                <div class="sports-info">Olympic Debut</div>
                <div class="sports-info">Tokyo 2020</div>
              </div>
            </div>
            <br />
            <div class="col-5 col-md-5">
              <div class="sports-history">
                <h1>HISTORY OF</h1>
                SWIMMING
              </div>
            </div>
            <div class="col-7 col-md-7">
              <div class="sports-detail">
                <h2>What is Swimming?</h2>
                Swimming at the Olympics is both an individual and team sport
                where competitors propel their bodies through water in either an
                outdoor or indoor swimming pool using one of the following
                strokes: Freestyle, backstroke, breaststroke, or butterfly.
                <br />
                <br />
                It is not to be confused with Marathon (open water) swimming, or
                artistic swimming at the Games, which are considered separate
                disciplines.
                <br />
                <br />
                <h2>By whom, where and when was Swimming invented?</h2>
                Prehistoric man learned to swim in order to cross rivers and
                lakes - we know this because cave paintings from the Stone Age
                depicting swimmers have been found in Egypt. Swimming was also
                referred to in Greek mythology.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SWM;
