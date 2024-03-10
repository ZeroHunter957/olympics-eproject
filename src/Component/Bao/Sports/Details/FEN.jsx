import React from "react";
import "./Sportsdetail.css";

function FEN() {
  return (
    <div>
      <div class="sports">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6 col-md-6">
              <div class="sports-main">
                <img src="/images/Bao/assets/Sports-image/FEN.svg" class="detail-image" />
                <h1 class="sports-title">FENCING</h1>
              </div>
            </div>
            <div class="col-6 col-md-6">
              <div class="sports-side">
                <div class="sports-info">Olympic Debut</div>
                <div class="sports-info">Athens 1896</div>
                <div class="sports-info">Most Gold Medals</div>
                <div class="sports-info">Aladár Gerevich (HUN)</div>
              </div>
            </div>
            <br />
            <div class="col-5 col-md-5">
              <div class="sports-history">
                <h1>HISTORY OF</h1>
                FENCING
              </div>
            </div>
            <div class="col-7 col-md-7">
              <div class="sports-detail">
                <h2>What is Fencing?</h2>
                Fencing is a combat sport in which two athletes use swords to
                attack and defend against one another with the aim of striking
                their opponent in order to score points.
                <br />
                <br />
                The three disciplines of modern fencing are the foil, the épée,
                and the sabre (also called saber). Each discipline uses a
                different kind of blade (which shares the same name) and has
                unique rules.
                <br />
                <br />
                <h2>By whom, where and when was Fencing invented?</h2>
                Evidence of sword fights goes back as far as Ancient Egypt in
                1190 BC with bouts and duels continuing until the 18th century.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FEN;
