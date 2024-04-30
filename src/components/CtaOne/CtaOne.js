import ctaOne from "@/data/ctaOne";
import useActive from "@/hooks/useActive";
import React, { useRef, useState } from "react";
import TextSplit from "../Reuseable/TextSplit";
import { Col, Row } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import Faqq from "../Faq/Faqq";

const { title } = ctaOne;

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
          setSubmitted(true);
          formRef.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  return (
    <section ref={ref} className="cta-one faq-section" id="contact">
      <div className="container">
        <Row>
          <Col xs={12} md={6}>
            <div>
              {/* <h2 className="faqh">FAQ</h2> */}
              {/* <Faqq /> */}
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="card-body">
              <h2 className="card-title faqh">Contact Us</h2>
              <form className="reply-form" ref={formRef} onSubmit={sendEmail}>
                <Row>
                  <Col xs={12} lg={6}>
                    <input
                      type="text"
                      placeholder="Your name"
                      name="name"
                      className="reply-form__field form-control"
                    />
                  </Col>
                  <Col xs={12} lg={6}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      className="reply-form__field form-control"
                    />
                  </Col>
                  <Col xs={12}>
                    <textarea
                      placeholder="Write message"
                      name="message"
                      className="reply-form__field form-control"
                    ></textarea>
                    <button className="reply-form__btn thm-btn" type="submit">
                      Submit
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CtaOne;
