import React from 'react'

import Data from "../Data/Pastgame.json"
import DataWinter from '../Data/Winter.json'
import DataSummer from '../Data/Summer.json'
import { useParams } from 'react-router-dom'

function Results() {
    const {id} = useParams();

  return (
    <div className='results'>
        <div className="card mb-3">
            <img src="/images/results.png" className="card-img-top" alt="..." />
            <div className="card-body position-absolute text-light container">
                <div className="row row-cols-2 justify-content-between m-5">
                    <h5 className="card-title col w-25 lh-1 ms-5 ps-5">OLYMPIC <br /> RESULTS</h5>
                    <p className="card-text col w-50 ms-5 ps-5 pt-3 ">Your source for event results and medalists from every Olympic Games.</p>
                </div>
            </div>
        </div>
        <div className='pastgames'>
        <h1>SELECT OLYMPIC GAMES</h1>

<ul class="nav nav-tabs row row-cols-3" id="myTab" role="tablist">
  <li class="nav-item col" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Olympic Games</button>
  </li>
  <li class="nav-item col" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Olympic Winter Games</button>
  </li>
  <li class="nav-item col" role="presentation">
    <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Olympic Summer Games</button>
  </li>
</ul>

<div class="tab-content">
  <div class="tab-pane active container" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
    {Data.map((item) => (
      <div className="container">
        <a href={`/category/${item.id}`}><div className="row align-items-center past-g">
          <div className="col-12 col-md-8 h1">{item.name}</div>
          <div className="col-6 col-md-4">{item.type}</div>
        </div></a>
      </div>))}
  </div>

  <div class="tab-pane border" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
      <div className="container">
        {DataWinter.map((item)=>(
          <a href={`/category/${item.id}`}><div className="row align-items-center past-g container">
            <div className="col-12 col-md-8 h1">{item.name}</div>
            <div className='col-6 col-md-4'>{item.type}</div>
          </div>
          </a>
        ))}
      </div>
  </div>

  <div class="tab-pane border" id="messages" role="tabpanel" aria-labelledby="messages-tab" tabindex="0">
  <div className="container">
        {DataSummer.map((item)=>(
          <a href={`/category/${item.id}`}><div className="row align-items-center past-g container">
            <div className="col-12 col-md-8 h1">{item.name}</div>
            <div className='col-6 col-md-4'>{item.type}</div>
          </div>
          </a>
        ))}
      </div>
  </div>

</div>
      </div>
      <div className='container-fluid'>
      <div className='Aroundthegame'>
        <h1 className='container'>AROUND THE GAMES</h1>
        <div className='noidung'>
          <div className='hang1'>
            <div className='card'>
              <img src="/images/around1.png" className='card-img-top' alt="" />
              <div className='card-body'>
                <h5 className='position-absolute top-0 start-0 card-title'>RESULTS</h5>
                <a href='/results' className='position-absolute bottom-0 end-0 btn btn-light'>Discover</a>
              </div>
            </div>
            <div className='card'>
              <img src="/images/around2.png" className='card-img-top' alt="" />
              <div className='card-body'>
                <h5 className='position-absolute top-0 start-0 card-title'>REPLAYS</h5>
                <a href="/replays" className='position-absolute bottom-0 end-0 btn btn-light'>Discover</a>
              </div>
            </div>
          </div>
          <div className="hang2">
            <div className="card">
              <img src="/images/around3.png" className='card-img-top' alt="" />
              <div className='card-body'>
                <h5 className='position-absolute top-0 start-0 card-title'>TORCHES</h5>
                <a href="/torches" className='position-absolute bottom-0 end-0 btn btn-light'>Discover</a>
              </div>
            </div>
            <div className="card">
              <img src="/images/around4.png" className='card-img-top' alt="" />
              <div className='card-body'>
                <h5 className='position-absolute top-0 start-0 card-title'>ANCIENT GAMES</h5>
                <a href="/ancientgames" className='position-absolute bottom-0 end-0 btn btn-light'>Discover</a>
              </div>
            </div>
          </div>
          <div className="hang3">
            <div className="card">
              <img src="/images/around5.png" className='card-img-top' alt="" />
              <div className='card-body'>
                <h5 className='position-absolute top-0 start-0 card-title'>MASCOTS</h5>
                <a href="/mascot" className='position-absolute bottom-0 end-0 btn btn-light'>Discover</a>
              </div>
            </div>
            <div className='card'>
              <img src="/images/around6.png" className='card-img-top' alt="" />
              <div className='card-body'>
                <h5 className='position-absolute top-0 start-0 card-title'>MEDAL <br/> DESIGN</h5>
                <a href="/medal" className='position-absolute bottom-0 end-0 btn btn-light'>Discover</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Results