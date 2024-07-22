import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { banner, blog, data, online, parentsay, photogallery, popularclasses, teacher } from '../Data';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function Eight() {
  return (
    <>
       <section className='py-5 call'>
    <div className="container">
      <div className="row text-center text-white">
        <div className="col-lg-12">
          <h1 className='callh'>Call To Enroll Your Child</h1>
        </div>
        <div className="col-lg-12">
          <p className='fs-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at eleifend est. Donec dictum at diam ut finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad litora torquent.</p>
        </div>
        <div className="col-lg-12">
          <p className='fs-4'> <img src="./image/phone_icon.png" alt="" /> (770) 132 4657</p>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Eight
