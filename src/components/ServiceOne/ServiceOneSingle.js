import React from "react";
import { Col, Image } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import Link from "next/link";
const ServiceOneSingle = ({ service = {} }) => {
  const { icon, title, text, text2 } = service;

  return (
    <Col lg={4}>
      <div className="service-one__single">
        <span className="service-one__dot-1"></span>
        <span className="service-one__dot-2"></span>

        <span className="service-one__dot-3"></span>
        <div className="service-one__icon">
          {/* <i className={icon}></i> */}
          <Image
            className="icons"
            src={require(`../../../public/assets/images/${icon}`).default.src}
            alt="image"
          />
        </div>
        <h3 className="service-one__title">
          <a href="#">
            <TextSplit text={title} />
          </a>
        </h3>
        <p className="service-one__text">
          <TextSplit text={text} />
        </p>
        <Link href="/ServicesDetail">
        <a className="service-one__btn">
          {text2}
        </a>
            </Link>
        
      </div>
    </Col>
  );
};

export default ServiceOneSingle;
