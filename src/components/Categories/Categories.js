import React from 'react';
import card from '../../img/seasonal.png';
import './Categories.css';


export default function Categories() {
   
  return (
    <div className='container my-5'>
        <div className="categories row">
            <div className="col-9 col-md-4 col-lg-9">
            <h5>Popular Categories</h5>
            </div>
            <div className="col-3 col-md-8 col-lg-3">
            <div className="accordion" id="accordionExample">
                        <div className="accordion-item" width="20px">
                        
                            <h6 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            View All Categories 
                            </button>
                            </h6>
                            </div>
                        </div>
            </div>
        
            

        </div>
        <hr />
        <div className="container">
            <div className="row">

                <div className="col-2">
                    <div className="card bg">
                        <img src={card} className="card-img-top w-100 bg" alt="..."/>
                        <div className="card-body ">
                             <h6 className="card-title bg text-center">Title</h6>
                         </div>
                    </div>
                </div>

                <div className="col-2">
                    <div className="card bg">
                        <img src={card} className="card-img-top w-100 bg" alt="..."/>
                        <div className="card-body ">
                             <h6 className="card-title bg text-center">Title</h6>
                         </div>
                    </div>
                </div>

                <div className="col-2">
                    <div className="card bg">
                        <img src={card} className="card-img-top w-100 bg" alt="..."/>
                        <div className="card-body ">
                             <h6 className="card-title bg text-center">Title</h6>
                         </div>
                    </div>
                </div>

                <div className="col-2">
                    <div className="card bg">
                        <img src={card} className="card-img-top w-100 bg" alt="..."/>
                        <div className="card-body ">
                             <h6 className="card-title bg text-center">Title</h6>
                         </div>
                    </div>
                </div>

                <div className="col-2">
                    <div className="card bg">
                        <img src={card} className="card-img-top w-100 bg" alt="..."/>
                        <div className="card-body ">
                             <h6 className="card-title bg text-center">Title</h6>
                         </div>
                    </div>
                </div>

                <div className="col-2">
                    <div className="card bg">
                        <img src={card} className="card-img-top w-100 bg" alt="..."/>
                        <div className="card-body ">
                             <h6 className="card-title bg text-center">Title</h6>
                         </div>
                    </div>
                </div>


             </div>
            
            
        </div>
    </div>
  )
}
