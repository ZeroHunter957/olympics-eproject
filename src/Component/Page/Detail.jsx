import React from 'react'

import { useParams } from 'react-router-dom';
import detail from '../Data/Detail.json'

function Detail() {
    const {id} = useParams();
    var data = detail.filter((data)=>data.results[0].id == id);

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
                <img src="" alt="" />
            </div>
            <div className="col-3 d-flex align-items-center">
                <div className="tt">
                    ...
                </div>
            </div>
        </div>
        </div>
        {data.map((item)=>(
            <div className="text-center border-top">{item.name}</div>
        ))}
    </div>
  )
}

export default Detail