import React from "react";
import "./Sportsdetail.css";

function FBL() {
  return (
    <div>
      <div class="sports">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6 col-md-6">
              <div class="sports-main">
                <img src="/images/Bao/assets/Sports-image/FBL.svg" class="detail-image" />
                <h1 class="sports-title">FOOTBALL</h1>
              </div>
            </div>
            <div class="col-6 col-md-6">
              <div class="sports-side">
                <div class="sports-info">Olympic Debut</div>
                <div class="sports-info">Paris 1900</div>
                <div class="sports-info">Most Gold Medals</div>
                <div class="sports-info">USA</div>
              </div>
            </div>
            <br />
            <div class="col-5 col-md-5">
              <div class="sports-history">
                <h1>HISTORY OF</h1>
                FOOTBALL
              </div>
            </div>
            <div class="col-7 col-md-7">
              <div class="sports-detail">
                <h2>What is Football?</h2>
                Football is the most popular sport in the world and sees
                opposing teams of 11 players try to score goals primarily by use
                of the feet.
                <br />
                <br />
                <h2>By whom, where and when was Football invented?</h2>
                Football has its roots in ancient China while the modern version
                of the game began on the streets of medieval England.
                Neighbouring towns would play each other in games where a
                heaving mass of players would struggle to drag a pig’s bladder
                by any means possible to markers at either end of town.
                <br />
                <br />
                English football's governing body, the Football Association,
                codified the laws of the game in 1863.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FBL;
