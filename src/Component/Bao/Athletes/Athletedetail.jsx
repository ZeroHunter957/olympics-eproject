import React from "react";
import "../Athletes/Athletedetail.css";
import AthleteData from "../Data/Athletes.json";
import { useParams } from "react-router-dom";

function Athletedetail() {
  const { id } = useParams();

  var item = AthleteData.filter((item) => item.id == id);
  item = item[0];

  return (
    <div>
      <div className="container-fluid">
        <div className="Athletes">
          <div class="row">
            <div class="col-6 col-md-6">
              <div class="athletes-main">
                <img src={item.image} class="athletes-image" />
                <h1 class="athletes-title">{item.name}</h1>
              </div>
            </div>
            <div class="col-6 col-md-6">
              <div class="athletes-side">
                <div class="athletes-info">Olympic Medals</div>
                <div class="athletes-info">{item.medal}</div>
                <div class="athletes-info">Games Participated</div>
                <div class="athletes-info">{item.participation}</div>
                <div class="athletes-info">First Olympic Games</div>
                <div class="athletes-info">{item.firstgame}</div>
                <div class="athletes-info">Year Of Birth</div>
                <div class="athletes-info">{item.birthdate}</div>
              </div>
            </div>
            <br />
            <div class="col-5 col-md-5">
              <div class="athletes-history">
                <h1>BIOGRAPHY</h1>
              </div>
            </div>
            <div class="col-7 col-md-7">
              <div class="athletes-detail">{item.biography}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Athletedetail;
