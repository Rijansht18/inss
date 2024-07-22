import React from 'react'
import { teacher } from '../Data'

function Teachers() {
  return (
    <>
      <section className='py-3 abouttop'>
        <div className="container">
          <h1 className='text-white text-uppercase fw-bold text-center'>about us</h1>
        </div>
      </section>
      <section className='py-5 '>
    <div className="container">
      <div className="row">
        {teacher.map((a)=>(
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

export default Teachers
