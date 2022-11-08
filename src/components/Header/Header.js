import React from 'react'
import logo from '../../img/logo.png';
import './Header.css';

export default function Header() {
  return (
    <div>
        {/* --------------------------------nav1---------------------------- */}
        <div className="row">
        <header className='header bg-success border col-lg-12 col-mb-12 col-sm-12'>
        <div className="nav-scroller  shadow-sm d-flex justify-content-end bg-dark">
            <nav className="nav bg-dark " aria-label="Secondary navigation d-flex justify-content-end" id='link-style'>
                <a className="nav-link  " id='link-style' aria-current="page" href="/"><b><i className="bi bi-phone text-success"></i> Call: 01776979756</b></a>
                <a className="nav-link  " href="/" id='link-style'><b className="text-warning"><i className="bi bi-geo-alt"></i> </b> 
                Track Order 
                <span className="badge text-bg-danger rounded-pill align-text-bottom"> 7</span>
                </a>
                <a className="nav-link " href="/" id='link-style'><i className="bi bi-book text-warning"></i> Compare</a>
                <a className="nav-link dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" href="/" id='link-style'><i className="bi bi-bookmark text-warning"></i> Blogs</a> 
            </nav>
        </div>
        </header>
        </div>

{/* --------Nav-2-------- */}

<nav className="pt-2 bg-body border-bottom  col-lg-12 col-mb-12 col-sm-12">
    <div className="container d-flex mb- ">
     
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
      <a href="https://web-design-and-tech-tips.com/">
          <img src={logo} width="100" height="50" alt="PristineHer" id="logo" data-height-percentage="100" data-actual-width="300" data-actual-height="150"/>
        </a></div>
      
        
        <div className="d-flex align-items-center me-auto p-2">
        <form className="w-200 mx-3" role="search">
          <input type="search" className="form-control" placeholder="I am looking for..." aria-label="Search"/>
        </form></div>

       <div className="d-flex justify-content-end p-2">
            <ul className="nav d-flex justify-content-end">
            <li className="nav-item"><a href="/" className="nav-link link-dark px-2"><i className="bi bi-heart"></i></a></li>
            <li className="nav-item"><a href="/" className="nav-link link-dark px-2"><i className="bi bi-bag"></i></a></li>
                 <li className="nav-item"><a href="/" className="nav-link link-dark px-2"><i className="bi bi-person"></i></a></li>
                <li className="nav-item" id='link-style'><a href="/" className="nav-link link-dark px-2">Login</a></li>
                <li className="nav-item" id='link-style'><a href="/" className="nav-link link-dark px-2">Register</a></li>
            </ul>
       </div>
      

    </div>
  </nav>

  

   


    </div>
   
  )
}


