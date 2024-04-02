import React from 'react'
import client from '../Images/client.jpg';
import quote from '../Images/quote.png';
const Section4 = () => {
  return (
    <div>
      <section className="testimonials">
  <div className="testimonials-left">
    <p className="section-subtitle">Testimonial</p>
    <h2 className="section-title">What Our Clients Say About Us</h2>
    <p className="section-text">
      Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla feugiat
      platea rhoncus ut aliquam luctus, tempor massa hac ante leo vestibulum
      nibh cursus suscipit mauris cum class.
    </p>
  </div>
  <div className="testimonials-right">
    <div className="testimonials-card">
      <img src={quote} alt="quote icon" className="quote-img" />
      <p className="testimonials-text">
        "Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla
        feugiat platea rhoncus ut aliquam luctus, tempor massa hac ante leo
        vestibulum nibh cursus suscipit mauris cum class".
      </p>
      <div className="testimonials-client">
        <div className="client-img-box">
          <img src={client} alt="client" />
        </div>
        <div className="client-detail">
          <h4 className="client-name">Meka Johns</h4>
          <p className="client-title">Heart Patient</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Section4
