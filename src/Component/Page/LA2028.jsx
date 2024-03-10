import React from 'react'
import { useEffect, useState } from 'react'

import axios from 'axios';
import data from '../Data/Parisports.json'

function LA2028() {
    return (
      <div className='la'>
          <div className="position-relative">
              <img className='img-fluid' src="images/la.png" alt="" />
              <div className="border border-0">
                  <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center w-100">
                      <img className='img-fluid bg-white w-25' src="images/la1.png" alt="" />
                  </div>
              </div>
          </div>
          <div className="p-info d-flex justify-content-around bg-black text-light container p-4">
                  <div className="info-1">
                      LA 2028
                  </div>
                  <div className="info-2">
                    14 July - 30 July
                  </div>
                  <div className="info-3">
                      1596 days
                  </div>
                  <div className='info-4'>
                      United States of America
                  </div>
          </div>
          <div className="border container-fluid p-new">
            <div className="row row-cols-2 d-flex justify-content-center">
                <div className="col card w-50 mt-5 border border-0">
                <div className="box">
                          <img className='img-fluid rounded' src="images/la3.png" alt="..." />
                      </div>
                      <div className='card-caption lh-sm'>
                          <p className='fs-5 p-2'>Athletes, celebrities, artists: check out the LA28 logo creators!</p>
                      </div>
                </div>
                <div className="col card w-25 mt-5 border border-0">
                <div className="box">
                          <img className='img-fluid rounded' src="images/la5.png" alt="..." />
                      </div>
                      <div className='card-caption lh-sm'>
                          <p className='fs-5 p-2'>The LA Coliseum cauldron is lit ahead of 2028!</p>
                      </div>
                </div>
            </div>
              <div className="mb-5 row row-cols-3 d-flex justify-content-center p-new">
                  <div className="col card w-25 border border-0 rounded">
                      <div className="box">
                          <img className='img-fluid' src="images/la2.png" alt="..." />
                      </div>
                      <div className='card-caption lh-sm'>
                          <p className='fs-5 p-2'>Los Angeles 1932: California welcomes the world</p>
                      </div>
                  </div>
                  <div className="col card w-25 border border-0">
                      <div className='box'>
                          <img className='img-fluid rounded' src="images/la4.png" alt="..." />
                      </div>
                      <div className='card-caption lh-sm'>
                          <p className='fs-5 p-2'>Los Angeles 1984 Official Film | 16 Days of Glory</p>
                      </div>
                  </div>
                  <div className="col card w-25 border border-0">
                      <div className="box">
                          <img className='img-fluid rounded' src="images/la6.png" alt="..." />
                      </div>
                      <div className='card-caption lh-sm'>
                          <p className='fs-5 p-2'>Paris 2024 & Los Angeles 2028 Host City Election</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className='Ab border'>
              <div className="row row-cols-2 m-5 d-flex justify-content-center">
                  <div className="title col w-25">ABOUT <br /> THE <br /> GAMES</div>
                  <div className="ct col">
                      {data.map((pro) => (
                          <table>
                              <p className='h2'>{pro.td8}</p>
                              <p>{pro.nd81}</p>
                              <p>{pro.nd82}</p>
                              <p>{pro.nd83}</p>
                              <p>{pro.nd84}</p>
                              <p>{pro.nd85}</p>
                              <p>{pro.nd86}</p>
                              <p>{pro.nd87}</p>
                              <p>{pro.nd88}</p>
                              <p>{pro.nd89}</p>
                              <p className='h2'>{pro.td9}</p>
                              <p>{pro.nd91}</p>
                              <p>{pro.nd92}</p>
                              <p>{pro.nd93}</p>
                              <p>{pro.nd94}</p>
                              <p>{pro.nd95}</p>
                              <p className='h2'>{pro.td10}</p>
                              <p>{pro.nd101}</p>
                              <p>{pro.nd102}</p>
                              <p>{pro.nd103}</p>
                              <p>{pro.nd104}</p>
                              <p><i>{pro.nd105}</i></p>
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
                        <a href="/dakar2026"><img className='img-fluid rounded' src="/images/dakar7.png" alt="" /></a>
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

export default LA2028