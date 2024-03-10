import React from 'react'
import { useEffect, useState } from 'react'

import axios from 'axios';
import data from '../Data/Parisports.json'

function Dakar() {
    return (
      <div className='dakar'>
          <div className="position-relative">
              <img className='img-fluid' src="/images/dakar8.png" alt="" />
              <div className="border border-0">
                  <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center w-100">
                      <img className='img-fluid bg-white w-25' src="/images/dakar9.png" alt="" />
                  </div>
              </div>
          </div>
          <div className="p-info d-flex justify-content-around bg-black text-light container p-4">
                  <div className="info-1">
                      DAKAR 2026
                  </div>
                  <div className="info-2">
                    31 October - 14 November
                  </div>
                  <div className="info-3">
                      974 days
                  </div>
                  <div className='info-4'>
                      Senegal
                  </div>
          </div>
          <div className="border container-fluid p-new">
              <div className="row row-cols-3 d-flex justify-content-center p-new">
                  <div className="col card w-25 m-3">
                      <div className="box">
                          <img className='img-fluid' src="images/dakar1.png" alt="..." />
                      </div>
                      <div className='card-caption lh-sm'>
                          <p className='fs-5 p-2'>Dakar 2026 unveils plans for the second edition of Dakar en Jeux</p>
                      </div>
                  </div>
                  <div className="col card w-25 m-3">
                      <div className='box'>
                          <img className='img-fluid' src="images/dakar2.png" alt="..." />
                      </div>
                      <div className='card-caption lh-sm'>
                          <p className='fs-5 p-2'>The spirit of Teranga: Why the sporting world will fall in love with Senegal at Dakar 2026</p>
                      </div>
                  </div>
                  <div className="col card w-25 m-3">
                      <div className="box">
                          <img className='img-fluid' src="images/dakar3.png" alt="..." />
                      </div>
                      <div className='card-caption lh-sm'>
                          <p className='fs-5 p-2'>Senegal to "showcase what Africa is made of" as first Dakar en Jeux festival builds excitement for the Youth Olympic Games 2026</p>
                      </div>
                  </div>
                  <div className="col card w-25 m-3">
                      <div className="box">
                          <img className='img-fluid' src="images/dakar4.png" alt="..." />
                      </div>
                      <div className='card-caption'>
                          <p className='fs-5 p-2'>Dakar 2026: The four sports making their Youth Olympic Games debut</p>
                      </div>
                  </div>
                  <div className="col card w-25 m-3">
                      <div className="box">
                          <img className='img-fluid' src="images/dakar5.png" alt="..." />
                      </div>
                      <div className='card-caption lh-sm'>
                          <p className='fs-5 p-2'>Dakar 2022 Youth Olympics to feature total gender equality</p>
                      </div>
                  </div>
                  <div className="col card w-25 m-3">
                      <div className="box">
                          <img className='img-fluid' src="images/dakar6.png" alt="..." />
                      </div>
                      <div className='card-caption lh-sm'>
                          <p className='fs-5 p-2'>Dakar 2026 shares its vision and new prospects at 2021 Global Sports Week</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className='Ab border'>
              <div className="row row-cols-2 m-5 d-flex justify-content-center">
                  <div className="title col w-25">ABOUT <br /> THE <br /> GAMES</div>
                  <div className="ct1 col">
                      {data.map((pro) => (
                          <table>
                              <p>{pro.nd71}</p>
                              <p>{pro.nd72}</p>
                              <p>{pro.nd73}</p>
                              <p>{pro.nd74}</p>
                          </table>
                      ))}
                  </div>
              </div>
          </div>
          <div className="olympics-f mb-5 pb-5">
            <h1 className='my-5 mx-5 ps-5'>Olympic Games</h1>
            <div className="container text-center">
                <div className="row row-cols-4">
                    <div className="card border border-0 col">
                        <a href="/paris2024"><img className='img-fluid rounded' src="/images/paris1.png" alt="" /></a>
                    </div>
                    <div className="card border border-0 col">
                        <a href="/milano2026"><img className='img-fluid rounded' src="/images/milano7.png" alt="" /></a>
                    </div>
                    <div className="card border border-0 col">
                        <a href="/LA2028"><img className='img-fluid rounded' src="/images/la7.png" alt="" /></a>
                    </div>
                    <div className="card border border-0 col">
                        <a href="/brisbane2032"><img className='img-fluid rounded' src="/images/brisbane7.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }

export default Dakar