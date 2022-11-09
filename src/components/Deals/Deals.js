import React from 'react'
import './Deals.css'
import img from '../../img/p1.png';
import img2 from '../../img/p2.png';
import img3 from '../../img/3.png';
import img4 from '../../img/p4.png';

export default function Deals(props) {
  return (
    <div>
        <div className='container '>
         <div className={`categories row text-${props.mode==='dark'?'dark':'warning'}`}>
            <div className="col-9 col-md-4 col-lg-9">
                <h5>Today Deals</h5>
            </div>
            <div className="col-3 col-md-8 col-lg-3 d-flex justify-content-end ">
               <a href='/' alt="" className='nav-link ' > <h6>More Products <i className="bi bi-play-fill"></i></h6></a>
            </div>
            <hr />
         </div>
        </div>



        <div className='container'>
            <div className='row mb-2'>

                <div className="col-lg-2 col-md-4 col-sm-12">
                    <div className={`card h-80 shadow p-2 mb-3 bg-${props.mode==='dark'?'secondary':'body'} rounded text-${props.mode==='dark'?'dark':'warning'}`}> 
                        <img src={img} className="card-img-top " alt="..."/>
                        <div className="card-body text-center">
                            <h6 className="card-title">৳26.99</h6>
                            <p className="card-text">Product Name</p>
                            <p className='rate'>★★★★★</p>
                            <button className="btn btn-warning" href="/"><small>Add to Cart</small></button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-12">
                   <div className={`card h-80 shadow p-2 mb-3 bg-${props.mode==='dark'?'secondary':'body'} rounded text-${props.mode==='dark'?'dark':'warning'}`}>
                        <img src={img4} className="card-img-top" alt="..."/>
                        <div className="card-body text-center">
                            <h6 className="card-title">৳67.99</h6>
                            <p className="card-text">Product Name</p>
                            <p className='rate'>★★★★★</p>
                            <button className="btn btn-warning" href="/"><small>Add to Cart</small></button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-12">
                   <div className={`card h-80 shadow p-2 mb-3 bg-${props.mode==='dark'?'secondary':'body'} rounded text-${props.mode==='dark'?'dark':'warning'}`}>
                        <img src={img3} className="card-img-top" alt="..."/>
                        <div className="card-body text-center">
                            <h6 className="card-title">৳42.00</h6>
                            <p className="card-text">Product Name</p>
                            <p className='rate'>★★★★★</p>
                            <button className="btn btn-warning" href="/"><small>Add to Cart</small></button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-12">
                   <div className={`card h-80 shadow p-2 mb-3 bg-${props.mode==='dark'?'secondary':'body'} rounded text-${props.mode==='dark'?'dark':'warning'}`}>
                        <img src={img} className="card-img-top" alt="..."/>
                        <div className="card-body text-center">
                            <h6 className="card-title">৳26.99</h6>
                            <p className="card-text">Product Name</p>
                            <p className='rate'>★★★★★</p>
                            <button className="btn btn-warning" href="/"><small>Add to Cart</small></button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-12">
                   <div className={`card h-80 shadow p-2 mb-3 bg-${props.mode==='dark'?'secondary':'body'} rounded text-${props.mode==='dark'?'dark':'warning'}`}>
                        <img src={img2} className="card-img-top" alt="..."/>
                        <div className="card-body text-center">
                            <h6 className="card-title">৳26.99</h6>
                            <p className="card-text">Product Name</p>
                            <p className='rate'>★★★★★</p>
                            <button className="btn btn-warning" href="/"><small>Add to Cart</small></button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-12">
                   <div className={`card h-80 shadow p-2 mb-3 bg-${props.mode==='dark'?'secondary':'body'} rounded text-${props.mode==='dark'?'dark':'warning'}`}>
                        <img src={img} className="card-img-top" alt="..."/>
                        <div className="card-body text-center">
                            <h6 className="card-title">৳26.99</h6>
                            <p className="card-text">Product Name</p>
                            <p className='rate'>★★★★★</p>
                            <button className="btn btn-warning" href="/"><small>Add to Cart</small></button>
                        </div>
                    </div>
                </div>






            </div>
        </div>


    </div>
  )
}
