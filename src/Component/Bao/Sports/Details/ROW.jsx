import React from "react";
import "./Sportsdetail.css";

function ROW() {
  return (
    <div>
      <div class="sports">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6 col-md-6">
              <div class="sports-main">
                <img src="/images/Bao/assets/Sports-image/ROW.svg" class="detail-image" />
                <h1 class="sports-title">ROWING</h1>
              </div>
            </div>
            <div class="col-6 col-md-6">
              <div class="sports-side">
                <div class="sports-info">Olympic Debut</div>
                <div class="sports-info">Paris 1900</div>
                <div class="sports-info">Most Gold Medals</div>
                <div class="sports-info">Elisabeta Oleniuc-Lipă (ROU)</div>
              </div>
            </div>
            <br />
            <div class="col-5 col-md-5">
              <div class="sports-history">
                <h1>HISTORY OF</h1>
                ROWING
              </div>
            </div>
            <div class="col-7 col-md-7">
              <div class="sports-detail">
                <h2>What is Rowing?</h2>
                Rowing involves propelling a boat using oars fixed to the
                vessel. It differs from other disciplines in that rowers sit
                with their backs to the direction of movement, therefore
                crossing the finish line backwards.
                <br />
                <br />
                In the Olympics, rowers race against each other as individuals
                or in crews of two, four or eight.
                <br />
                <br />
                <h2>By whom, where and when was Rowing invented?</h2>
                Rowing was first used as a means of transport in ancient Egypt,
                Greece and Rome. As a sport, it probably began in England in the
                17th and early 18th centuries, with the Oxford-Cambridge
                university boat race in the United Kingdom, which was
                inaugurated in 1828.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ROW;
