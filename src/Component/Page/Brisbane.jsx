import React from 'react'
import { useEffect, useState } from 'react'

import axios from 'axios';
import data from '../Data/Parisports.json'

function Brisbane() {
    return (
      <div className='brisbane'>
          <div className="position-relative">
              <img className='img-fluid' src="images/brisbane.png" alt="" />
              <div className="border border-0">
                  <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center w-100">
                      <img className='img-fluid bg-white w-25' src="images/brisbane1.png" alt="" />
                  </div>
              </div>
          </div>
          <div className="p-info d-flex justify-content-around bg-black text-light container p-4">
                  <div className="info-1">
                      BRISBANE 2032
                  </div>
                  <div className="info-2">
                    23 July - 8 August
                  </div>
                  <div className="info-3">
                      3065 days
                  </div>
                  <div className='info-4'>
                      Australia
                  </div>
          </div>
          <div className="border container-fluid p-new">
            <div className="row row-cols-2 d-flex justify-content-center">
                <div className="col card w-50 mt-5 border border-0">
                    <div className="box">
                          <img className='img-fluid rounded' src="images/brisbane2.png" alt="..." />
                      </div>
                      <div className='card-caption lh-sm'>
                          <p className='fs-5 p-2'>Complaints about the public official: section 48A of the Crime and Corruption Act 2001</p>
                      </div>
                </div>
                <div className="col card w-25 mt-5 border border-0">
                    <div className="box">
                          <img className='img-fluid rounded' src="images/brisbane3.png" alt="..." />
                      </div>
                      <div className='card-caption lh-sm'>
                          <p className='fs-5 p-2'>Brisbane 2032 Olympic and Paralympic Games Organising Committee Strategic Plan | Press release</p>
                      </div>
                </div>
            </div>
              <div className="mb-5 row row-cols-3 d-flex justify-content-center p-new">
                  <div className="col card w-25 border border-0">
                      <div className="box">
                          <img className='img-fluid rounded' src="images/brisbane4.png" alt="..." />
                      </div>
                      <div className='card-caption lh-sm'>
                          <p className='fs-5 p-2'>Countdown Begins: Brisbane Celebrates Nine-Year Mark to 2032 Summer Olympics</p>
                      </div>
                  </div>
                  <div className="col card w-25 border border-0">
                      <div className='box'>
                          <img className='img-fluid rounded' src="images/brisbane5.png" alt="..." />
                      </div>
                      <div className='card-caption lh-sm'>
                          <p className='fs-5 p-2'>9 years to go to Brisbane 2032</p>
                      </div>
                  </div>
                  <div className="col card w-25 border border-0">
                      <div className="box">
                          <img className='img-fluid rounded' src="images/brisbane6.png" alt="..." />
                      </div>
                      <div className='card-caption lh-sm'>
                          <p className='fs-5 p-2'>Press release: Brisbane 2032 Legacy Planning Consultation Begins</p>
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
                              <p>{pro.nd111}</p>
                              <p>{pro.nd112}</p>
                              <p>{pro.nd113}</p>
                              <p>{pro.nd114}</p>
                              <p>{pro.nd115}</p>
                              <p>{pro.nd116}</p>
                              <p>{pro.nd117}</p>
                              <p>{pro.nd118}</p>
                              <p>{pro.nd119}</p>
                              <p>{pro.nd1110}</p>
                              <p>{pro.nd1111}</p>
                              <p>{pro.nd1112}</p>
                              <p>{pro.nd1113}</p>
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
                        <a href="/LA2028"><img className='img-fluid rounded' src="/images/la7.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }

export default Brisbane