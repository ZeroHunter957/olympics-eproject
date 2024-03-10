import React from "react";
import "./Sportsdetail.css";

function VVO() {
  return (
    <div>
      <div class="sports">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6 col-md-6">
              <div class="sports-main">
                <img src="/images/Bao/assets/Sports-image/VVO.svg" class="detail-image" />
                <h1 class="sports-title">VOLLEYBALL</h1>
              </div>
            </div>
            <div class="col-6 col-md-6">
              <div class="sports-side">
                <div class="sports-info">Olympic Debut</div>
                <div class="sports-info">Tokyo 1964</div>
              </div>
            </div>
            <br />
            <div class="col-5 col-md-5">
              <div class="sports-history">
                <h1>HISTORY OF</h1>
                VOLLEYBALL
              </div>
            </div>
            <div class="col-7 col-md-7">
              <div class="sports-detail">
                <h2>What is Volleyball?</h2>
                Volleyball is a sport played on a court by two teams of six
                players. The game was originally called “Mintonette”, a name
                derived from the game of badminton, because of its likeness to
                the sport.
                <br />
                <br />
                <h2>By whom, where and when was Volleyball invented?</h2>
                William G. Morgan, a YMCA physical education director and a
                student at Springfield College, is credited with creating the
                game of volleyball in 1895 in Holyoke, Massachusetts.
                <br />
                <br />
                Mintonette (as volleyball was called at the time) was designed
                to be an indoor pastime that could be enjoyed by older members
                of the YMCA, and took some of its characteristics from other
                sports including tennis and handball.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VVO;
