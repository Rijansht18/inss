import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { banner, blog, data, online, parentsay, photogallery, popularclasses, teacher } from '../Data';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {initLightboxJS} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox} from 'lightbox.js-react'
import Two from '../components/Two';
import Six from '../components/Six';
import Seven from '../components/Seven';
import Eight from '../components/Eight';
import Nine from '../components/Nine';
function About() {
  return (
   <>
    <section className='py-3 abouttop mb-5'>
        <div className="container">
          <h1 className='text-white text-uppercase fw-bold text-center'>about</h1>
        </div>
      </section>
    <Two/>
    <Six/>
    <Seven/>
    <Eight/>
    <Nine/>
   </>
  )
}

export default About
