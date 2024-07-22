import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { banner, blog, data, online, parentsay, photogallery, popularclasses, teacher } from '../Data';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function Nine() {
  return (
    <>
       <section className='py-5 '>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className='chead text-center'>Our Teachers</h1>
        </div>
        {teacher.slice(0,4).map((a)=>(
          <div key={a.id} className="col-lg-3 techo">
          <div className='shadow'>
            <img className='w-100 mb-2' src={a.image} alt="" />
            <div className='py-4 px-3 text-center'>
              <h3>{a.name}</h3>
              <p>{a.sub}</p>
            </div>
          </div>
          <div className="techdec d-flex justify-content-around p-2 text-white fs-4">
              <i className="bi bi-facebook" />
              <i className="bi bi-twitter" />
              <i className="bi bi-linkedin" />
              <i className="bi bi-instagram" />
          </div>
        </div>
        
        ))}
      </div>
    </div>
  </section>
    </>
  )
}

export default Nine
