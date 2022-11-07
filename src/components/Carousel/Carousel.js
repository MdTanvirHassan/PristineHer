import React from 'react'
import './Carousel.css';
import img from '../../img/cr.png';
import image from '../../img/cr2.png';

export default function Carousel() {
  return (
    <div>

         {/* --------------------------------nab3------------------- */}
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-success " aria-label="Eighth navbar example">
    <div className="container ">
      <a className="navbar-brand hb" href="/">  </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample07">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item px-3 me-5">
            <a className="navbar-brand ms-8 hb" aria-current="page" href="/"><i class="bi bi-card-list"></i>  All Categories </a>
          </li>
          <li className="nav-item">
            <a className="navbar-brand ps-5 ms-5 hb" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="navbar-brand hb" aria-current="page" href="/">Blogs</a>
          </li>
          <li className="nav-item">
            <a className="navbar-brand hb" href="/">About Us</a>
          </li>
          <li className="nav-item">
            <a className="navbar-brand hb" aria-current="page" href="/">Contract US</a>
          </li>
          
         
        </ul>
        <a className="nav-link bg-success hb" href="http:/" style={{color:'white'}}><i class="bi bi-tags"></i> Daily Deals</a>
      </div>
    </div>
  </nav>

    <div className="container ">
        <div className="row  ">
          <div className="col-10 col-sm-8 col-lg-4">
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item " id='li'>
                    <a href="/" className="nav-link link-dark" aria-current="page">
                    <svg className="bi pe-none me-2" width="16" height="16"><use href="/home"/></svg>
                    All Offers
                    </a>
                </li>
                <li id='li'>
                    <a href="/" className="nav-link link-dark">
                    <svg className="bi pe-none me-2" width="16" height="16"><use href="/speedometer2"/></svg>
                    Tea Snacks
                    </a>
                </li>
                <li id='li'>
                    <a href="/" className="nav-link link-dark">
                    <svg className="bi pe-none me-2" width="16" height="16"><use href="/table"/></svg>
                    Dairy
                    </a>
                </li>
                <li id='li'>
                    <a href="/" className="nav-link link-dark">
                    <svg className="bi pe-none me-2" width="16" height="16"><use href="/grid"/></svg>
                    Meats
                    </a>
                </li>
                <li id='li'>
                    <a href="/" className="nav-link link-dark">
                    <svg className="bi pe-none me-2" width="16" height="16"><use href="/people-circle"/></svg>
                    Fruits
                    </a>
                </li>
                <li id='li'>
                    <a href="/" className="nav-link link-dark">
                    <svg className="bi pe-none me-2" width="16" height="16"><use href="/people-circle"/></svg>
                    For Health
                    </a>
                </li>
                <li id='li'>
                    <a href="/" className="nav-link link-dark">
                    <svg className="bi pe-none me-2" width="16" height="16"><use href="/people-circle"/></svg>
                    Seasonal
                    </a>
                </li>
                <li id='li'>
                    <a href="/" className="nav-link link-dark">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            View All Categories 
                            </button>
                            </h2></div></div>
                   
                    </a>
                </li>
            </ul>
        </div>

{/* ---------------------------------------carousel-------------------------------- */}
        <div className="col-lg-8 my-2">
          
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={img} className="d-block w-100 " alt="carouselImageSample"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={image} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </div>
        </div>
    </div>


    </div>
  )
}
