import React, { useRef, useState }  from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { banner, blog, data, online, parentsay, photogallery, popularclasses, teacher } from '../Data';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function Seven() {
  return (
    <>
<section className='parents py-5'>
  <div className="container">
    <h3 className='text-center text-secondary'>TESTIMOINIALS</h3>
    <h1 className='chead text-center mb-5'>What Parents Say</h1>
    <Swiper
      slidesPerView={1}
      spaceBetween={5}
      loop={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {parentsay.map((a) => (
        <SwiperSlide key={a.id} className="swiper-slide-custom" >
          <div className='psbox py-5' style={{ position: 'relative' }}>
            <div className='text-center'>
              <div className='text-warning d-flex justify-content-center gap-1'>
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
              </div>
              <div className='text-white px-3'>
                <p className='fw-lighter'>{a.description}</p>
                <h3>{a.name}</h3>
                <h5 className='fw-lighter'>{a.job}</h5>
              </div>
            </div>
            <div className="photop" ><img className='photoop-img' src={a.image} alt="" /></div>
            <div className="sym "><i className="bi bi-quote"></i>
</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
 </div>
  </section>
  </>
  )
}

export default Seven
