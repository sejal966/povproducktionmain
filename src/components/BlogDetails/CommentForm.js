import React , { useRef , useState } from "react";
import useActive from "@/hooks/useActive";
import { Col, Row } from "react-bootstrap";
import emailjs from '@emailjs/browser';
const CommentForm = () => {
  const ref = useActive("#contact");
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
    <>
      <h2 className="blog-details__content-title">Leave a Comment</h2>
      <form ref={formRef} onSubmit={sendEmail} className="reply-form">
        <Row>
          <Col lg={6}>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="reply-form__field"
            />
          </Col>
          <Col lg={6}>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="reply-form__field"
            />
          </Col>
          <Col lg={12}>
            <textarea
              placeholder="Write message"
              name="message"
              className="reply-form__field"
            ></textarea>
            <button className="reply-form__btn thm-btn" type="submit">
              Submit Comment
            </button>
          </Col>
        </Row>
      </form>
    </>
  );
};

export default CommentForm;
