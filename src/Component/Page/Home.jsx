import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Data from "../Data/Pastgame.json"
import DataWinter from '../Data/Winter.json'
import DataSummer from '../Data/Summer.json'
import { useParams } from 'react-router-dom'

function Home() {
  const { id } = useParams();

  return (
    <div className='home'>
      <div className="container-md">
      <div className='row justify-content-md-center first'>
        <div className="col">
          <h1>OLYMPIC <br/> GAMES</h1>
        </div>
        <div className="col-md-7">
          <h2>The Olympic Games are the world's only truly global, multi-sport, celebratory athletics competition. With more than 200 countries participating in over 400 events across the Summer and Winter Games, the Olympics are where the world comes to compete, feel inspired, and be together.</h2>
        </div>
      </div>
      </div>
      <div className="container" id='futuregame'>
        <h3>Future Games</h3>
      </div>
      <div className='sliders'>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div id="carouselExampleIndicators" class="carousel slide">
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner">
          <a href="/paris2024"><div class="carousel-item active">
            <img src="/images/paris2.png" class="d-block w-100" alt="..." />
            <div className="position-absolute top-50 start-50 translate-middle w-100 h-auto row container carousel-caption">
              <div className="col-6 chu">
                <p className='lh-1 text-start'><h1>26 july -11 august</h1> PARIS <br/> 2024</p>
              </div>
              <div className='col-6 anh'>
                <img className='bg-light img-fluid d-block w-50' src="/images/paris.png" alt="" />
              </div>
            </div>
          </div></a>
          <a href="/milano2026"><div class="carousel-item">
            <img src="/images/milano8.png" class="d-block w-100" alt="..." />
          </div></a>
          <a href="/dakar2026"><div class="carousel-item">
            <img src="/images/dakar8.png" class="d-block w-100" alt="..." />
            <div className="carousel-caption position-absolute top-50 start-50 translate-middle w-100 d-flex justify-content-center align-items-center">
              <div className="container anhgame">
                <img className='img-fluid w-25' src="/images/dakar9.png" alt="" />
              </div>
            </div>
          </div></a>
          <a href="/LA2028"><div class="carousel-item">
            <img src="/images/la.png" class="d-block w-100" alt="..." />
            <div className="carousel-caption position-absolute top-50 start-50 translate-middle w-100 d-flex justify-content-center align-items-center">
              <div className="container anhgame">
                <img className='bg-white img-fluid w-25' src="/images/la1.png" alt="" />
              </div>
            </div>
          </div></a>
          <a href="/brisbane2032"><div class="carousel-item">
            <img src="/images/brisbane8.png" class="d-block w-100" alt="..." />
            <div className="carousel-caption position-absolute top-50 start-50 translate-middle w-100 d-flex justify-content-center align-items-center">
              <div className='container anhgame'>
                <img className='bg-white img-fluid w-25' src="/images/brisbane9.png" alt="" />
              </div>
            </div>
          </div></a>
        </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
      </div>
      </div>
      </div>
      </div>
      <div className='container-fluid'>
      <div className='row khampha'>
        <div className='khung1'>
          <img className='' src="/images/khampha1.png" alt="" /><br/>
          <a href="/milano2026"><button type='button'> Milano Cortina 2026  <FontAwesomeIcon className='icon2' icon={faArrowRight} /></button></a>
        </div>
        <div className='khung2'>
          <img src="/images/khampha3.png" alt="" /><br/>
          <a href="/LA2028"><button type='button'>LA 2028<FontAwesomeIcon className='icon2' icon={faArrowRight} /></button></a>
        </div>
        <div className='khung3'>
          <img src="/images/khampha2.png" alt="" /><br/>
          <a href="/brisbane2032"><button type='button'>Brisbane 2032  <FontAwesomeIcon className='icon2' icon={faArrowRight} /></button></a>
        </div>
      </div>
      </div>
      <div className='container-fluid'>
      <div className='Aroundthegame' id='aroundthegame'>
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
                <a href="/acientgames" className='position-absolute bottom-0 end-0 btn btn-light'>Discover</a>
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
      <div className='pastgames' id='pastgame'>
        <h1>PAST GAMES</h1>

<ul class="nav nav-tabs row row-cols-3" id="myTab" role="tablist">
  <li class="nav-item col" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Past Games</button>
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
      <div className="container home-more">
        <div className="row">
          <div className="info border-end col">
            <h1>YOUTH OLYMPIC GAMES</h1>
            <p>The Youth Olympic Games are an international sports, cultural, and educational event for talented young athletes.</p>
          </div>
          <div className="image col">
            <img className='img-fluid' src="/images/youth.png" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="image col">
            <img className='img-fluid' src="/images/paralympic.png" alt="" />
          </div>
          <div className="info border-start col">
            <h1>PARALYMPIC GAMES</h1>
            <p>The Paralympic Games provide a platform for Para athletes with a diverse range of impairments to showcase their outstanding abilities to millions of spectators and billions of TV viewers.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home