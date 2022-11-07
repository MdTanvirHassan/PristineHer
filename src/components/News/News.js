import React from 'react'
import img from '../../img/n1.png';
import img2 from '../../img/n2.png';
import img3 from '../../img/n3.png';
import img4 from '../../img/n4.png';
import './News.css';

export default function News() {
  return (
    <div>
        <div className='container mt-5'>
         <div className="categories row">
            <div className="col-9 col-md-4 col-lg-9">
                <h5>Latest News</h5>
            </div>
            <div className="col-3 col-md-8 col-lg-3 d-flex justify-content-end ">
               <a href='/' alt="" className='nav-link a'> <h6>More <i className="bi bi-play-fill"></i></h6></a>
            </div>
            <hr />
         </div>
        </div>

       

        <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                    <div className="col-3">
                        <div className="card shadow-sm shadow p-3 mb-5 bg-body rounded">
                            <img src={img} alt="..." srcset="" />

                            <div className="card-body">
                                <p className="card-text2">This is a wider card with supporting text2 below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <a className='nav nav-link text2' href="/" alt=".."><b>Read More</b></a>
                                </div>
                                    <small className="text2-muted">2 days ago</small>
                                </div>
                            </div>
                        </div>                       
                    </div>

                    <div className="col-3">
                        <div className="card shadow-sm shadow p-3 mb-5 bg-body rounded">
                            <img src={img2} alt="..." srcset="" />

                            <div className="card-body">
                                <p className="card-text2">This is a wider card with supporting text2 below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <a className='nav nav-link text2' href="/" alt=".."><b>Read More</b></a>
                                </div>
                                    <small className="text2-muted">6 days ago</small>
                                </div>
                            </div>
                        </div>                       
                    </div>

                    <div className="col-3">
                        <div className="card shadow-sm shadow p-3 mb-5 bg-body rounded">
                            <img src={img3} alt="..." srcset="" />

                            <div className="card-body">
                                <p className="card-text2">This is a wider card with supporting text2 below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <a className='nav nav-link text2' href="/" alt=".."><b>Read More</b></a>
                                </div>
                                    <small className="text2-muted">9 days ago</small>
                                </div>
                            </div>
                        </div>                       
                    </div>

                    <div className="col-3">
                        <div className="card shadow-sm shadow p-3 mb-5 bg-body rounded">
                            <img src={img4} alt="..." srcset="" />

                            <div className="card-body">
                                <p className="card-text2">This is a wider card with supporting text2 below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <a className='nav nav-link text2' href="/" alt=".."><b>Read More</b></a>
                                </div>
                                    <small className="text2-muted">10 days ago</small>
                                </div>
                            </div>
                        </div>                       
                    </div>

            </div>
        </div>


    </div>
  )
}
