import React from "react";
import "./Sportsdetail.css";

function TTE() {
  return (
    <div>
      <div class="sports">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6 col-md-6">
              <div class="sports-main">
                <img src="/images/Bao/assets/Sports-image/TTE.svg" class="detail-image" />
                <h1 class="sports-title">TABLE TENNIS</h1>
              </div>
            </div>
            <div class="col-6 col-md-6">
              <div class="sports-side">
                <div class="sports-info">Olympic Debut</div>
                <div class="sports-info">Seoul 1988</div>
                <div class="sports-info">Most Gold Medals</div>
                <div class="sports-info">Ma Long (CHN)</div>
              </div>
            </div>
            <br />
            <div class="col-5 col-md-5">
              <div class="sports-history">
                <h1>HISTORY OF</h1>
                TABLE TENNIS
              </div>
            </div>
            <div class="col-7 col-md-7">
              <div class="sports-detail">
                <h2>What is Table Tennis?</h2>
                Table tennis is a racket-and-ball sport played between two
                players or doubles teams, similar to tennis but on a table as
                its name suggests.
                <br />
                <br />
                <h2>By whom, where and when was Table Tennis invented?</h2>
                It is thought that upper-class Victorians in England invented
                table tennis in the 1880s as a genteel, after-dinner alternative
                to lawn tennis, using whatever they could find as equipment. A
                line of books would often be the net, the rounded top of a
                champagne cork would be the ball and occasionally a cigar box
                lid would be a racket.
                <br />
                <br />
                In 1926, meetings were held in Berlin and London that led to the
                formation of the International Table Tennis Federation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TTE;
