import footerData from "@/data/siteFooter";
import Link from "next/link";
import useActive from "@/hooks/useActive";
import React , { useRef , useState } from "react";
import { Container, Image } from "react-bootstrap";
const { logo, author, year, links, socials } = footerData;
import emailjs from '@emailjs/browser';

const SiteFooter = () => {
  const [submitted, setSubmitted] = useState(false); // Define submitted state
  const [emailValue, setEmailValue] = useState(""); // Define state for email input value
  const ref = useActive("#contact");
  const formRef = useRef();

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
          setEmailValue(""); // Reset email input field value
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  }



  return (
    <footer className="site-footer">
      <div className="site-footer__upper">
        <Container>
          <div className="site-footer__5-col-wrap">
            <div className="footer-widget footer-widget__about">
              <Link href="/">
                <a className="footer-widget__logo">
                  <Image width={66} src={logo.src} alt="Awesome Image" />
                </a>
              </Link>
            </div>
            <div className="footer-widget">
              <h3 className="footer-widget__title">Explore</h3>
              <ul className="footer-widget__links">
                {links.slice(0, 5).map(({ id, name, href }) => (
                  <li key={id} className="footer-widget__links-item">
                    <a href={href} className="footer-widget__links-link">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-widget">
              <h3 className="footer-widget__title">Services</h3>
              <ul className="footer-widget__links">
                {links.slice(5, 9).map(({ id, name, href }) => (
                  <li key={id} className="footer-widget__links-item">
                    <a href={href} className="footer-widget__links-link">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-widget">
              <h3 className="footer-widget__title">Links</h3>
              <ul className="footer-widget__links">
                {links.slice(9).map(({ id, name, href }) => (
                  <li key={id} className="footer-widget__links-item">
                    <a href={href} className="footer-widget__links-link">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-widget footer-widget__subscribe">
              <h3 className="footer-widget__title">Subscribe</h3>
              <form 
                onSubmit={sendEmail}
                className="footer-widget__subscribe-form" ref={formRef} 
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                />
                <button type="submit">
                  <i className="fa fa-location-arrow"></i>
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>
      <div className="site-footer__lower">
        <Container>
          <div className="inner-container">
            <p className="site-footer__copytext">
              © copyright {year} by <a href="#">{author}</a>
            </p>
            <div className="site-footer__social">
              {socials.map(({ id, icon, href }) => (
                <a key={id} href={href}>
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default SiteFooter;
