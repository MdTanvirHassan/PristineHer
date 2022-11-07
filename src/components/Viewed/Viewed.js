import React from 'react'
import './Viewed.css';

export default function Viewed() {
  return (
    <div>
        <div className='container mt-5'>
         <div className="categories row">
            <div className="col-9 col-md-4 col-lg-9">
                <h5>Recently Viewed</h5>
            </div>
            <div className="col-3 col-md-8 col-lg-3 d-flex justify-content-end ">
               <a href='/' alt="" className='nav-link a'> <h6>More <i class="bi bi-play-fill"></i></h6></a>
            </div>
            <hr />
         </div>
        </div>



        <div className="container py-5">
            <div className="row">
                <di className="col-2">
                    <span class="border border-2"></span>
                </di>
                <di className="col-2">
                    <span class="border border-2"></span>
                </di>
                <di className="col-2">
                    <span class="border border-2"></span>
                </di>
                <di className="col-2">
                    <span class="border border-2"></span>
                </di>
                <di className="col-2">
                    <span class="border border-2"></span>
                </di>
                <di className="col-2">
                    <span class="border border-2"></span>
                </di>

            </div>

            <div className="context text-justify">
                <p id='text-justify'>Online Shopping BD has never been easier. pristineherbbd.com is the best online shopping store in Bangladesh that features 10+ million products at affordable prices. As Bangladesh's online shopping landscape is expanding every year, online shopping in Dhaka, Chittagong, Khulna, Sylhet, and other big cities is also gaining momentum. Pristine Herbal is among the best websites for online shopping in Bangladesh that promises fast, reliable, and convenient delivery of products to your doorstep. Pristine Herbal being the trusted online shop in Bangladesh aims to provide a trouble-free shopping experience for the people of Bangladesh but is also providing ample opportunity for international online shopping from Bangladesh. Pristine Herbal aims to make online shopping accessible to all parts of the country.</p> <br />

                <p>Everyone is encouraged to shop with confidence at pristineherbbd.com as our strict buyer’s protection policies ensure no risks while shopping online. </p><br />

                <p>Among tons of online stores in Bangladesh, Pristine Herbal aims to strictly adhere to international quality standards ensuring trust and reliability in customer service and originality in product delivery. Realizing the surge in e-commerce</p>
            </div><hr />

            <div className='container'>
                <div className="row">
                    <div className="col-4">
                    <a href="/" className="view" alt='...'> <h6 className="view">Tea Snacks</h6></a>
                    <a href="/" className="view" alt='...'> <h6 className="view">Fruits</h6></a>

                    </div>
                    <div className="col-4">
                    <a href="/" className="view" alt='...'><h6 className="view">Dairy</h6></a>
                    <a href="/" className="view" alt='...'> <h6 className="view">For Health</h6></a>
                    </div>
                    <div className="col-4">
                    <a href="/" className="view" alt='...'><h6 className="view">Meat</h6></a>
                    <a href="/" className="view" alt='...'> <h6 className="view">Seasonal</h6></a>
                    </div>
                </div>

            </div>


    
        </div>




    </div>
  )
}
