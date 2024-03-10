import React from "react";
import "./Sportsdetail.css";

function WLF() {
  return (
    <div>
      <div class="sports">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6 col-md-6">
              <div class="sports-main">
                <img src="/images/Bao/assets/Sports-image/WLF.svg" class="detail-image" />
                <h1 class="sports-title">WEIGHTLIFTING</h1>
              </div>
            </div>
            <div class="col-6 col-md-6">
              <div class="sports-side">
                <div class="sports-info">Olympic Debut</div>
                <div class="sports-info">Athens 1896</div>
                <div class="sports-info">Most Gold Medals</div>
                <div class="sports-info">Pyrros Dimas (GRE)</div>
              </div>
            </div>
            <br />
            <div class="col-5 col-md-5">
              <div class="sports-history">
                <h1>HISTORY OF</h1>
                WEIGHTLIFTING
              </div>
            </div>
            <div class="col-7 col-md-7">
              <div class="sports-detail">
                <h2>What is Weightlifting?</h2>
                Weightlifting is a sport where athletes lift barbells loaded
                with weights. Weightlifting tests the strength, power and
                technique of athletes.
                <br />
                <br />
                <h2>By whom, where and when was Weightlifting invented?</h2>
                Weightlifting has ancient origins. It was practised both by
                ancient Egyptian and Greek societies. It developed as an
                international sport primarily in the 19th century, and is one of
                the few sports to have featured at the first modern Olympic
                Games in Athens in 1896.
                <br />
                <br />
                At the beginning of the century, Austria, Germany and France
                were the most successful nations. However in the 1950s, the
                Soviet Union's weightlifters rose to prominence and stayed there
                until the 1990s, when China, Turkey, Greece and Iran catapulted
                to the lead. In the women's field, China has been dominant since
                the very beginning.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WLF;
