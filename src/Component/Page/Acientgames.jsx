import React from 'react'

function Acientgames() {
  return (
    <div className='ancientgames mt-5'>
        <h1 className='ms-5 mb-2'>Welcome to the Ancient Olympic Games</h1>
        <div className="thongtin1 text-center">
                <img className='img-fluid' src="/images/ancient.png" alt="" />
                <div className="text text-start">
                    <p className='fw-bold chu1'>From boxing contests with no weight classifications or point scoring to chariot racing where danger lurked on every corner, it is easy to see why the Ancient Games enthralled the Greeks for so long. Here, we give you the essential lowdown, highlight our favourite facts.</p>
                    <p className='px-5 py-5 chu2'>Full of blood, passion and extraordinary feats of athletic endeavour, the Olympic Games were the sporting, social and cultural highlight of the Ancient Greek calendar for almost 12 centuries.</p>
                    <p className='text-light-emphasis chu3'>"It is hard for us to exaggerate how important the Olympics were for the Greeks."</p>
                    <p className='chu4'> <b>Paul Christesen</b> <br />Professor of Ancient Greek History at Dartmouth College, USA</p>
                    <p className='px-5 mt-5 chu'>“The classic example is that when the Persians invaded Greece in the summer of 480 (BC) a lot of the Greek city states agreed that they would put together an allied army but they had a very hard time getting one together because so many people wanted to go to the Olympics", explains Christesen. "So, they actually had to delay putting the army together to defend the country against the Persians.”</p>
                    <p className='px-5 mt-4 chu'>The threat of invasion or not, the Games took place every four years from 776BC to at least 393AD. All free Greek males were allowed to take part, from farmhands to royal heirs, although the majority of Olympians were soldiers. Women could not compete or even attend. There was, however, a loophole to this misogynistic rule - chariot owners, not riders, were declared Olympic champions and anyone could own a chariot. Kyniska, daughter of a Spartan king, took advantage of this, claiming victory wreaths in 396BC and 392BC.</p>
            </div>
        </div>
        <h1 className='ms-5 mb-2 mt-5'>OLYMPIA TODAY</h1>
        <div id="carouselExample" class="carousel slide container text-center  ps-3">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/ancient1.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="/images/ancient2.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="/images/ancient3.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="/images/ancient4.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="/images/ancient5.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="/images/ancient6.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="/images/ancient7.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="/images/ancient8.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="/images/ancient9.png" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
        </div>
        <div className="thongtin2 mb-5">
            <div className="container">
                <p>At their heart, the Games were a religious festival and a good excuse for Greeks from all over the Mediterranean basin to gather for a riotous barbeque. On the middle day of the festival a vast number of cows were slaughtered in honour of Zeus, King of the Greek Gods - once he had been given a small taste, the rest was for the people.</p>
                <p>For the first 250-plus years all the action took place in the sanctuary of Olympia, situated in the north-western Peloponnese. Pock-marked by olive trees, from which the victory wreaths were cut, and featuring an altar to Zeus, it was a hugely sacred spot.</p>
                <p>The Games lasted a full five days by the fifth century BC and saw running, jumping and throwing events plus boxing, wrestling, pankration and chariot racing. At least 40,000 spectators would have packed the stadium each day at the height of the Games' popularity, in the second century AD, with many more selling their wares outside.</p>
                <p>But first, here are our 10 favourite facts to get you started:</p>
                <li>All athletes competed naked</li>
                <li>Wrestlers and pankration (a sort of mixed martial art which combined boxing and wrestling) competitors fought covered in oil</li>
                <li>Corporal punishment awaited those guilty of a false start on the track</li>
                <li>There were only two rules in the pankration - no biting and no gouging</li>
                <li>Boxers were urged to avoid attacking the on-display male genitals</li>
                <li>There were no points, no time limits and no weight classifications in the boxing</li>
                <li>Athletes in the combat sports had to indicate their surrender by raising their index fingers - at times they died before they could do this</li>
                <li>Boxers who could not be separated could opt for klimax, a system whereby one fighter was granted a free hit and then vice-versa - a toss of a coin decided who went first</li>
            </div>
        </div>
    </div>
  )
}

export default Acientgames