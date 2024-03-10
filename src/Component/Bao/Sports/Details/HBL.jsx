import React from "react";
import "./Sportsdetail.css";

function HBL() {
  return (
    <div>
      <div class="sports">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6 col-md-6">
              <div class="sports-main">
                <img src="/images/Bao/assets/Sports-image/HBL.svg" class="detail-image" />
                <h1 class="sports-title">HANDBALL</h1>
              </div>
            </div>
            <div class="col-6 col-md-6">
              <div class="sports-side">
                <div class="sports-info">Olympic Debut</div>
                <div class="sports-info">Berlin 1936</div>
              </div>
            </div>
            <br />
            <div class="col-5 col-md-5">
              <div class="sports-history">
                <h1>HISTORY OF</h1>
                HANDBALL
              </div>
            </div>
            <div class="col-7 col-md-7">
              <div class="sports-detail">
                <h2>What is Handball?</h2>
                Handball is a fast-paced indoor game where opposing teams try to
                score by throwing a ball into a football-style goal with posts
                and a crossbar.
                <br />
                <br />
                <h2>By whom, where and when was Handball invented?</h2>
                Handball was first played towards the end of the 19th century in
                Scandinavia and Germany. 'Field handball' - an 11-a-side game
                played outdoors - was first recognised at the turn of the
                century, and G. Wallström introduced indoor handball to Sweden
                in 1910.
                <br />
                <br />
                Between 1938 and 1966, both forms of handball were played at
                separate World Championships with indoor handball gaining
                pre-eminence.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HBL;
