import React from "react";
import "./Sportsdetail.css";

function MPN() {
  return (
    <div>
      <div class="sports">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6 col-md-6">
              <div class="sports-main">
                <img src="/images/Bao/assets/Sports-image/MPN.svg" class="detail-image" />
                <h1 class="sports-title">MODERN PENTATHLON</h1>
              </div>
            </div>
            <div class="col-6 col-md-6">
              <div class="sports-side">
                <div class="sports-info">Olympic Debut</div>
                <div class="sports-info">Stockholm 1912</div>
                <div class="sports-info">Most Gold Medals</div>
                <div class="sports-info">András Balczó (HUN)</div>
              </div>
            </div>
            <br />
            <div class="col-5 col-md-5">
              <div class="sports-history">
                <h1>HISTORY OF</h1>
                MODERN PENTATHLON
              </div>
            </div>
            <div class="col-7 col-md-7">
              <div class="sports-detail">
                <h2>What is Modern Pentathlon?</h2>
                Modern Pentathlon comprises five different disciplines:
                swimming, fencing, horse riding (show jumping), pistol shooting
                and running.
                <br />
                <br />
                The last two have been combined in recent Olympic Games what is
                known as the laser run.
                <br />
                <br />
                <h2>By whom, where and when was Modern Pentathlon invented?</h2>
                The original pentathlon - consisting of running, jumping,
                spear-throwing, discus and wrestling - was the climax of the
                Games in Ancient Greece. It held a position of unique importance
                with the winner ranked as 'Victor Ludorum'.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MPN;
