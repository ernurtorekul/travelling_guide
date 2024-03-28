import React from 'react'
import './Form.css'
import emailjs from '@emailjs/browser'
export default function Form() {

  const handleSubmit=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_ovl2n1s', 'template_hgehiwa', e.target, 'QT5ltA7BuoH7IMiRu')
      .then((result) => {
          alert("Почта сәтті жіберілді!")
      }, (error) => {
          alert("Қате орын алды! Кейінірек қайталап көріңіз.");
      })

    e.target.reset()
  }
  return (
    <>
  <form className="form" id="contact-form" onSubmit={handleSubmit}>
      <div className="inputbox">
        <h3>Аты-жөніңіз*</h3>
        <input type="text" required name="fullName"/>
      </div>
      <div className="inputbox">
        <h3>email почта*</h3>
        <input type="email" className="mail" placeholder={"abc@gmail.com"} required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" name="email"/>
      </div>
      <div className="inputbox">
        <h3>Байланыс телефоны*</h3>
        <input type="tel" maxlength="10" placeholder={"Number"} required pattern="[0-9]{10}" name="contact"/>
      </div>
      <div className="inputbox">
        <h3>Сипаттамасы*</h3>
        <textarea placeholder={"Write to us"} required name="info"></textarea>
      </div>
      <div className="sub-btn">
        <button type="submit" className="subbtn">Жіберу</button>
      </div>
    </form>
    </>
  )
}

