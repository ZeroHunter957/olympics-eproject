import React from "react";
import "./Sportsdetail.css";

function HOC() {
  return (
    <div>
      <div class="sports">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6 col-md-6">
              <div class="sports-main">
                <img src="/images/Bao/assets/Sports-image/HOC.svg" class="detail-image" />
                <h1 class="sports-title">HOCKEY</h1>
              </div>
            </div>
            <div class="col-6 col-md-6">
              <div class="sports-side">
                <div class="sports-info">Olympic Debut</div>
                <div class="sports-info">London 1908</div>
                <div class="sports-info">Most Gold Medals</div>
                <div class="sports-info">IND</div>
              </div>
            </div>
            <br />
            <div class="col-5 col-md-5">
              <div class="sports-history">
                <h1>HISTORY OF</h1>
                HOCKEY
              </div>
            </div>
            <div class="col-7 col-md-7">
              <div class="sports-detail">
                <h2>What is Field Hockey?</h2>
                There are two types of hockey - field and ice. Field hockey,
                played at the Olympic Summer Games, takes place on an
                artificial-grass pitch where two teams of 11 - 10 infield
                players and one goalkeeper - compete against each other to score
                the most goals in the opposing side's net. Players use a stick
                with a rounded end to hit a hard ball, slightly larger than a
                tennis ball.
                <br />
                <br />
                <h2>By whom, where and when was Hockey invented?</h2>A form of
                hockey has been played in various guises for thousands of years
                - in Egypt (4,000 years ago), Ethiopia (1,000 BC), and Iran
                (2,000 BC). The Romans and Greeks, as well as the Aztecs, also
                played a version of the game but the modern game emerged in
                England in the mid-19th century.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HOC;
