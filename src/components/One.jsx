import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { banner, blog, data, online, parentsay, photogallery, popularclasses, teacher } from '../Data';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function One() {
  return (
    <>
       <section className='bannersec'>
  <div className="position-relative">
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={2}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 500,
      }}
      className="mySwiper"
    >
      {banner.map((a) => (
      <SwiperSlide key={a.id} style={{ backgroundImage: `url(${a.image})`, height: '700px' }}>
      <div className="container position-relative">
        <div data-aos="fade-down">
          <h1 className='text-light fw-bold text-center pt-5 fs-1'>{a.title}</h1>
        </div>
        <div data-aos="fade-up">
          <p className='text-light fw-bold text-center pt-5 fs-4'>{a.description}</p>
        </div>
        <div className='d-flex justify-content-center gap-5 mt-5'>
          <div data-aos="fade-up">
            <button type="button" className="btn btn-enroll btn-lg rounded-5">
              <i className="bi bi-pencil" /> {a.btn1}
            </button>
          </div>
          <div data-aos="fade-up">
            <button type="button" className="btn btn-schedule btn-lg rounded-5">
              <i className="bi bi-calendar" /> {a.btn2}
            </button>
          </div>
        </div>
      </div>
    </SwiperSlide>
    
  
      ))}
    </Swiper>
  </div>
  <div className='container bannerend'>
    <div className="row g-3 mx-auto">
      {data.map((a) => (
        <div className={`col-12 col-sm-6 col-md-4 col-lg-3 bannerendbox position-relative bg-${a.color} text-center mx-2 rounded-4`} key={a.id} style={{ paddingTop: '45px' }}>
          <div className="position-absolute adv translate-middle-x">
            <div className="rounded-circle bg-white overflow-hidden" style={{ width: '90px', height: '90px' }}>
              <img src={a.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div className="line1"></div>
          <div className="mt-5">
            <h5 className="card-title fw-bold">{a.title}</h5>
            <p className="card-text">{a.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  </section>
    </>
  )
}

export default One
