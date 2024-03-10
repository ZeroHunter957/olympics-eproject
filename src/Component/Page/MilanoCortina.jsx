import React from 'react'
import { useEffect, useState } from 'react'
import data from '../Data/Parisports.json'

function MilanoCortina() {

  return (
    <div className='milanocortina'>
        <div className="position-relative">
            <img className='img-fluid' src="/images/milano6.png" alt="" />
            <div className="border border-0">
                <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center w-100">
                    <img className='img-fluid bg-white w-25' src="/images/milano5.png" alt="" />
                </div>
            </div>
        </div>
        <div className="p-info d-flex justify-content-around bg-black text-light container p-4">
                <div className="info-1">
                    Milano Cortina 2026
                </div>
                <div className="info-2">
                6 February - 22 February
                </div>
                <div className="info-3">
                    707 days
                </div>
                <div className='info-4'>
                    Italy
                </div>
        </div>
        <div className="border container-fluid">
            <div className="row row-cols-3 d-flex justify-content-center p-new">
                <div className="col card w-25 m-3">
                    <div className="box">
                        <img className='img-fluid' src="images/milano.png" alt="..." />
                    </div>
                    <div className='card-caption lh-sm'>
                        <p className='h2 lh-1'>PLACES</p>
                        <p className='text-info lh-1'>THE GREAT STADIUM FOR THE GAMES</p>
                        <p>This will be a particular challenge for the territories: the first Olympic and Paralympic Winter Games to spread over an area of more than 22 km2. Two cities, Milan and Cortina, along with the support of two regions, Lombardy and Veneto, and two autonomous provinces, Trento and Bolzano, are joining forces to create a memorable edition of the Games. These are all the locations of the competitions and ceremonies.</p>
                    </div>
                </div>
                <div className="col card w-25 m-3">
                    <div className='box'>
                        <img className='img-fluid' src="images/milano4.png" alt="..." />
                    </div>
                    <div className='card-caption lh-sm'>
                        <p className='h2 lh-1'>DATES</p>
                        <p className='text-info lh-1'>2026 IS ALREADY HERE</p>
                        <p>Some 70 years after Cortina 1956 and 20 years after Turin 2006, the Olympic and Paralympic Winter Games are returning to Italy.</p>
                        <p>On February 6, 2026, the curtain will rise on the Olympic Games; the date for the Paralympic Games is March 6, 2026. But the road to the Games has already begun; Milano-Cortina is already here.</p>
                    </div>
                </div>
                <div className="col card w-25 m-3">
                    <div className="box">
                        <img className='img-fluid' src="images/milano3.png" alt="..." />
                    </div>
                    <div className='card-caption lh-sm'>
                        <p className='h2 lh-1'>SPORTS</p>
                        <p className='text-info lh-1'>ALL OLYMPIC DISCIPLINES</p>
                        <p>Sports are at the foundation of the Milano-Cortina 2026 project. Sixteen Olympic and six Paralympic disciplines spread across 18 competition centres.</p>
                        <p>Some 3,500 athletes from 93 countries will compete for a spot on the podium. The very first debut of ski mountaineering.Two million spectators are expected at the competition venues.</p>
                    </div>
                </div>
                <div className="col card w-25 m-3">
                    <div className="box">
                        <img className='img-fluid' src="images/milano2.png" alt="..." />
                    </div>
                    <div className='card-caption lh-sm'>
                        <p className='h2 lh-1'>A LONG SPORTING HISTORY</p>
                        <p className='text-info lh-1'>FROM CHAMONIX 1924 TO MILANO CORTINA 2026</p>
                        <p>This is the third time that Italy will host the Winter Olympics, each edition creating its own history</p>
                    </div>
                </div>
                <div className="col card w-25 m-3">
                    <div className="box">
                        <img className='img-fluid' src="images/milano1.png" alt="..." />
                    </div>
                    <div className='card-caption lh-sm'>
                        <p className='h2 lh-1'>THE AMBASSADORS</p>
                        <p className='text-info lh-1'>OF MILANO CORTINA 2026</p>
                        <p>A team of national and international testimonials will promote the Olympic and Paralympic values and support the initiatives of Milano Cortina 2026. Faces from the world of sport, entertainment, art, science, entrepreneurship that will bring younger generations closer to sports and will promote the Olympic and Paralympic disciplines, as well as the excellence of the territories of our country.</p>
                    </div>
                </div>
                <div className="col card w-25 m-3">
                    <div className="box">
                        <img className='img-fluid' src="images/milano.png" alt="..." />
                    </div>
                    <div className='card-caption lh-sm'>
                        <p className='h2 lh-1'>THE MILANO CORTINA 2026</p>
                        <p className='text-info lh-1'>FOUNDATION</p>
                        <p>The Milano Cortina 2026 Foundation was established on December 9, 2019. It will carry out all the organizational, promotional and communication activities for the sporting and cultural events related to the staging of the XXV Olympic and Paralympic Winter Games.</p>
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
                            <p className='h2 fs-1'>{pro.td4}</p>
                            <p className='h2 text-primary'>{pro.td41}</p>
                            <p className='lh-base'>{pro.nd4}</p>
                            <p className='h2 fs-1'>{pro.td5}</p>
                            <p className='h2 text-primary'>{pro.td51}</p>
                            <p className='lh-base'>{pro.nd5}</p>
                            <p className='h2 fs-1'>{pro.td6}</p>
                            <p className='h2 text-primary'>{pro.td61}</p>
                            <p className='lh-base'>{pro.nd6}</p>
                        </table>
                    ))}
                </div>
            </div>
        </div>
        <div className="p-faqs container">
            <div class="accordion accordion-flush p-5 m-5" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <h1>WHAT ARE THE DISCIPLINES COMPETING IN THE WINTER OLYMPIC GAMES?</h1>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">The Olympic program includes competitions in 15 disciplines: biathlon, bobsleigh, Nordic combined, curling, freestyle, ice hockey, figure skating, speed skating, ski jumping, alpine skiing, cross country skiing, short track, skeleton, luge and snowboard.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <h1>WHEN WILL THE XXV WINTER OLYMPIC GAMES TAKE PLACE?</h1>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">The 25th Winter Olympic Games will be held from 6 to 22 February 2026.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <h1>WHERE WILL THE WINTER OLYMPICS IN MILAN CORTINA 2026 TAKE PLACE?</h1>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">The XXV Winter Olympic Games will be held from 6 to 22 February 2026. In addition to Milan and Cortina d'Ampezzo, the cities that have jointly assigned the event, the competitions will take place in Valtellina, in Val di Fiemme and in Anterselva / Antholz.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            <h1>WHAT ARE THE NEXT OLYMPIC EVENTS?</h1>
                        </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Beijing 2022, XXIV Winter Olympic Games from 4 to 20 February 2022
<br />Paris 2024, Games of the XXXIII Olympiad from 2 to 18 August 2024
<br />Milan Cortina 2026, XXV Winter Olympic Games from 6 to 22 February 2026
<br />Los Angeles 2028, Games of the 34th Olympiad from 21 July to 6 August 2028</div>
                    </div>
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
                        <a href="/dakar2026"><img className='img-fluid rounded' src="/images/dakar7.png" alt="" /></a>
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

export default MilanoCortina