import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { banner, blog, data, online, parentsay, photogallery, popularclasses, teacher } from '../Data';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function Four() {
  return (
    <>
       <section className='choice py-3'>
       <div className="container">
       <div className="row">
          <div className="col-lg-12 text-center mt-3">
            <h1 className='chead'>We Are The Best <br/>
            Choice For Your Child</h1>
          </div>
          <div className="col-lg-12 text-center fs-5 mt-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at eleifend est. Donec dictum at diam ut finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam diam magna, condimentum in nibh sed, mattis fermentum diam.</p>
          </div>
          <div className="col-lg-12 text-center my-5">
            <button className='bg-danger rounded-5 py-3 px-4 border-0'>
              <a className='text-white text-uppercase text-decoration-none fw-semibold' href="#">contact us</a>
            </button>
          </div>
        </div>
       </div>
   </section>
    </>
  )
}

export default Four
