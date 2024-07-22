import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { banner, blog, data, online, parentsay, photogallery, popularclasses, teacher } from '../Data';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function Ten() {
  return (
    <>
      <section className='py-5 blog'>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center my-4">
          <h1 className='chead'>Our Blog</h1>
        </div>
      </div>
      <div className="row">
        {blog.slice(0,3).map((a)=>(
          <div key={a.id} className="col-lg-4">
            <div className="shadow blogbox">
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

export default Ten
