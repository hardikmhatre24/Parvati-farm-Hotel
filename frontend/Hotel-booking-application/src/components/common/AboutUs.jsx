import React from "react";
import "./AboutUs.css";

import heroImage from "../../assets/images/backimage.png";
import resortImage from "../../assets/images/parvatifarm.png";

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="hero-content">
          <h1>About Parvati Farm House</h1>
          <p>Experience Nature • Luxury • Peace</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6 mb-4 about-image">
              <img
                src={resortImage}
                alt="Parvati Farm House"
                className="img-fluid"
              />
            </div>

            <div className="col-lg-6 about-content">
              <h2>Welcome to Parvati Farm House</h2>

              <p>
                Nestled in the heart of nature, Parvati Farm House offers a peaceful
                escape from the busy city life. Surrounded by lush greenery,
                beautiful landscapes, and fresh air, our resort is the perfect
                destination for families, couples, and friends.
              </p>

              <p>
                We believe every guest deserves comfort, quality service, and
                unforgettable memories. Whether you're planning a weekend trip,
                family gathering, birthday celebration, or a relaxing vacation,
                Parvati Farm House welcomes you with warm hospitality.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
<section className="why-section">
  <div className="container">

    <div className="text-center mb-5">
      <h2 className="why-title">Why Choose Us</h2>
      <p className="text-muted">
        Discover the perfect blend of comfort, luxury, and nature at
        <strong> Parvati Farm House.</strong>
      </p>
    </div>

    <div className="row g-4">

      <div className="col-lg-3 col-md-6">
        <div className="why-card">
          <div className="icon-circle">🌿</div>
          <h4>Nature View</h4>
          <p>
            Wake up to lush greenery, fresh air, and breathtaking natural
            surroundings that create a peaceful escape.
          </p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="why-card">
          <div className="icon-circle">🏡</div>
          <h4>Comfort Stay</h4>
          <p>
            Spacious rooms with premium amenities designed to provide maximum
            comfort and relaxation.
          </p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="why-card">
          <div className="icon-circle">🤝</div>
          <h4>Friendly Service</h4>
          <p>
            Our dedicated team ensures every guest enjoys warm hospitality and
            unforgettable memories.
          </p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="why-card">
          <div className="icon-circle">⭐</div>
          <h4>Best Experience</h4>
          <p>
            The perfect destination for family vacations, romantic getaways,
            celebrations, and peaceful weekends.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

      {/* Google Map */}
      <section className="map-section">
        <div className="container">

          <h2 className="map-title">Find Us</h2>

          <iframe
            className="map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.9586593531803!2d72.7608214!3d19.414192099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ab341700a23f%3A0xfe6d3396b2ef2af!2sParvati%20Farm%20House!5e0!3m2!1sen!2sin!4v1782828752076!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
      </section>

      {/* Contact */}
      <section className="contact-section">
        <div className="container">

          <div className="contact-box">

            <h2>Contact Us</h2>

            <p>
              <strong>📍 Address:</strong><br />
              Parvati Farm House,<br />
              Virar, Maharashtra, India
            </p>

            <p>
              <strong>📞 Phone:</strong><br />
              +91 9689784365
            </p>

            <p>
              <strong>🕒 Timings:</strong><br />
              Open 24 Hours
            </p>

          </div>

        </div>
      </section>
    </>
  );
};

export default AboutUs;