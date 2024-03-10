import React from "react";
import "./Sportsdetail.css";

function SHO() {
  return (
    <div>
      <div class="sports">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6 col-md-6">
              <div class="sports-main">
                <img src="/images/Bao/assets/Sports-image/SHO.svg" class="detail-image" />
                <h1 class="sports-title">SHOOTING</h1>
              </div>
            </div>
            <div class="col-6 col-md-6">
              <div class="sports-side">
                <div class="sports-info">Olympic Debut</div>
                <div class="sports-info">Athens 1896</div>
                <div class="sports-info">Most Gold Medals</div>
                <div class="sports-info">Carl Osburn (USA)</div>
              </div>
            </div>
            <br />
            <div class="col-5 col-md-5">
              <div class="sports-history">
                <h1>HISTORY OF</h1>
                SHOOTING
              </div>
            </div>
            <div class="col-7 col-md-7">
              <div class="sports-detail">
                <h2>What is Shooting?</h2>
                Sport shooting is the use of a firearm to hit a target with a
                bullet. These can be stationary targets or moving targets known
                as clays.
                <br />
                <br />
                <h2>By whom, where and when was Shooting invented?</h2>
                Shooting as a sport has been practised for hundreds of years in
                European countries, with some German shooting clubs dating back
                more than 500 years.
                <br />
                <br />
                The popularity of the sport grew in English-speaking countries
                with the formation of the National Rifle Association in 1859,
                which originally met in Wimbledon, London, and the National
                Rifle Association (USA) in 1871.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SHO;
