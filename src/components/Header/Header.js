import React from 'react'
import logo from '../../img/logo.png';
import './Header.css';

export default function Header(props) {
  return (
    <div>
        {/* --------------------------------nav1---------------------------- */}
        <div className="full-container row">
        <header className={`header navbar-expand-lg bg-${props.mode==='dark'?'dark':'body'} border col-lg-12 col-mb-12 col-sm-12`}>
        <div className={`nav-scroller navbar-expand-lg  shadow-sm d-flex justify-content-end bg-${props.mode==='dark'?'dark':'light'}`}>
            <nav className={`nav bg-${props.mode==='dark'?'dark':'light'} text-${props.mode==='dark'?'body':'success'} navbar-expand-lg  " aria-label="Secondary navigation d-flex justify-content-end" id='link-style`}>
                <a className={`nav-link text-${props.mode==='dark'?'white':'success'} `} id='link-style' aria-current="page" href="/"><b><i className="bi bi-phone text-warning"></i> Call:+880177-6979756</b></a>
                <a className={`nav-link text-${props.mode==='dark'?'white':'success'} `} href="/" id='link-style'><b className="text-warning"><i className="bi bi-geo-alt"></i> </b>Track Order <span className="badge text-bg-danger rounded-pill align-text-bottom"> 7</span>
                </a>
                <a className={`nav-link text-${props.mode==='dark'?'white':'success'} `} href="/" id='link-style'><b className="text-warning"><i className="bi bi-cart"></i> </b> Cart
                <span className="badge text-bg-danger rounded-pill align-text-bottom"> 7</span>
                </a>
                
                <a className={`nav-link text-${props.mode==='dark'?'white':'success'} `} href="/" id='link-style'><i className="bi bi-book text-warning"></i> Compare</a>
                <a className={`nav-link text-${props.mode==='dark'?'white':'success'} dropdown-toggle me-1 " data-bs-toggle="dropdown`} aria-expanded="false" href="/" id='link-style'><i className="bi bi-bookmark text-warning"></i> Blogs  </a> 
                <div className={`nav-item nav-link form-check  form-switch text-${props.mode==='dark'?'light':'secondary'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label text-warning" htmlFor="flexSwitchCheckDefault"><i className={` w-10 bi bi-${props.mode==='dark'?'sun':'moon-fill'}`}></i></label>
                        </div>
            </nav>
        </div>
        </header>
        </div>

{/* --------Nav-2-------- */}
<header className={`p-3 mb-3 border-bottom bg-${props.mode==='dark'?'secondary':'body'} `}>
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <img src={logo} alt='...' className="bi me-2"  width="100" height="60"  aria-label="Bootstrap"/>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" className="nav-link px-2 link-secondary">Overview</a></li>
          {/* <li><a href="/" className="nav-link px-2 link-dark">Inventory</a></li> */}
          <li>
              {/* ---------------------------- */}
              <a className={` nav-link px-2 link-${props.mode==='dark'?'warning':'success'}`} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"><b><i className="bi bi-person text-warning"></i> Log-in/Sign-Up</b></a>


                                          <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                            <div className="offcanvas-header">
                                              <h5 className="offcanvas-title" id="offcanvasExampleLabel">PristineHer</h5>
                                              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                            </div>
                                            <div className="offcanvas-body">
                                              <div>
                                                Log-in / Sign-Up
                                              </div>
                                              <div className="dropdown mt-3">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                                  Select
                                                </button>
                                                <ul className="dropdown-menu">
                                                  <li><a className="dropdown-item" href='/'>Login</a></li>
                                                  <li><a className="dropdown-item" href='/'>sign-Up</a></li>
                                                  <li><a className="dropdown-item" href='/'>Something else here</a></li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
{/* ------------------------------------------------------------------- */}
            </li>
          {/* <li><a href="/" className="nav-link px-2 link-dark">Products</a></li> */}
        </ul>

        <form className="col-12  mb-3 mb-lg-0 me-lg-3 w-50 me-3" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="dropdown text-end">
          <a href="/" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
          </a>
          <ul className={`dropdown-menu text-small text-${props.mode==='dark'?'warning':'body'} bg-${props.mode==='dark'?'secondary':'body'}`}>
            <li><a className="dropdown-item" href="/">Overview</a></li>
            <li><a className="dropdown-item" href="/">Settings</a></li>
            <li><a className="dropdown-item" href="/">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item text-danger" href="/">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>

{/* <nav className={`pt-2 navbar-expand-lg bg-${props.mode==='dark'?'secondary':'body'} border-bottom  col-lg-12 col-mb-12 col-sm-12`}>
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
                <li className="nav-item d-flex flex-wrap" id='link-style'><a href="/" className="nav-link link-dark px-2">Login</a></li>
                <li className="nav-item d-flex flex-wrap" id='link-style'><a href="/" className="nav-link link-dark px-2">Register</a></li>
            </ul>
       </div>
      

    </div>
  </nav> */}

  

   


    </div>
   
  )
}


