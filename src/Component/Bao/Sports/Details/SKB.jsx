import React from "react";
import "./Sportsdetail.css";

function SKB() {
  return (
    <div>
      <div class="sports">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6 col-md-6">
              <div class="sports-main">
                <img src="/images/Bao/assets/Sports-image/SKB.svg" class="detail-image" />
                <h1 class="sports-title">SKATEBOARDING</h1>
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
                SKATEBOARDING
              </div>
            </div>
            <div class="col-7 col-md-7">
              <div class="sports-detail">
                <h2>What is Skateboarding?</h2>
                Skateboarding is a sport and recreational activity that entails
                riding and performing tricks on a skateboard.
                <br />
                <br />
                Riders stand on a flat wooden board, comprised of a deck, truck
                and wheels, and a combination of momentum and footwork to
                execute tricks.
                <br />
                <br />
                <h2>By whom, where and when was Skateboarding invented?</h2>
                Skateboarding first originated in 1950s California in the United
                States when surfers, looking for something to do when the waves
                were flat, attached roller skates to their boards.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SKB;
