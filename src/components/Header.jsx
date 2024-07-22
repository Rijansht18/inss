import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Classes from '../pages/Classes';
import Teachers from '../pages/Teachers';
import Contact from '../pages/Contact';

function Header() {
  return (
    <>
      <section className='py-4 top'>
     <nav className="navbar navbar-expand-lg ">
  <div className="container d-flex gap-5 align-items-center">
  <Link to="/"><img className='w-100' src="./image/logo.png" alt="Logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto flex gap-5 fw-bold fs-5">
                    <li className="nav-item">
                      <Link className="nav-link " to="/">HOME</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/classes">CLASSES</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/teachers">TEACHERS</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/blog">BLOG</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">CONTACT US</Link>
                    </li>
                  </ul>
    </div>
  </div>
</nav>

      </section>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Header;
