import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { banner, blog, data, online, parentsay, photogallery, popularclasses, teacher } from '../Data';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function Five() {
  return (
    <>
     <section className='py-5'>
    <div className="container">
        <h1 className='chead text-center mb-4'>Watch Our Video</h1>
        <div className="videobg shadow position-relative">
        <button type="button" className="btn btn-primary border-0 position-absolute top-50 start-50 translate-middle bg-transparent" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <div className="rounded-circle bg-white d-flex align-items-center justify-content-center" style={{width: 100, height: 100}}>
            <i className="bi bi-play-fill text-danger" style={{fontSize: 80}} />
          </div>
        </button>
        </div>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" style={{ maxWidth: '800px', height: '600px' }}>
            <div className="modal-content" style={{ height: '100%' }}>
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body" style={{ height: 'calc(100% - 58px)' }}>
                <iframe className='w-100 h-100' src="https://www.youtube.com/embed/PZY-hB2C_Iw" title="Morning Circle at Preschool" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
              </div>
            </div>
          </div>
        </div>
    </div>
  </section> 
    </>
  )
}

export default Five
