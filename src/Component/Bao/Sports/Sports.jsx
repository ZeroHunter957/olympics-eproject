import React, { useState } from "react";
import "../Sports/Sports.css";

function Sports() {
  return (
    <div className="sports">
      <div className="container-fluid">
        <div className="list-sports">
          {/* # */}
          <div className="sports-box">
            <h2 className="sports-category">#</h2>
            <p className="two">
              <a href="3x3-basketball" className="sports-name">
                3x3 Basketball
              </a>
              <img
                src="/images/Bao/assets/Sports-image/bk3.svg"
                className="sports-image"
              />
            </p>
          </div>
          {/* E */}
          <div className="sports-box">
            <h2 className="sports-category">E</h2>
            <p className="two">
              <a href="/equestrian" className="sports-name">
                Equestrian
              </a>
              <img
                src="/images/Bao/assets/Sports-image/equ.svg"
                className="sports-image"
              />
            </p>
          </div>
          {/* N */}
          <div className="sports-box">
            <h2 className="sports-category">N</h2>
            <p className="two">
              <a href="#" className="sports-name">
                Nordic Combined
              </a>
              <img
                src="/images/Bao/assets/Sports-image/ncb.svg"
                className="sports-image"
              />
            </p>
          </div>
          {/* A */}
          <div className="sports-box">
            <h2 className="sports-category">A</h2>
            <p className="two">
              <a href="#" className="sports-name">
                Acrobatic Gymnastics
              </a>
              <img
                src="/images/Bao/assets/Sports-image/gac.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Alpine Skiing
              </a>
              <img
                src="/images/Bao/assets/Sports-image/alp.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="/archery" className="sports-name">
                Archery
              </a>
              <img
                src="/images/Bao/assets/Sports-image/arc.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="/artistic-gymnastics" className="sports-name">
                Artistic Gymnastics
              </a>
              <img
                src="/images/Bao/assets/Sports-image/gar.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Artistic Swimming
              </a>
              <img
                src="/images/Bao/assets/Sports-image/swa.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Athletics
              </a>
              <img
                src="/images/Bao/assets/Sports-image/ath.svg"
                className="sports-image"
              />
            </p>
          </div>
          {/* F */}
          <div className="sports-box">
            <h2 className="sports-category">F</h2>
            <p className="two">
              <a href="/fencing" className="sports-name">
                Fencing
              </a>
              <img
                src="/images/Bao/assets/Sports-image/fen.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Figure Skating
              </a>
              <img
                src="/images/Bao/assets/Sports-image/fsk.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Flag Football
              </a>
              <img
                src="/images/Bao/assets/Sports-image/flf.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="/football" className="sports-name">
                Football
              </a>
              <img
                src="/images/Bao/assets/Sports-image/fbl.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Freestyle Skiing
              </a>
              <img
                src="/images/Bao/assets/Sports-image/frs.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Futsal
              </a>
              <img
                src="/images/Bao/assets/Sports-image/fut.svg"
                className="sports-image"
              />
            </p>
          </div>
          {/* R */}
          <div className="sports-box">
            <h2 className="sports-category">R</h2>
            <p className="two">
              <a href="/rhythmic-gymnastics" className="sports-name">
                Rhythmic Gymnastics
              </a>
              <img
                src="/images/Bao/assets/Sports-image/gry.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Roller Speed Skating
              </a>
              <img
                src="/images/Bao/assets/Sports-image/rol.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="/rowing" className="sports-name">
                Rowing
              </a>
              <img
                src="/images/Bao/assets/Sports-image/row.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Rugby Sevens
              </a>
              <img
                src="/images/Bao/assets/Sports-image/ru7.svg"
                className="sports-image"
              />
            </p>
          </div>
          {/* B */}
          <div className="sports-box">
            <h2 className="sports-category">B</h2>
            <p className="two">
              <a href="/badminton" className="sports-name">
                Badminton
              </a>
              <img
                src="/images/Bao/assets/Sports-image/bdm.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Baseball Softball
              </a>
              <img
                src="/images/Bao/assets/Sports-image/bsb.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Basketball
              </a>
              <img
                src="/images/Bao/assets/Sports-image/bkb.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Beach Handball
              </a>
              <img
                src="/images/Bao/assets/Sports-image/hbb.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Beach Volleyball
              </a>
              <img
                src="/images/Bao/assets/Sports-image/vbv.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Biathlon
              </a>
              <img
                src="/images/Bao/assets/Sports-image/bth.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Bobsleigh
              </a>
              <img
                src="/images/Bao/assets/Sports-image/bob.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="/boxing" className="sports-name">
                Boxing
              </a>
              <img
                src="/images/Bao/assets/Sports-image/box.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Breaking
              </a>
              <img
                src="/images/Bao/assets/Sports-image/bkg.svg"
                className="sports-image"
              />
            </p>
          </div>
          {/* G */}
          <div className="sports-box">
            <h2 className="sports-category">G</h2>
            <p className="two">
              <a href="/golf" className="sports-name">
                Golf
              </a>
              <img
                src="/images/Bao/assets/Sports-image/glf.svg"
                className="sports-image"
              />
            </p>
          </div>
          {/* S */}
          <div className="sports-box">
            <h2 className="sports-category">S</h2>
            <p className="two">
              <a href="/sailing" className="sports-name">
                Sailing
              </a>
              <img
                src="/images/Bao/assets/Sports-image/sal.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="/shooting" className="sports-name">
                Shooting
              </a>
              <img
                src="/images/Bao/assets/Sports-image/sho.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Short Track Speed Skating
              </a>
              <img
                src="/images/Bao/assets/Sports-image/stk.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="/skateboarding" className="sports-name">
                Skateboarding
              </a>
              <img
                src="/images/Bao/assets/Sports-image/skb.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Skeleton
              </a>
              <img
                src="/images/Bao/assets/Sports-image/skn.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Ski Jumping
              </a>
              <img
                src="/images/Bao/assets/Sports-image/sjp.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Ski Mountaineering
              </a>
              <img
                src="/images/Bao/assets/Sports-image/smt.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Snowboard
              </a>
              <img
                src="/images/Bao/assets/Sports-image/sbd.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Speed Skating
              </a>
              <img
                src="/images/Bao/assets/Sports-image/ssk.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Sport Climbing
              </a>
              <img
                src="/images/Bao/assets/Sports-image/clb.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Squash
              </a>
              <img
                src="/images/Bao/assets/Sports-image/squ.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Surfing
              </a>
              <img
                src="/images/Bao/assets/Sports-image/srf.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="/swimming" className="sports-name">
                Swimming
              </a>
              <img
                src="/images/Bao/assets/Sports-image/swm.svg"
                className="sports-image"
              />
            </p>
          </div>
          {/* C */}
          <div className="sports-box">
            <h2 className="sports-category">C</h2>
            <p className="two">
              <a href="#" className="sports-name">
                Canoe Slalom
              </a>
              <img
                src="/images/Bao/assets/Sports-image/csl.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="/canoe-sprint" className="sports-name">
                Canoe Sprint
              </a>
              <img
                src="/images/Bao/assets/Sports-image/csp.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Cricket
              </a>
              <img
                src="/images/Bao/assets/Sports-image/ckt.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Cross-Country Skiing
              </a>
              <img
                src="/images/Bao/assets/Sports-image/ccs.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Curling
              </a>
              <img
                src="/images/Bao/assets/Sports-image/cur.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="/cycling-bmx-freestyle" className="sports-name">
                Cycling BMX Freestyle
              </a>
              <img
                src="/images/Bao/assets/Sports-image/bmf.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Cycling BMX Racing
              </a>
              <img
                src="/images/Bao/assets/Sports-image/bmx.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Cycling Mountain Bike
              </a>
              <img
                src="/images/Bao/assets/Sports-image/mtb.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Cycling Road
              </a>
              <img
                src="/images/Bao/assets/Sports-image/crd.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Cycling Track
              </a>
              <img
                src="/images/Bao/assets/Sports-image/ctr.svg"
                className="sports-image"
              />
            </p>
          </div>
          {/* H */}
          <div className="sports-box">
            <h2 className="sports-category">H</h2>
            <p className="two">
              <a href="/handball" className="sports-name">
                Handball
              </a>
              <img
                src="/images/Bao/assets/Sports-image/hbl.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="/hockey" className="sports-name">
                Hockey
              </a>
              <img
                src="/images/Bao/assets/Sports-image/hoc.svg"
                className="sports-image"
              />
            </p>
          </div>
          {/* T */}
          <div className="sports-box">
            <h2 className="sports-category">T</h2>
            <p className="two">
              <a href="/table-tennis" className="sports-name">
                Table Tennis
              </a>
              <img
                src="/images/Bao/assets/Sports-image/tte.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Taekwondo
              </a>
              <img
                src="/images/Bao/assets/Sports-image/tkw.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="/tennis" className="sports-name">
                Tennis
              </a>
              <img
                src="/images/Bao/assets/Sports-image/ten.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Trampoline
              </a>
              <img
                src="/images/Bao/assets/Sports-image/gtr.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Triathlon
              </a>
              <img
                src="/images/Bao/assets/Sports-image/tri.svg"
                className="sports-image"
              />
            </p>
          </div>
          {/* D */}
          <div className="sports-box">
            <h2 className="sports-category">D</h2>
            <p className="two">
              <a href="/diving" className="sports-name">
                Diving
              </a>
              <img
                src="/images/Bao/assets/Sports-image/div.svg"
                className="sports-image"
              />
            </p>
          </div>
          {/* I */}
          <div className="sports-box">
            <h2 className="sports-category">I</h2>
            <p className="two">
              <a href="#" className="sports-name">
                Ice Hockey
              </a>
              <img
                src="/images/Bao/assets/Sports-image/iho.svg"
                className="sports-image"
              />
            </p>
          </div>
          {/* V */}
          <div className="sports-box">
            <h2 className="sports-category">V</h2>
            <p className="two">
              <a href="/volleyball" className="sports-name">
                Volleyball
              </a>
              <img
                src="/images/Bao/assets/Sports-image/vvo.svg"
                className="sports-image"
              />
            </p>
          </div>
          <div></div>
          {/* J */}
          <div className="sports-box">
            <h2 className="sports-category">J</h2>
            <p className="two">
              <a href="/judo" className="sports-name">
                Judo
              </a>
              <img
                src="/images/Bao/assets/Sports-image/jud.svg"
                className="sports-image"
              />
            </p>
          </div>
          {/* W */}
          <div className="sports-box">
            <h2 className="sports-category">W</h2>
            <p className="two">
              <a href="/water-polo" className="sports-name">
                Water Polo
              </a>
              <img
                src="/images/Bao/assets/Sports-image/wpo.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="/weightlifting" className="sports-name">
                Weightlifting
              </a>
              <img
                src="/images/Bao/assets/Sports-image/wlf.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Wrestling
              </a>
              <img
                src="/images/Bao/assets/Sports-image/wre.svg"
                className="sports-image"
              />
            </p>
          </div>
          <div></div>
          {/* K */}
          <div className="sports-box">
            <h2 className="sports-category">K</h2>
            <p className="two">
              <a href="/karate" className="sports-name">
                Karate
              </a>
              <img
                src="/images/Bao/assets/Sports-image/kte.svg"
                className="sports-image"
              />
            </p>
          </div>
          <div></div>
          <div className="sports-box"></div>
          {/* L */}
          <div className="sports-box">
            <h2 className="sports-category">L</h2>
            <p className="two">
              <a href="#" className="sports-name">
                Lacrose
              </a>
              <img
                src="/images/Bao/assets/Sports-image/lax.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="#" className="sports-name">
                Luge
              </a>
              <img
                src="/images/Bao/assets/Sports-image/lug.svg"
                className="sports-image"
              />
            </p>
          </div>
          <div></div>
          <div></div>
          {/* M */}
          <div className="sports-box">
            <h2 className="sports-category">M</h2>
            <p className="two">
              <a href="/marathon-swimming" className="sports-name">
                Marathon Swimming
              </a>
              <img
                src="/images/Bao/assets/Sports-image/ows.svg"
                className="sports-image"
              />
            </p>
            <br />
            <p className="two">
              <a href="modern-pentathlon" className="sports-name">
                Modern Pentathlon
              </a>
              <img
                src="/images/Bao/assets/Sports-image/mpn.svg"
                className="sports-image"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sports;
