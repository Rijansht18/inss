import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { banner, blog, data, online, parentsay, photogallery, popularclasses, teacher } from '../Data';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function Three() {
  return (
    <>
       <section className='popular'>
    <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <h1 className='text-center fw-bolder text-white fs-1 mt-5'>Our Popular Classes</h1>
            </div>
            <div className="col-lg-12 d-flex justify-content-center my-4">
              <div className='line'></div>
            </div>
          </div>
          <div className="row">
        {popularclasses.slice(0,3).map((a)=>(
          <div key={a.id} className="col-lg-4">
            <div className="shadow popularbox">
              <div className='position-relative'>
              <img className='w-100' src={a.image} alt="" />
              <div className='time'>08:00 am - 10:00 am</div>
              </div>
              <div className='py-4 px-4'>
                <h3 className='blogh'>{a.title}</h3>
                <p>{a.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
          
          </div>
   </section>
    </>
  )
}

export default Three
