import React from "react";
import "./Sportsdetail.css";

function KTE() {
  return (
    <div>
      <div class="sports">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6 col-md-6">
              <div class="sports-main">
                <img src="/images/Bao/assets/Sports-image/KTE.svg" class="detail-image" />
                <h1 class="sports-title">KARATE</h1>
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
                KARATE
              </div>
            </div>
            <div class="col-7 col-md-7">
              <div class="sports-detail">
                <h2>What is Karate?</h2>
                Karate is a Japanese martial art that uses striking techniques
                with hands, feet, elbows, and knees, as well as blocking and
                grappling, to develop physical and mental discipline.
                <br />
                <br />
                <h2>By whom, where and when was Karate invented?</h2>
                Karate is an ancient discipline with the roots of its current
                form originating on the Japanese island of Okinawa during the
                Ryukyu Dynasty, which was established in the 15th century.
                <br />
                <br />
                It became popular across Japan in the 1920s and expanded
                internationally following World War II.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KTE;
