import bannerOne from "@/data/bannerOne";
import useActive from "@/hooks/useActive";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import Link from "next/link";

const { images, tagline, title } = bannerOne;

const BannerOne = () => {
  const ref = useActive("#home");

  return (
    <section ref={ref} className="banner-one" id="home">
      {Array.from(Array(6)).map((_, i) => (
        <span key={i} className={`banner-one__shape-${i + 1}`}></span>
      ))}
      {images.map(({ id, image, className }) => (
        <Image
          key={id}
          src={require(`../../../public/assets/images/${image}`).default.src}
          className={className}
          alt="Awesome Image"
        />
      ))}
      <Container>
        <Row>
          <Col xl={6}>
            <div className="banner-one__content">
              <p className="banner-one__tag-line">
                {tagline} <a href="#">POINT-OF-VIEW</a>
              </p>
              <h3 className="banner-one__title">
                <TextSplit text={title} />
              </h3>
             
              <Link href="/ServicesDetail">
              <a href="" className="banner-one__btn thm-btn">
                Learn More
              </a>
            </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerOne;
