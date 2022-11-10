import React from 'react';
import card from '../../img/seasonal.png';
import card2 from '../../img/forhealth.png';
import card3 from '../../img/fruits.png';
import card4 from '../../img/meat.png';
import card5 from '../../img/Dairy.png';
import card6 from '../../img/snacks.png';
import './Categories.css';


export default function Categories(props) {
   
  return (
    <div className='container my-5'>
        <div className={`categories row text-${props.mode==='dark'?'warning':'dark'}`}>
            <div className="col-9 col-md-4 col-lg-9">
            <h5>Popular Categories</h5>
            </div>
            <div className={`col-3 col-md-8 col-lg-3 d-flex justify-content-end text-${props.mode==='dark'?'warning':'dark'}`}>
               <a href='/' alt="" className={`nav-link a text-${props.mode==='dark'?'warning':'dark'}`}> <h6>View All Categories <i class="bi bi-play-fill"></i></h6></a>
            </div>
        
            <hr />

        </div>
        
        <div className="container">
            <div className="row ">

                <div className="col-lg-2 col-md-4 col-sm-12 ">
                    <div className={`card bg h shadow p-3 mb-5 bg-${props.mode==='dark'?'secondary':'body'} rounded`}>
                        <a href="/" alt="">
                        <img src={card} className="card-img-top w-100 bg" alt="..."/>
                        <div className="card-body ">
                             <h6 className="card-title bg text-center">Seasonal</h6>
                         </div></a>

                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-12 ">
                    <div className={`card bg h shadow p-3 mb-5 bg-${props.mode==='dark'?'secondary':'body'} rounded`}>
                    <a href="/" alt="">
                        <img src={card2} className="card-img-top w-100 bg" alt="..."/>
                        <div className="card-body ">
                             <h6 className="card-title bg text-center">For Health</h6>
                         </div></a>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-12">
                    <div className={`card bg h shadow p-3 mb-5 bg-${props.mode==='dark'?'secondary':'body'} rounded`}>
                    <a href="/" alt="">
                        <img src={card3} className="card-img-top w-100 bg" alt="..."/>
                        <div className="card-body ">
                             <h6 className="card-title bg text-center">Fruits</h6>
                         </div></a>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-12">
                    <div className={`card bg h shadow p-3 mb-5 bg-${props.mode==='dark'?'secondary':'body'} rounded`}>
                    <a href="/" alt="">
                        <img src={card4} className="card-img-top w-100 bg" alt="..."/>
                        <div className="card-body ">
                             <h6 className="card-title bg text-center">Meat</h6>
                         </div></a>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-12">
                    <div className={`card bg h shadow p-3 mb-5 bg-${props.mode==='dark'?'secondary':'body'} rounded`}>
                        <a href="/" alt="">
                        <img src={card5} className="card-img-top w-100 bg" alt="..."/>
                        <div className="card-body ">
                             <h6 className="card-title bg text-center">Dairy</h6>
                         </div></a>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-12">
                    <div className={`card bg h shadow p-3 mb-5 bg-${props.mode==='dark'?'secondary':'body'} rounded`}>
                        <a href="/" alt="">
                        <img src={card6} className="card-img-top w-100 bg" alt="..."/>
                        <div className="card-body ">
                             <h6 className="card-title bg text-center">Tea Snacks</h6>
                         </div></a>
                    </div>
                </div>


             </div>
            
            
        </div>
    </div>
  )
}
