import React from 'react'
import './Carousel.css';
import img from '../../img/cr.png';
import image from '../../img/cr2.png';

export default function Carousel(props) {
  return (
    <div>

         {/* --------------------------------nab3------------------- */}
    {/* <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-success text=dark " aria-label="Eighth navbar example">
    <div className="container ">
      <a className="navbar-brand hb" href="/">  </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse text-dark " id="navbarsExample07">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item px-3 me-5">
            <a className="navbar-brand ms-8 hb" aria-current="page" href="/"><i className="bi bi-card-list"></i>  All Categories </a>
          </li>
          <li className="nav-item">
            <a className="navbar-brand ps- ms-4 me-5 hb" aria-current="page" href="/"><small>Home</small></a>
          </li>
          <li className="nav-item">
            <a className="navbar-brand me-5 hb" aria-current="page" href="/"><small>Blogs</small></a>
          </li>
          <li className="nav-item">
            <a className="navbar-brand me-5 hb" href="/"><small>About </small></a>
          </li>
          <li className="nav-item">
            <a className="navbar-brand me-5 hb" aria-current="page" href="/"><small>Contract</small></a>
          </li>
          
         
        </ul>
        <a className="nav-link text-warning hb" href="http:/" style={{color:'white'}}><i className="bi bi-tags"></i> Daily Deals</a>
      </div>
    </div>
  </nav> */}

    <div className="container ">
        <div className="row  ">
          <div className="col-lg-3 col-sm-12 col-mb-6 mt-3">

           <div className={`list-group shadow p-0 mb-2 bg-${props.mode==='dark'?'dark':'body'} rounded `} >
                <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'body'} text-${props.mode==='dark'?'white':'body'}  `} id='li' aria-current="true">
                <i className="bi bi-columns-gap me-3"></i><small>All Offers</small>
                </a>
                <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'body'} text-${props.mode==='dark'?'white':'body'}  `} id='li'><i className="bi bi-cup-fill me-3"></i>
                <small>Tea Snacks</small> </a>
                <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'body'} text-${props.mode==='dark'?'white':'body'}  `} id='li'><i className="bi bi-bag-fill me-3"></i>
                <small>Meats</small></a>
                <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'body'} text-${props.mode==='dark'?'white':'body'}  `} id='li'><i className="bi bi-flower2 me-3"></i>
                <small>Fruits</small></a>
                <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'body'} text-${props.mode==='dark'?'white':'body'}  `} id='li'> <i className="bi bi-lungs-fill me-3"></i>
                <small>For Health</small></a>
                <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'body'} text-${props.mode==='dark'?'white':'body'}  `} id='li'> <i className="bi bi-command me-3"></i>
                <small> Dairy</small></a>
                <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'body'} text-${props.mode==='dark'?'white':'body'}  `} id='li'> <i class="bi bi-bag-plus-fill me-3"></i>
                <small>Seasonal</small> </a>
                <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'body'} text-${props.mode==='dark'?'warning':'warning'} `} id='li'> <i className="bi bi-qr-code me-3"></i>
                <small>View All Categories <i class="bi bi-play-fill"></i></small> </a>
             </div>


        </div>

{/* ---------------------------------------carousel-------------------------------- */}
        <div className="col-lg-9 col-sm-12 col-mb-6 my-3 ">
          
        <div id="carouselExampleDark" className="carousel carousel-light slide shadow p-0 mb-2 bg-body rounded" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={img} className="d-block w-100 " alt="carouselImageSample"/>
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={image} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item">
      <img src={img} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        
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
