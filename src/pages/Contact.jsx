import React from 'react'
import { contact } from '../Data'

function Contact() {
  return (
    <>
      <section className='py-3 abouttop mb-5'>
        <div className="container">
          <h1 className='text-white text-uppercase fw-bold text-center'>contact us</h1>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            {contact.map((a)=>(
              <div className="col-lg-3 shadow text-center py-5" key={a.id}>
                <img className='w-25' src={a.image} alt="" />
                <h3>{a.title}</h3>
                <p>{a.sub1}</p>
                <p>{a.sub2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='my-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className='formbox'>
               <div className="row mb-4">
                <div className="col-lg-1"></div>
                <div className="col-lg-11 mt-4"> <h3>Get In Touch</h3></div>
               </div>
                <form action="">
                  <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5 mb-3">
                      <input className="w-100" style={{ height: '50px' }} type="text" placeholder='First Name' />
                    </div>
                    <div className="col-lg-5 mb-3">
                      <input className="w-100" style={{ height: '50px' }}  type="text" placeholder='Last Name' />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5 mb-3">
                      <input className="w-100" style={{ height: '50px' }}  type="email" placeholder='Email Address' />
                    </div>
                    <div className="col-lg-5 mb-3">
                      <input className="w-100" style={{ height: '50px' }}  type="number" placeholder='Phone' />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10 mb-3">
                    <textarea className="w-100" style={{ height: '200px' }} name="" id="" placeholder="Message"></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10 mb-3">
                    <button type="submit" className="btn btn-enroll btn-lg rounded-5 w-100">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
           <iframe className='w-100' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28269.08310531883!2d85.3737472!3d27.66675035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1720785522447!5m2!1sen!2snp"  height={510} style={{border: 1}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
