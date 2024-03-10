import React, { useEffect, useState } from "react";
import "../Athletes/Athletes.css";
import AthleteData from "../Data/Athletes.json";

import { register } from "swiper/element/bundle";
register();

function Athletes() {
  var limitdata = AthleteData.slice(0, 24);

  return (
    <div className="container-fluid">
      <div className="Athletes">
        <h1>Athletes</h1>

        <div className="list-athletes">
          <div className="row">
            {limitdata.map((item) => (
              <div className="col-6 col-md-2">
                <div className="athlete-box">
                  <img src={item.image} className="athlete-image" />
                  <a
                    href={`/athletesdetail/${item.id}`}
                    className="athlete-title"
                  >
                    <br />
                    {item.name}
                    <br />
                    {item.sport}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />

        <div className="related-news">
          <h2>You may Like</h2>
          <swiper-container
            slides-per-view="3"
            speed="0"
            css-mode="true"
            navigation="true"
            loop="true"
          >
            <swiper-slide>
              <div className="related-box">
                <img
                  src="/images/Bao/assets/News/pdnafmzr8bqwylwczuli.webp"
                  className="related-image"
                />
                <a href="#" className="related-title">
                  Patrick Chan exclusive: On Uno Shoma's longevity, Ilia
                  Malinin's quad Axel, and his life after figure skating
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="related-box">
                <img
                  src="/images/Bao/assets/News/iedacru7tickbeyjmq5n.webp"
                  className="related-image"
                />
                <a href="#" className="related-title">
                  Swimming, World Championships Doha 2024: Tes Schouten upsets
                  Kate Douglass to claim women's 200m breaststroke world title
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="related-box">
                <img
                  src="/images/Bao/assets/News/oapgclbrpvqjunekwibe.webp"
                  className="related-image"
                />
                <a href="#" className="related-title">
                  Alpine ski World Cup 23/24: Lara Gut-Behrami wins home Crans
                  Montana Friday downhill on shortened course
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="related-box">
                <img
                  src="/images/Bao/assets/News/f9n1mb3wet43frlzity8.webp"
                  className="related-image"
                />
                <a href="#" className="related-title">
                  Engaged off the ice, Madison Chock and Evan Bates still loving
                  the process on it, too
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="related-box">
                <img
                  src="/images/Bao/assets/News/s9fduretg2w3mnxypvpx.webp"
                  className="related-image"
                />
                <a href="#" className="related-title">
                  Bernadette Szocs: How being positive is helping Romanian
                  paddler climb the rankings
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="related-box">
                <img
                  src="/images/Bao/assets/News/dhqw1wiguxzovc0ytfa4.jpg"
                  className="related-image"
                />
                <a href="#" className="related-title">
                  2024 ISA World Surfing Games: Get to know the waves that will
                  challenge the world's best surfers in the final opportunity to
                  secure Olympic quotas
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="related-box">
                <img
                  src="/images/Bao/assets/News/av9yiufgwekepyoqotkn.jpg"
                  className="related-image"
                />
                <a href="#" className="related-title">
                  Water polo, World Championships Doha 2024: U.S. women capture
                  eighth world title, edging Hungary in closely fought final
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="related-box">
                <img
                  src="/images/Bao/assets/News/n6otszcpc4u6f7xxbb90.webp"
                  className="related-image"
                />
                <a href="#" className="related-title">
                  Swimming, World Championships Doha 2024: People's Republic of
                  China hold on to claim men's 4x200m freestyle relay title
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="related-box">
                <img
                  src="./assets/News/gdwmejdbdjemb7lwedir.webp"
                  className="related-image"
                />
                <a href="#" className="related-title">
                  Olympic medallist Kanoa Igarashi on learning to love his
                  multicultural background: 'Always in my head, I felt like an
                  outsider'
                </a>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Athletes;
