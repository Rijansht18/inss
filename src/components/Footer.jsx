import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Classes from '../pages/Classes'
import Teachers from '../pages/Teachers'
import Contact from '../pages/Contact'
function Footer() {
  return (
    <>
      <section className='py-3 footert'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className='text-light fw-bold '>Newsletter</h1>
                    <p className='text-light fs-5'>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="col-lg-6 d-flex ">
                    <div className='signup-box'>
                        <i className="bi bi-envelope-fill text-body-tertiary"></i>
                        <form action="">
                            <input type="text" placeholder='Email Address' className='form1' />
                        </form>
                    </div>
                    <button className='signup-button'>sign up</button>
                </div>
            </div>
        </div>
      </section>
      <footer className='py-5'>
        <div className="container">
        <div className="row">
              <div className="col-lg-3 ">
                <img src="./image/logo.png" className='mb-3' />
                <p>Lorem ipsum dolor sit amet, adipiscing elit. Sed tempor, urna eu scelerisque maximus, urna nibh semper lectus, ut interdum nunc ligula et magna. In ac mauris vehicula, vulputate sem at, placerat nisl. Etiam laoreet erat magna, at hendrerit lorem vulputate non. Nam facilisis congue convallis.</p>
              </div>
              <div className="col-lg-3 px-5">
                <h5>Quick links</h5>
                <ul className="list-unstyled ">
                  <li><Link className='quick' to='/'>Home</Link></li>
                  <li><Link className='quick' to='/about'>About</Link></li>
                  <li><Link className='quick' to='/classes'>Classes</Link></li>
                  <li><Link className='quick' to='/teachers'>Teachers</Link></li>
                  <li><Link className='quick' to='/blog'>Blog</Link></li>
                  <li><Link className='quick' to='/contact'>Contact Us</Link></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h5>Opening Hours</h5>
                <ul className="list-unstyled">
                <li className="border-bottom pb-1"><i className="bi bi-caret-right-fill"></i> Monday: 08:00 - 02:00</li>
                <li className="border-bottom pb-1"><i className="bi bi-caret-right-fill"></i> Tuesday: 08:00 - 02:00</li>
                <li className="border-bottom pb-1"><i className="bi bi-caret-right-fill"></i> Wednesday: 08:00 - 02:00</li>
                <li className="border-bottom pb-1"><i className="bi bi-caret-right-fill"></i> Thursday: 08:00 - 02:00</li>
                <li className="border-bottom pb-1"><i className="bi bi-caret-right-fill"></i> Friday: 08:00 - 02:00</li>
                <li className="border-bottom pb-1"><i className="bi bi-caret-right-fill"></i> Saturday: 08:00 - 02:00</li>
                <li><i className="bi bi-caret-right-fill"></i> Sunday: Closed</li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h5>Get in Touch</h5>
                <p><i className="bi bi-signpost-2-fill" /> 123 Lorem Ipsum, 32 sit Atlanta</p>
                <p><i className="bi bi-envelope" /> info@example.com</p>
                <p><i className="bi bi-phone" /> 770-123-4567</p>
                <div className="d-flex gap-4 fs-4">
                  <a href='#'><i className="bi bi-facebook " /></a>
                  <a href='#'><i className="bi bi-twitter" /></a>
                  <a href='#'><i className="bi bi-instagram" /></a>
                  <a href='#'><i className="bi bi-youtube" /></a>
                </div>
              </div>
            </div>
        </div>
      </footer>
      <section className='py-3'>
       <div className="container">
       <p className='text-center'>Copyright © International School System 2020. All Rights Reserved</p>
       </div>
      </section>
      

    </>
  )
}

export default Footer
