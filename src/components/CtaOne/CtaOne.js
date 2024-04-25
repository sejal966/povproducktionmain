import ctaOne from "@/data/ctaOne";
import useActive from "@/hooks/useActive";
import React , { useRef , useState } from "react";
import TextSplit from "../Reuseable/TextSplit";
import { Col, Row } from "react-bootstrap";
const { title } = ctaOne;
import emailjs from '@emailjs/browser';
import Faqq from "../Faq/Faqq";
const CtaOne = ({ isScrollActive = false }) => {
  const ref = useActive("#contact", isScrollActive);
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vevdqgf', 'template_bkzoq2u', formRef.current, {
        publicKey: 'CI3v3JTLHKAgc8W80',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitted(true); // Set submitted to true after successful submission
          formRef.current.reset(); // Reset form fields after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }


  return (
    <section ref={ref} className="cta-one faq-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div >
            <div>
            <h2 className="faqh">FAQ</h2>
              <Faqq />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div >
            <div className="card-body">
              <h2 className="card-title faqh">Contact Us</h2>
              <form className="reply-form" ref={formRef} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      placeholder="Your name"
                      name="name"
                      className="reply-form__field form-control"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      className="reply-form__field form-control"
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      placeholder="Write message"
                      name="message"
                      className="reply-form__field form-control"
                    ></textarea>
                    <button className="reply-form__btn thm-btn" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default CtaOne;
