import React from "react";
import "./Sportsdetail.css";

function BOX() {
  return (
    <div>
      <div class="sports">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6 col-md-6">
              <div class="sports-main">
                <img src="/images/Bao/assets/Sports-image/box.svg" class="detail-image" />
                <h1 class="sports-title">BOXING</h1>
              </div>
            </div>
            <div class="col-6 col-md-6">
              <div class="sports-side">
                <div class="sports-info">Olympic Debut</div>
                <div class="sports-info">St Louis 1904</div>
                <div class="sports-info">Most Gold Medals</div>
                <div class="sports-info">
                  László Papp (HUN), Teofilo Stevenson (CUB), Felix Savon (CUB)
                </div>
              </div>
            </div>
            <br />
            <div class="col-5 col-md-5">
              <div class="sports-history">
                <h1>HISTORY OF</h1>
                BOXING
              </div>
            </div>
            <div class="col-7 col-md-7">
              <div class="sports-detail">
                <h2>What is BOXING?</h2>
                Boxing is a form of hand-to-hand unarmed combat where one
                athlete attempts to land punches on the head or body (above
                waist-height) of the opponent to score points - as decided by
                judges - or render said opponent unable to continue.
                <br />
                <br />
                <h2>By whom, where and when was BOXING invented?</h2>
                While the earliest evidence of boxing dates back to Ancient
                Egypt in around 3000 BC, it was not until the 16th century that
                'prizefighting' or bare-knuckle boxing began to spring up,
                largely in Great Britain.
                <br />
                <br />
                In 1867, the Marquess of Queensberry rules were published which
                codified boxing for the first time and mandated the use of
                boxing gloves.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BOX;
