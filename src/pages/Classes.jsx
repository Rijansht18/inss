import React from 'react'
import { popularclasses } from '../Data'

function Classes() {
  return (
    <>
      <section className='py-3 abouttop'>
        <div className="container">
          <h1 className='text-white text-uppercase fw-bold text-center'>CLASSES</h1>
        </div>
      </section>
        <section className='py-5'>
    <div className="container ">
      
          <div className="row">
        {popularclasses.map((a)=>(
          <div className="col-lg-4 mt-5 " key={a.id}>
            <div className="shadow popularbox">
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

export default Classes
