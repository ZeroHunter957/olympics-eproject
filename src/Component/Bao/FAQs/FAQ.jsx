import React from "react";
import "../FAQs/FAQ.css";

// use bootstrap accordion

function FAQ() {
  return (
    <div className="faq">
      <div className="container-fluid">
        <h1>Frequently Asked Questions</h1>
        <div className="row">
          <div className="col-4 col-md-4">
            <img src="/images/Bao/assets/FAQ/faq1.webp" className="faq-image" alt="" />
            <h3>The Olympics Symbol</h3>
            <div className="accordion" id="accordionPanel">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    What is Olympism?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body">
                    Olympism is a philosophy of life, exalting and combining in
                    a balanced whole the qualities of body, will and mind.
                    Blending sport with culture and education, Olympism seeks to
                    create a way of life based on the joy of effort, the
                    educational value of good example, social responsibility and
                    respect for universal fundamental ethical principles. <br />
                    <br />
                    The goal of Olympism is to place sport at the service of the
                    harmonious development of humankind, with a view to
                    promoting a peaceful society concerned with the preservation
                    of human dignity.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    What are the Olympic Values?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    The three values of Olympism are excellence, respect and
                    friendship. They constitute the foundation on which the
                    Olympic Movement builds its activities to promote sport,
                    culture and education with a view to building a better
                    world.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    What is the Olympic Movement?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    The Olympic Movement is composed of three main constituents:
                    the International Olympic Committee , the International
                    Sports Federations and the National Olympic Committees.
                    <br />
                    <br />
                    In addition to these three constituents the Olympic Movement
                    is made up of all the organisations which recognise the
                    IOC's authority: the Organising Committees for the Olympic
                    Games, the athletes, judges and referees, associations and
                    clubs, as well as all the IOC-recognised organisations and
                    institutions.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 col-md-4">
            <img src="/images/Bao/assets/FAQ/faq2.webp" className="faq-image" alt="" />
            <h3>The Olympics Movement</h3>
            <div className="accordion" id="accordionPanel">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    What are the Olympic properties?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body">
                    The Olympic properties are:
                    <br /> - The Olympic symbol (rings)
                    <br /> - The Olympic flag - The Olympic motto
                    <br /> - The Olympic anthem
                    <br /> - Olympic identifications (including but not limited
                    to "Olympic Games" and "Games of the Olympiad")
                    <br /> - Olympic designations
                    <br /> - Olympic emblems
                    <br /> - The Olympic flame and torches The International
                    <br />
                    Olympic Committee (IOC) owns all rights on the Olympic
                    properties.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFive"
                  >
                    What is the meaning of the Olympic rings?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFive"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    The Olympic symbol consists of five interlaced rings of
                    equal dimensions, used alone, in one or in five different
                    colours, which are, from left to right, blue, yellow, black,
                    green and red. The Olympic symbol (the Olympic rings)
                    expresses the activity of the Olympic Movement and
                    represents the union of the five continents and the meeting
                    of athletes from throughout the world at the Olympic Games.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSix"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseSix"
                  >
                    Who created the Olympic rings symbol?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseSix"
                  class="accordion-collapse collapse"
                >
                  <div class="accordion-body">
                    The Rings appeared for the first time in 1913 at the top of
                    a letter written by Pierre de Coubertin, the founder of the
                    modern Olympic Games. He drew and coloured the rings by
                    hand.
                    <br />
                    <br />
                    In the Olympic Review of August 1913, he explained that
                    "These five rings represent the five parts of the world now
                    won over to Olympism and ready to accept its fertile
                    rivalries. Moreover, the six colours thus combined reproduce
                    those of all the nations without exception."
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 col-md-4">
            <img src="/images/Bao/assets/FAQ/faq3.webp" className="faq-image" alt="" />
            <h3>Being part of the Games</h3>
            <div class="accordion" id="accordionPanel">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSeven"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseSeven"
                  >
                    What does an athlete have to do to participate in the
                    Olympic Games?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseSeven"
                  class="accordion-collapse collapse show"
                >
                  <div class="accordion-body">
                    Taking part in the Olympic Games is every athlete's dream,
                    and requires huge amounts of determination and long years of
                    training.
                    <br />
                    <br />
                    Athletes must first comply with the Olympic Charter and
                    follow the rules of the International Federation governing
                    their sport. The IFs establish the rules and organise
                    qualifying events, while the National Olympic Committee of
                    the athlete's country supports the athlete and is
                    responsible for entering them for the Games.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseEleven"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseEight"
                  >
                    How many countries and athletes participate in the Olympic
                    Games ?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseEight"
                  class="accordion-collapse collapse"
                >
                  <div class="accordion-body">
                    There are no countries participating in the Olympic Games,
                    but rather athletes from National Olympic Committees.
                    <br />
                    <br />
                    At the Olympic Summer Games in Paris in 2024, around 10,500
                    athletes from 206 NOCs will compete. At the Olympic Winter
                    Games, there are usually around 2,900 athletes from more
                    than 80 NOCs taking part in the competitions.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseNine"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseNine"
                  >
                    Where do the athletes live during the Olympic Games?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseNine"
                  class="accordion-collapse collapse"
                >
                  <div class="accordion-body">
                    During the two weeks of the Games, the athletes live in the
                    Olympic Village. This is a residential complex, generally
                    located close to the Olympic stadium, where the world's
                    athletes in all the Olympic sports live together.
                    <br />
                    <br />
                    The Olympic Village is safe and comfortable. During the
                    Games, it provides for all the athletes' needs and protects
                    them from disturbance by the outside world. The Village
                    includes the athletes' accommodation, together with an
                    international zone which includes shops, various services
                    and leisure facilities.
                    <br />
                    <br />
                    Once the Games are over, the Olympic Village is usually
                    turned into a new residential zone for the host city, with
                    the accommodation being sold or rented to the local
                    population.
                    <br />
                    <br />
                    However, the athletes have not always had their own Village.
                    The accommodation provided for the 1932 Games in Los Angeles
                    is regarded as the first official modern Olympic Village.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 col-md-4">
            <img src="/images/Bao/assets/FAQ/faq4.jpg" className="faq-image" alt="" />
            <h3>IOC - The organisation</h3>
            <div class="accordion" id="accordionPanel">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTen"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseTen"
                  >
                    What is the International Olympic Committee and what is its
                    mission?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTen"
                  class="accordion-collapse collapse show"
                >
                  <div class="accordion-body">
                    The International Olympic Committee is an international
                    non-governmental not-for-profit organisation, in the form of
                    an association.
                    <br />
                    <br />
                    It is the supreme authority leading the Olympic Movement and
                    the catalyst for all Olympic family members:National Olympic
                    Committees, International, Federations, athletes, Organising
                    Committees for the Olympic Games, TOP partners and
                    broadcasters, plus United Nations agencies.
                    <br />
                    <br />
                    Its job is to encourage the promotion of Olympic values, to
                    ensure the regular celebration of the Olympic Games and its
                    legacy and to support all the organisations affiliated to
                    the Olympic Movement. The IOC cultivates its success through
                    a series of programmes and projects which give life to the
                    Olympic values.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseEleven"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseEleven"
                  >
                    What is the International Olympic Committee Session?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseEleven"
                  class="accordion-collapse collapse"
                >
                  <div class="accordion-body">
                    The Session is the general assembly of the IOC's members.
                    The supreme body of the IOC, its decisions are final. An
                    ordinary Session is held once a year. Extraordinary Sessions
                    may be convened by the President or upon the written request
                    of at least one-third of the members.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwelve"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwelve"
                  >
                    What powers does the Session have?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwelve"
                  class="accordion-collapse collapse"
                >
                  <div class="accordion-body">
                    The Session has the following powers:
                    <br />
                    1. to adopt or amend the Olympic Charter
                    <br />
                    2. to elect the members of the IOC, the Honorary President,
                    honorary members and honour members
                    <br />
                    3. to elect the President, the Vice-Presidents and all other
                    members of the IOC Executive Board
                    <br />
                    4. to elect the host city of the Olympic Games
                    <br />
                    5. to elect the city in which an ordinary Session is held,
                    the President having the authority to determine the city in
                    which an extraordinary Session is held
                    <br />
                    6. to approve the annual report and financial statements of
                    the IOC
                    <br />
                    7. to appoint the independent auditor of the IOC
                    <br />
                    8. to decide on the awarding or withdrawal by the IOC of
                    full recognition to or from NOCs, associations of NOCs, IFs,
                    associations of IFs and other organisations
                    <br />
                    9. to expel IOC members and to withdraw the status of
                    Honorary President, honorary members and honour members
                    <br />
                    10. to adopt or amend the Athletes' Rights and
                    Responsibilities Declaration upon recommendation of the
                    Athletes' Commission and to promote respect for this
                    Declaration within the Olympic Movement
                    <br />
                    11. to resolve and decide upon all other matters assigned to
                    it by law or by the Olympic Charter.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 col-md-4">
            <img src="/images/Bao/assets/FAQ/faq5.jpg" className="faq-image" alt="" />
            <h3>Games, Ceremonies and Protocol</h3>
            <div class="accordion" id="accordionPanel">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThirteen"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseThirteen"
                  >
                    What is the role of the International Olympic Committee in
                    organising the Olympic Games?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThirteen"
                  class="accordion-collapse collapse show"
                >
                  <div class="accordion-body">
                    The IOC entrusts the honour and responsibility of hosting
                    the Games to a host elected by the IOC Session. The
                    organisation for the Games is based on a partnership between
                    the IOC and the Organising Committee for the Olympic Games.
                    <br />
                    <br />
                    The Olympic Games are the exclusive property of the IOC,
                    which is the supreme authority for all matters concerning
                    the Games. Its role is to supervise, support and monitor the
                    organisation of the Games; ensure that they run smoothly;
                    and make sure that the rules of the Olympic Charter and the
                    Olympic Host Contract are respected. It is also the IOC that
                    issues the invitation to NOCs to participate.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFourteen"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFourteen"
                  >
                    What role does the government of a country have in
                    organising the Games?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFourteen"
                  class="accordion-collapse collapse"
                >
                  <div class="accordion-body">
                    The three main constituent groups involved in organizing the
                    Games are the International Olympic Committee, the National
                    Olympic Committees, and the International Sports
                    Federations, not the government of the host country. <br />
                    <br />
                    While the government of the host country has a role to play
                    in supporting the bid of their city in hosting the Games, it
                    does not take part in the Olympic Host Contract and does not
                    issue the invitations to NOCs to participate. Invitations to
                    the NOCs are issued only by the IOC.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFifteen"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFifteen"
                  >
                    Who organises the Olympic Games?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFifteen"
                  class="accordion-collapse collapse"
                >
                  <div class="accordion-body">
                    The host city's Organising Committee for the Olympic Games
                    is in charge of organising this great event.
                    <br />
                    <br />
                    When the International Olympic Committee selects a city to
                    stage the Games, the city and the National Olympic Committee
                    of the host country create the OCOG which will organise the
                    Games.
                    <br />
                    <br />
                    From the moment it is created, seven years before the Games,
                    the OCOG works closely with the IOC.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 col-md-4">
            <img src="/images/Bao/assets/FAQ/faq6.webp" className="faq-image" alt="" />
            <h3>Sports, programme and results</h3>
            <div class="accordion" id="accordionPanel">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSixteen"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseSixteen"
                  >
                    How can a new sport be included in the Olympic Games
                    programme?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseSixteen"
                  class="accordion-collapse collapse show"
                >
                  <div class="accordion-body">
                    With the implementation of Olympic Agenda 2020, the process
                    of establishing the Olympic programme changed to enhance the
                    popularity of the Games while ensuring that the numbers of
                    athletes, and the cost and complexity of the event, remain
                    manageable. As part of this new process the Organising
                    Committee of a specific edition of the Olympic Games may
                    propose to the IOC the inclusion, for such edition only, of
                    one or more additional events from the sports governed by
                    the IOC Recognised IFs. Tokyo 2020 Organising Committee was
                    the first OCOG able to propose new sports and included five
                    new sports for its edition of the Summer Games - surfing,
                    karate, sports climbing, skateboarding and
                    baseball/softball.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSeventeen"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseSeventeen"
                  >
                    What are the conditions required for a sport to be
                    recognised by the IOC?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseSeventeen"
                  class="accordion-collapse collapse"
                >
                  <div class="accordion-body">
                    To be recognised by the IOC, a sport must first of all be
                    governed by an International Federation. This is required in
                    order to conform to the Rules of the Olympic Charter, the
                    World Anti-Doping Code as well as the Olympic Movement Code
                    on the Prevention of Manipulation of Competitions.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseEighteen"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseEighteen"
                  >
                    Who is responsible for adding events or disciplines to the
                    programme of the Olympic Games?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseEighteen"
                  class="accordion-collapse collapse"
                >
                  <div class="accordion-body">
                    The event programme for the Olympic Games is defined by the
                    IOC Executive Board upon recommendations of the Olympic
                    Programme Commission and in cooperation with the
                    International Federations and the respective Organising
                    Committee of the Olympic Winter Games.
                    <br />
                    <br />
                    More specifically, any proposal for a new event put forward
                    by the respective International Federation goes through a
                    very strict review and decision-making process led by the
                    Olympic Programme Commission, which involves representatives
                    of athletes, International Federations and National Olympic
                    Committees.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
