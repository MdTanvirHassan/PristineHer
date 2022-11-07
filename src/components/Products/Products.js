import React from 'react';
import img from '../../img/p1.png';
import img2 from '../../img/p2.png';
import img3 from '../../img/3.png';
import img4 from '../../img/p4.png';

export default function Products() {
  return (
    <div>

    <div className='container mt-5'>
         <div className="categories row">
            <div className="col-9 col-md-4 col-lg-9">
                <h5>Today Products</h5>
            </div>
            <div className="col-3 col-md-8 col-lg-3 d-flex justify-content-end ">
               <a href='/' alt="" className='nav-link a'> <h6>More Products <i class="bi bi-play-fill"></i></h6></a>
            </div>
            <hr />
         </div>
        </div>



        <div className='container'>
            <div className='row mb-2'>

                <div class="col-2">
                    <div class="card h-100 shadow p-3 mb-5 bg-body rounded">
                        <img src={img} class="card-img-top " alt="..."/>
                        <div class="card-body text-center">
                            <h6 class="card-title"><b>৳</b>26.99</h6>
                            <p class="card-text">Product Name</p>
                            <p className='rate'>★★★★★</p>
                        </div>
                    </div>
                </div>

                <div class="col-2">
                    <div class="card h-100 shadow p-3 mb-5 bg-body rounded">
                        <img src={img4} class="card-img-top" alt="..."/>
                        <div class="card-body text-center">
                            <h6 class="card-title"><b>৳</b>67.99</h6>
                            <p class="card-text">Product Name</p>
                            <p className='rate'>★★★★★</p>
                        </div>
                    </div>
                </div>

                <div class="col-2">
                    <div class="card h-100 shadow p-3 mb-5 bg-body rounded">
                        <img src={img3} class="card-img-top" alt="..."/>
                        <div class="card-body text-center">
                            <h6 class="card-title"><b>৳</b>42.00</h6>
                            <p class="card-text">Product Name</p>
                            <p className='rate'>★★★★★</p>
                        </div>
                    </div>
                </div>

                <div class="col-2">
                    <div class="card h-100 shadow p-3 mb-5 bg-body rounded">
                        <img src={img} class="card-img-top" alt="..."/>
                        <div class="card-body text-center">
                            <h6 class="card-title"><b>৳</b>26.99</h6>
                            <p class="card-text">Product Name</p>
                            <p className='rate'>★★★★★</p>
                        </div>
                    </div>
                </div>

                <div class="col-2">
                    <div class="card h-100 shadow p-3 mb-5 bg-body rounded">
                        <img src={img2} class="card-img-top" alt="..."/>
                        <div class="card-body text-center">
                            <h6 class="card-title"><b>৳</b>26.99</h6>
                            <p class="card-text">Product Name</p>
                            <p className='rate'>★★★★★</p>
                        </div>
                    </div>
                </div>

                <div class="col-2">
                    <div class="card h-100 shadow p-3 mb-5 bg-body rounded">
                        <img src={img} class="card-img-top" alt="..."/>
                        <div class="card-body text-center">
                            <h6 class="card-title"><b>৳</b>26.99</h6>
                            <p class="card-text">Product Name</p>
                            <p className='rate'>★★★★★</p>
                        </div>
                    </div>
                </div>






            </div>
        </div>




    </div>
  )
}
