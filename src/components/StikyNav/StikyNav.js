import React from 'react'

export default function StikyNav() {
  return (
    <div>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-success text=dark " aria-label="Eighth navbar example">
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
  </nav>
    </div>
  )
}
