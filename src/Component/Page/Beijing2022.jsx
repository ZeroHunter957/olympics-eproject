import React from 'react'

import { useParams } from 'react-router-dom';
import product from '../Data/Games.json'
import data from '../Data/Infogames.json'
import sports from '../Data/Results.json'
import replay from '../Data/Replays.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

function Beijing2022() {
    const {id} = useParams();
    let items = product.filter((items) =>items.Pastgame[0].id == id);
    let sp = data.filter((sp)=>sp.Pastgame[0].id == id); 
    var sports1 = sports.slice(0,15);
    sports1 = sports.filter((sports1)=>sports1.Pastgame[0].id == id)
    let replays = replay.filter((replays)=>replays.Pastgame[0].id == id);
  return (
    <div className='beijing'>
        <div className="container text-center menu-1">
        <div className="row row-cols-3">
            <div className="col-3 row align-items-center ps-5 text-start py-5">
                <a className='ps-5 ms-5' href="#results">Results</a>
                <a className='ps-5 ms-5' href="#replays">Replays</a>
                <a className='ps-5 ms-5' href="#medal">Medal Design</a>
                <a className='ps-5 ms-5' href="#mascot">Mascot</a>
                <a className='ps-5 ms-5' href="#torch">Torch</a>
            </div>
            <div className="col-6 border border-top-0 border-bottom-0 text-center p-5">
            {items.map((item) =>(
            <img className='img-fluid' src={item.image} alt="" />))}
            </div>
            <div className="col-3 d-flex align-items-center">
                <div className="tt">
                {items.map((item) => (
                    <h2 className='px-5 mb-3 float-start'>{item.name}</h2>
                    ))}
                <table>
                    {sp.map((item)=>(
                        <tr className='border-bottom lh-lg'>
                            <td className='opacity-50 text-start'>{item.bp}</td>
                            <td className='text-end ps-5 ms-5'>{item.bt}</td>
                        </tr>
                    ))}
                </table>
                </div>
            </div>
        </div>
        </div>
        <div className="banner">
            {items.map((item) =>(
            <img className='img-fluid w-100' src={item.banner} alt="" />))}
        </div>
        <div className="ab container my-5 px-5">
            {items.map((item) => (
            <div className="row">
            <div className='h1 col'>{item.About}</div>
            <div className="info1 col-8">
                <p>{item.info1}</p>
                <p>{item.info2}</p>
                <p>{item.info3}</p>
            </div>
            </div>
            ))}
        </div>
        <div className="contents" id='results'>
            <h1>RESULTS</h1>
            <div className="list-sport container-fluid w-100">
                <div className="row row-cols-3">
                    {sports1.map((item)=>(
                        <div className="container sp p-2">
                            <div class="dropdown">
                                <button class=" w-100 d-flex justify-content-between align-items-center p-2 mb-5 rounded dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {item.sports}
                                </button>
                                <ul class="dropdown-menu w-100 border border-0">
                                    <div className="d-flex">
                                    <div className="card col bg-body-tertiary border border-0 dropdown-item">
                                        <img src={item.anh} className="card-img-top rounded-circle mt-4" alt="..." />
                                        <div className="card-body">
                                            <div className="card-title text-center">
                                                {item.ten}
                                            </div>
                                            <div className="text-center position-absolute top-0 start-0 ms-5">
                                                <FontAwesomeIcon icon={faMedal} style={{color: "#FFD43B",}}/>
                                                {item.medal}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card col bg-body-tertiary border border-0 dropdown-item">
                                        <img src={item.anh1} className="card-img-top rounded-circle border mt-4" alt="..." />
                                        <div className="card-body">
                                            <div className="card-title text-center">
                                                {item.ten1}
                                            </div>
                                            <div className="text-center position-absolute top-0 start-0 ms-5">
                                                <FontAwesomeIcon icon={faMedal} style={{color: "#a8a8a8",}}/>
                                                {item.medal1}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card col  bg-body-tertiary border border-0 dropdown-item">
                                        <img src={item.anh2} className="card-img-top rounded-circle border mt-4" alt="..." />
                                        <div className="card-body">
                                            <div className="card-title text-center">
                                                {item.ten2}
                                            </div>
                                            <div className="text-center position-absolute top-0 start-0 ms-4 ps-3">
                                                <FontAwesomeIcon icon={faMedal} style={{color: "#fe7a4d",}}/>
                                                {item.medal2}
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="contents mt-5" id='replays'>
            <h1>REPLAYS</h1>
            <div className="list-replay container">
                <div className="row row-cols-4">
                    {replays.map((item)=>(
                    <a href={item.link}><div className="col">
                    <div className="card border border-0">
                        <img className='card-img img-fluid' src={item.anh} alt="..." />
                        <div className="time position-absolute bottom-0 end-0 text-light bg-black px-3 me-3 mb-2">
                            {item.time}
                        </div>
                    </div>
                    <div className="text">
                        {item.text}
                    </div>
                    </div>
                    </a>
                    ))}
                </div>
            </div>
        </div>
        <div className="contents" id='medal'>
            <h1>MEDAL DESIGN</h1>
            <div className="medal container">
                {items.map((item)=>(
                <div className="para container w-75 fs-5">
                    <p>{item.info4}</p>
                    <p>{item.info5}</p>
                    <div className="container text-center">
                        <img className='img-fluid' src={item.image1} alt="" />
                    </div>
                </div>
                ))}
            </div>
        </div>
        <div className="contents" id='mascot'>
            <h1 className='text-start ms-5 ps-5'>MASCOT</h1>
            <div className="mascot-content container">
                {items.map((item)=>(
                <div className="row row-cols-2">
                    <div className="hianh col">
                        <img className='img-fluid' src={item.image2} alt="" />
                    </div>
                     <div className="ndung col">
                        <div className="bg-body-tertiary p-3 rounded-2">
                            <p className='h2'>{item.info7}</p>
                            <p>{item.info8}</p>
                            <p className='h2'>{item.info9}</p>
                            <p>{item.info10}</p>
                            <p className='h2'>{item.info11}</p>
                            <p>{item.info12}</p>
                            <p className='h2'>{item.info13}</p>
                            <p>{item.info14}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <div className="contents my-5 pb-5" id='torch'>
            <h1 className='text-start ms-5 ps-5'>TORCHES</h1>
            <div className="torch-content container">
                {items.map((item)=>(
                <div className="row row-cols-2">
                    <div className='ndung col bg-body-tertiary p-3 rounded-2'>
                        <p className='h2'>{item.info15}</p>
                        <p>{item.info16}</p>
                        <p className='h2'>{item.info17}</p>
                        <p>{item.info18}</p>
                        <p className='h2'>{item.info19}</p>
                        <li>
                            {item.info20}
                        </li>
                        <li>
                            {item.info21}
                        </li>
                        <li>
                            {item.info22}
                        </li>
                        <li>
                            {item.info23}
                        </li>
                        <li>
                            {item.info24}
                        </li>
                    </div>
                    <div className="hianh col">
                        <img className='img-fluid' src={item.image3} alt="" />
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Beijing2022