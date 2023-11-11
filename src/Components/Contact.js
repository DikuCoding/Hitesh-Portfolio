import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h2 className='connect'>Connect with me</h2>

        <div className="logos">
            <div className="facebook">
            <a href="https://www.facebook.com/hitesh.vaidya.568" target='_blank'><i id="logo2" class="fa-brands fa-facebook fa-2xl"  ></i></a>
            </div>
            <div className="instagram">
            <a href="https://www.instagram.com/vaidya.hitesh/" target='_blank'><i className="fa-brands fa-instagram fa-2xl"></i></a>
            </div>
            {/* <div className="gmail">
            <a href="https://www.instagram.com/vaidya.hitesh/" target='_blank'><i class="fa-regular fa-envelope fa-2xl"></i></a>
            </div> */}
        </div>
        <p><i class="fa-regular fa-envelope "></i>  : hiteshvaidya1@gmail.com</p>
        <p><i class="fa-solid fa-phone"></i> : 9812345678</p>
      </div>
    </>
  )
}

export default Contact
