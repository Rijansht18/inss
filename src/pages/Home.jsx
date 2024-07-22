import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { banner, blog, data, online, parentsay, photogallery, popularclasses, teacher } from '../Data';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import One from '../components/One';
import Two from '../components/Two';
import Three from '../components/Three';
import Four from '../components/Four';
import Five from '../components/Five';
import Six from '../components/Six';
import Seven from '../components/Seven';
import Eight from '../components/Eight';
import Nine from '../components/Nine';
import Ten from '../components/Ten';
AOS.init();
function Home() {
  return (
    <>
      <One/>
      <Two/>
      <Three/>
      <Four/>
      <Five/>
      <Six/>
      <Seven/>
      <Eight/>
      <Nine/>
      <Ten/>
    </>
  
  )
}

export default Home
