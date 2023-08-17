import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="container-fluid text-center my-5">
          <div className="row justify-content-between">
            <div className="col border-end">
              <div>
                <h6>
                  <u>Welcome to our Shopping App!</u>
                </h6>
              </div>
              <div className="text-start my-4 mx-5">
                Discover a world of endless possibilities right at your
                fingertips. 🌍🤩 Shop for the latest trends, hottest deals, and
                must-have items, all in one convenient place. 🛍️💎 Here's what
                you need to know about our app
              </div>
            </div>
            <div className="col text-center border-end">
              <h6>
                <u>Connect with Us</u>
              </h6>
              <div className="my-4">
                <div>
                  <ul>
                    <p>
                      <a href="/" className="nav-link text-black">
                        Google <i className="bi bi-google text-warning"></i>
                      </a>
                    </p>
                    <p>
                      <a href="/" className="nav-link text-black my-1">
                        FaceBook <i className="bi bi-facebook text-primary"></i>
                      </a>
                    </p>
                    <p>
                      <a href="/" className="nav-link text-black my-1">
                        LinkedIn <i className="bi bi-linkedin text-primary"></i>
                      </a>
                    </p>
                    <p>
                      <a
                        href="/"
                        target=""
                        className="nav-link text-black my-1"
                      >
                        Pinterest{" "}
                        <i className="bi bi-pinterest text-danger"></i>
                      </a>
                    </p>
                    <p>
                      <a href="/" className="nav-link text-black my-1">
                        Whatsapp <i className="bi bi-whatsapp text-success"></i>
                      </a>
                    </p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      About Us 🛍️
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      At Shop Connect, we are committed to revolutionizing your
                      shopping experience. Our user-friendly interface, vast
                      selection of products, and unbeatable prices ensure that
                      you find exactly what you're looking for, every time you
                      visit.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Deals & Discounts 🎁
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Score big savings with our exclusive deals and discounts.
                      Stay tuned for regular sales events and limited-time
                      offers that'll leave you amazed by the incredible value.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      24/7 Customer Support 📞
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Have a question or need assistance? Our dedicated customer
                      support team is available 24/7 to help you with any
                      queries or concerns you may have.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      Careers 🚀
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      To apply, give us a call at 📞 9999999999 or email your
                      resume to careers@shopconnect.com Join us on this exciting
                      journey to shape the future of shopping!
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                      Location 📍
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="text-center location">
                        <p>Address: 123 Main Street, Anytown, Iceland</p>
                        <iframe
                          className="locationcard"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d848285.2485768497!2d-21.746954469844656!3d65.46438525243468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d3024dfcdc3073%3A0x65487011881de4ae!2zU2thZ2FmasO2csOwdXIsIEljZWxhbmQ!5e0!3m2!1sen!2sin!4v1690043836733!5m2!1sen!2sin"
                          width="600"
                          height="450"
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="map"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
