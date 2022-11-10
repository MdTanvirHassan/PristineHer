import React from 'react'
import logo from '../../img/logo.png';
import './Footer.css';

export default function Footer(props) {
    
  return (
    <div className={`bg-${props.mode==='dark'?'secondary':'success'} `}>
        <div className="container ">
            <footer className="py-5">
                <div className="px-2"><img src={logo} alt='..' width="100px"></img></div><hr />
                <div className="row">
                <div className="col-6 col-md-2 mb-3">
                    <h5>My Account</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="/"  id='footer' className="nav-link p-0 text-muted">Login</a></li>
                    <li className="nav-item mb-2"><a href="/"  id='footer' className="nav-link p-0 text-muted">Create Account</a></li>
                    
                    <li className="nav-item mb-2"><a href="/"  id='footer' className="nav-link p-0 text-muted">About</a></li>
                    </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                    <h5>Useful Links</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="/"  id='footer' className="nav-link p-0 text-muted">Latest News</a></li>
                    <li className="nav-item mb-2"><a href="/"  id='footer' className="nav-link p-0 text-muted">Terms & Conditions</a></li>
                    <li className="nav-item mb-2"><a href="/"  id='footer' className="nav-link p-0 text-muted">Privacy Policy</a></li>
                    <li className="nav-item mb-2"><a href="/"  id='footer' className="nav-link p-0 text-muted">Refund Policy</a></li>
                    
                    </ul>
                </div>

                <div className="col-8 col-md-2 mb-3">
                    <h5>Contact Us</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="/"  id='footer' className="nav-link p-0 text-muted">Home</a></li>
                    <li className="nav-item mb-2"><a href="/"  id='footer' className="nav-link p-0 text-muted">Features</a></li>
                    <li className="nav-item mb-2"><a href="/"  id='footer' className="nav-link p-0 text-muted">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="/"  id='footer' className="nav-link p-0 text-muted">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="/"  id='footer' className="nav-link p-0 text-muted">About</a></li>
                    </ul>
                </div>

                <div className="col-4 col-md-5 offset-md-1 mb-3">
                   
                    <h5>About</h5>
                    {/* <p className='text'><b>Pristine Herbal </b>being the trusted online shop in over the world aims to provide a trouble-free shopping experience for the people of the world but is also providing ample opportunity for international online shopping from Pristine Herbal. This shop being the trusted online shop in over the world aims to provide a trouble-free shopping experience for the people of the world but is also providing ample opportunity for international online shopping from </p> */}
                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                        <ul className='nav'>
                            <li className='nav-item'><a className='nav-link socialLink' href='/' alt='...'><i className="bi bi-facebook"></i></a></li>
                        </ul>
                        <ul className='nav'>
                            <li className='nav-item'><a className='nav-link socialLink' href='/' alt='...'><i className="bi bi-twitter"></i></a></li>
                        </ul>
                        <ul className='nav'>
                            <li className='nav-item'><a className='nav-link socialLink' href='/' alt='...'><i className="bi bi-envelope"></i></a></li>
                        </ul>
                        <ul className='nav'>
                            <li className='nav-item'><a className='nav-link socialLink' href='/' alt='...'><i className="bi bi-linkedin"></i></a></li>
                        </ul>
                        <ul className='nav'>
                            <li className='nav-item'><a className='nav-link socialLink' href='/' alt='...'><i className="bi bi-youtube"></i></a></li>
                        </ul>
                        
                    </div>
                  
                </div>
                </div>
{/* ------------------------------------footerNav----------------------------------- */}
                <div className="footerNav">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid text">
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link  text" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item text">
                            <a className="nav-link text" href="/">All Categories</a>
                            </li>
                            <li className="nav-item ">
                            <a className="nav-link text" href="/">All Brands</a>
                            </li>
                            <li className="nav-item ">
                            <a className="nav-link text" href="/">All Products</a>
                            </li>
                            <li className="nav-item ">
                            <a className="nav-link text" href="/">Blogs</a>
                            </li>
                            <li className="nav-item ">
                            <a className="nav-link text" href="/">Campaigns</a>
                            </li>
                            
                        </ul>
                        </div>
                    </div>
                    </nav>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p className='text'>&copy; Copyright 2022, All Rights Reserved By Bee Technology and Research Hub.</p>
                <ul className="list-unstyled d-flex">
                    <li className="ms-3"><a className="link-dark" href="/"  id='footer'><i className="bi bi-facebook"></i></a></li>
                    <li className="ms-3"><a className="link-dark" href="/"  id='footer'><i className="bi bi-twitter"></i></a></li>
                    <li className="ms-3"><a className="link-dark" href="/"  id='footer'><i className="bi bi-linkedin"></i></a></li>
                </ul>
                </div>
            </footer>
        
            </div>





    </div>
  )
}
