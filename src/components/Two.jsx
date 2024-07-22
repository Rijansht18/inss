import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { banner, blog, data, online, parentsay, photogallery, popularclasses, teacher } from '../Data';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function Two() {
  return (
    <>
      <section className='py-3'>
    <div className="container">
      <div className="row">
      <div className="col-lg-1"></div>
        <div className="col-lg-6">
            <img className='w-100' src="./image/aboutImg.png" alt="" />
        </div>
        <div className="col-lg-4">
          <h1 className='fw-bolder'>Online Learing
          PLatform</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh dolor, gravida faucibus dolor consectetur, pulvinar rhoncus risus. Fusce vel rutrum mi.</p>
          {online.map((a)=>(
            <div key={a.id} className="row ">
              <div className="col-lg-3 mt-4 ">
                <div className="rounded-circle bg-primary overflow-hidden py-3" style={{ width: '70px', height: '100px' }}>
                  <img src={a.image} style={{ width: '100%', objectFit: 'cover' }} alt="" />
                </div>
              </div>
              <div className="col-lg-9 mt-4">
                <h3>{a.title}</h3>
                <p>{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   </section>
    </>
  )
}

export default Two
