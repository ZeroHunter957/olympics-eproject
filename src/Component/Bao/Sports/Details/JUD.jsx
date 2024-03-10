import React from "react";
import "./Sportsdetail.css";

function JUD() {
  return (
    <div>
      <div class="sports">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6 col-md-6">
              <div class="sports-main">
                <img src="/images/Bao/assets/Sports-image/JUD.svg" class="detail-image" />
                <h1 class="sports-title">JUDO</h1>
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
                JUDO
              </div>
            </div>
            <div class="col-7 col-md-7">
              <div class="sports-detail">
                <h2>What is Judo?</h2>
                Judo is a Japanese martial art that focuses on throws and
                grappling techniques to subdue opponents, with an emphasis on
                physical fitness, mental discipline, and sportsmanship.
                <br />
                <br />
                <h2>By whom, where and when was Judo invented?</h2>
                Judo was invented by Jigoro Kano in Japan in 1882 as a safe and
                effective form of physical education and self-defence based on
                the principles of maximum efficiency and mutual benefit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JUD;
