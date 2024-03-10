import { useEffect, useState } from 'react'
import React from 'react'

import axios from 'axios';
import data from '../Data/Parisports.json'

function Paris() {

  return (
    <div className='Paris'>
        <div className="position-relative">
            <img className='img-fluid' src="/images/paris2.png" alt="" />
            <div className="border border-0">
                <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center w-100">
                    <img className='img-fluid bg-white w-25' src="/images/paris.png" alt="" />
                </div>
            </div>
        </div>
        <div className="p-info d-flex justify-content-around bg-black text-light container p-4">
                <div className="info-1">
                    PARIS 2024
                </div>
                <div className="info-2">
                    26 July - 11 August
                </div>
                <div className="info-3">
                    148 days
                </div>
                <div className='info-4'>
                    France
                </div>
        </div>
        <div className="border container-fluid">
            <div className="row row-cols-3 d-flex justify-content-center p-new">
                <div className="col card w-25 m-3">
                    <div className="box">
                        <img className='img-fluid' src="/images/paris3.png" alt="..." />
                    </div>
                    <div className='card-caption'>
                        Paris 2024: the Olympic and Paralympic medals have been revealed 
                    </div>
                </div>
                <div className="col card w-25 m-3">
                    <div className='box'>
                        <img className='img-fluid' src="/images/paris4.png" alt="..." />
                    </div>
                    <div className='card-caption'>
                        Six celebrity Olympic fans eyeing Paris 2024 with six months to go
                    </div>
                </div>
                <div className="col card w-25 m-3">
                    <div className="box">
                        <img className='img-fluid' src="/images/paris5.png" alt="..." />
                    </div>
                    <div className='card-caption'>
                        Six months until Paris 2024: Six incredible Olympic venues you may not know
                    </div>
                </div>
                <div className="col card w-25 m-3">
                    <div className="box">
                        <img className='img-fluid' src="/images/paris6.png" alt="..." />
                    </div>
                    <div className='card-caption'>
                        Paris 2024 reveals all-new Torch Relay team relays for the upcoming Games
                    </div>
                </div>
                <div className="col card w-25 m-3">
                    <div className="box">
                        <img className='img-fluid' src="/images/paris7.png" alt="..." />
                    </div>
                    <div className='card-caption'>
                        200 days to Paris 2024: Five things that set the upcoming Games apart from any previous Olympics
                    </div>
                </div>
                <div className="col card w-25 m-3">
                    <div className="box">
                        <img className='img-fluid' src="/images/paris8.png" alt="..." />
                    </div>
                    <div className='card-caption'>
                        Paris 2024: Over 400,000 new Games tickets to go on sale across all sports including artistic gymnastics with Simone Biles
                    </div>
                </div>
            </div>
        </div>
        <div className="p-sport">
            <div className="h1 border text-center">SPORTS</div>
            <div className='bangthethao container p-3'>
            {data.map((item) => (
                    <div className="row row-cols-3">
                        <div className="col">
                            <p>{item.A1}</p>
                            <p>{item.A2}</p>
                            <p>{item.A3}</p>
                            <p>{item.B1}</p>
                            <p>{item.B2}</p>
                            <p>{item.C1}</p>
                            <p>{item.C2}</p>
                            <p>{item.D1}</p>
                            <p>{item.E1}</p>
                            <p>{item.F1}</p>
                        </div>
                        <div className="col">
                            <p>{item.F2}</p>
                            <p>{item.G1}</p>
                            <p>{item.H1}</p>
                            <p>{item.H2}</p>
                            <p>{item.J1}</p>
                            <p>{item.K1}</p>
                            <p>{item.M1}</p>
                            <p>{item.M2}</p>
                            <p>{item.R1}</p>
                            <p>{item.R2}</p>
                        </div>
                        <div className="col">
                            <p>{item.S1}</p>
                            <p>{item.S2}</p>
                            <p>{item.S3}</p>
                            <p>{item.S4}</p>
                            <p>{item.T1}</p>
                            <p>{item.T2}</p>
                            <p>{item.T3}</p>
                            <p>{item.V1}</p>
                            <p>{item.W1}</p>
                            <p>{item.W2}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className='Ab border'>
            <div className="row row-cols-2 m-5 d-flex justify-content-center">
                <div className="title col w-25">ABOUT <br /> THE <br /> GAMES</div>
                <div className="ct col">
                    {data.map((pro) => (
                        <table>
                            <tr className='h3'>{pro.td1}</tr>
                            <tr>{pro.nd11}</tr>
                            <tr>{pro.nd12}</tr>
                            <tr>{pro.nd13}</tr>
                            <tr>{pro.nd14}</tr>
                            <tr>{pro.nd15}</tr>
                            <tr>{pro.nd16}</tr>
                            <tr>{pro.nd17}</tr>
                            <tr className='h3'>{pro.td2}</tr>
                            <tr>{pro.nd21}</tr>
                            <tr>{pro.nd22}</tr>
                            <tr>{pro.nd23}</tr>
                            <tr>{pro.nd24}</tr>
                            <tr>{pro.nd25}</tr>
                            <tr>{pro.nd26}</tr>
                            <tr>{pro.nd27}</tr>
                            <tr>{pro.nd28}</tr>
                            <tr>{pro.nd29}</tr>
                            <tr>{pro.nd210}</tr>
                            <tr>{pro.nd211}</tr>
                            <tr>{pro.nd212}</tr>
                            <tr className='h3'>{pro.td3}</tr>
                            <tr>{pro.nd31}</tr>
                            <tr>{pro.nd32}</tr>
                            <tr>{pro.nd33}</tr>
                            <tr>{pro.nd34}</tr>
                            <tr><i>{pro.nd35}</i></tr> <br />
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
                            <h1>Where will the 2024 Olympics be held?</h1>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">The 2024 Summer Olympic Games will be held in Paris, France. There will be a total of 35 venues, with fourteen sites hosting 24 Olympic sports located within 10km of the Olympic Village. The Games will take place in several locations around Paris such as les Yvelines, Hauts-de-Seine, Seine-et-Marne and Seine-Saint-Denis. However, the Paris 2024 Games will extend to many other areas of France, with the football tournament being played in six other cities (Bordeaux, Nantes, Lyon, Saint-Etienne, Nice and Marseille), sailing taking place in Marseille and surfing held at the Teahupo'o site in Tahiti.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <h1>When are Paris 2024 Olympics?</h1>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">The 2024 Summer Olympic Games will be held from Friday 26 July 2024 to Sunday 11 August 2024. However, the competitions for football and rugby will begin on 24 July and the handball tournament on the 25th. In a little over three weeks, 329 events in 32 sports will take place, with a total of 206 NOCs competing in addition to the Refugee Olympic Team.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <h1>How to get tickets for Paris 2024 Olympics?</h1>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse     collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Close to 10 million tickets will go on sale for the 2024 Olympics with around 3.4 million for the Paralympics - all sold via a single website. For the Olympic Games, there will be packages and tickets to single events and for the Paralympic Games, day passes to discover several para sports and tickets to single event will be available. Because of the strong interest and demand, a draw will take place, to give everyone an equal chance of obtaining a ticket to the Olympic Games. Prices for all Olympic sports will start at €24 and €15 for all Paralympic sports. Want to be in the stands of Paris 2024? Join the Club and increase your chances of getting a ticket. (https://www.paris2024.org/en/tickets)</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            <h1>How do athletes qualify for Paris 2024?</h1>
                        </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse     collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Each International Federation establishes its own sport's rules for participation at the Olympic Games, including qualification criteria in accordance with the Olympic Charter. Some are based on ranking, some have specific Olympic Qualifying Tournaments while some use existing competitions to define the qualified teams or athletes. Others require athletes to reach a minimal time or distance in their discipline. There are as many ways to qualify for the Olympic Games as there are disciplines.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="olympics-f mb-5 pb-5">
            <h1 className='my-5 mx-5 ps-5'>Olympic Games</h1>
            <div className="container text-center">
                <div className="row row-cols-4">
                    <div className="card border border-0 col">
                        <a href="/milano2026"><img className='img-fluid rounded' src="/images/milano7.png" alt="" /></a>
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

export default Paris