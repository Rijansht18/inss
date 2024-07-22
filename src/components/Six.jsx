import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { banner, blog, data, online, parentsay, photogallery, popularclasses, teacher } from '../Data';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function Six() {
  return (
    <>
        <section className='photo py-5'>
    <div className="container">
      <div className="row d-flex justify-content-center align-content-between">
        <div className="col-lg-2">
          <h1 className='chead'>Photo Gallery</h1>
          <p>Lorem ipsum dolor sit amet, adipiscing elit. Vivamus nibh dolor, gravida faucibus dolor consectetur.</p>
          <button className='border-0 rounded-5 text-uppercase bg-warning text-white py-2 px-4 fw-semibold'>view all gallery</button>
        </div>
        <div className="col-lg-8">
          <div className="row">
          {photogallery.map((a) => (
              <div key={a.id} className="col-lg-4 mt-4 photoho">
              <img className="w-100" src={a.image} alt="" />
            </div>
            
          ))}
          </div>
        </div>

      </div>
    </div>
  </section>
    </>
  )
}

export default Six
