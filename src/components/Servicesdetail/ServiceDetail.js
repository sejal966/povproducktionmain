import React from "react";
import useActive from "@/hooks/useActive";
import { Col, Container, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const ServiceDetail = () => {
  const ref = useActive("/ServicesDetail");

  return (
    <section className="cta-threee">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="cta-three__image">
              <Image src="/assets/images/perfmar.png" alt="Awesome Image"  className="servdet"/>
            </div>
          </Col>
          <Col lg={6}>
            <div className="cta-three__content">
              <div className="block-title text-left py-3 px-3">
                <h2 className="block-title__title black-text-color">
                  <TextSplit text="Performance Marketing" />
                </h2>
              </div>
              <p className="cta-three__text">Our performance marketing strategies leverage Meta ads and Google ads to craft
targeted campaigns on social media platforms. We drive inorganic traffic to achieve
desired outcomes, whether it’s generating leads or increasing profile visits. Our proven
track record includes helping clients achieve a 70% increase in leads with a 57%
reduction in Cost Per Lead (CPL). (Add video and interactive elements to showcase ad
campaigns and results; Developer note: Include video testimonials and interactive
charts/graphs to highlight performance metrics.)</p>
              
              {/* <a href="#" className="thm-btn cta-three__btn">
                Get Started
              </a> */}
            </div>
          </Col>
        </Row>
      </Container>
       <br></br>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="cta-three__image">
              <Image src="/assets/images/socmedman.png" alt="Awesome Image" className="servdet" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="cta-three__content">
              <div className="block-title text-left py-3 px-3">
                <h2 className="block-title__title black-text-color">
                  <TextSplit text="Social Media Management" />
                </h2>
              </div>
              <p className="cta-three__text">With our social media management services, we take charge of our clients’ social media
accounts to enhance their engagement with the audience. We ensure timely and
strategic uploads across social media platforms to maximize results and audience
interaction. (Add video and 3D elements/animations; Developer note: Include video
demonstrations of social media management tools and interactive elements showcasing
engagement metrics.)</p>
              
              {/* <a href="#" className="thm-btn cta-three__btn">
                Get Started
              </a> */}
            </div>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="cta-three__image">
              <Image src="/assets/images/contmar.png" alt="Awesome Image"  className="servdet" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="cta-three__content">
              <div className="block-title text-left py-3 px-3">
                <h2 className="block-title__title black-text-color">
                  <TextSplit text="Content Marketing" />
                </h2>
              </div>
              <p className="cta-three__text">We specialize in crafting viral content campaigns from inception to execution. Starting
with ideation, we meticulously script, shoot (if applicable), and edit content to perfection
before uploading. Our approach ensures organic reach, having already garnered over
75 million views for our clients. (Add video and 3D elements/animations; Developer
note: Include video and interactive elements to showcase the content creation process.)</p>
              
              {/* <a href="#" className="thm-btn cta-three__btn">
                Get Started
              </a> */}
            </div>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="cta-three__image">
              <Image src="/assets/images/publrel.png" alt="Awesome Image"  className="servdet" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="cta-three__content">
              <div className="block-title text-left py-3 px-3">
                <h2 className="block-title__title black-text-color">
                  <TextSplit text="Public Relations (PR)" />
                </h2>
              </div>
              <p className="cta-three__text">Our PR services guarantee a reach of 100 million+ on Instagram within the shortest
time possible. By becoming the coolest trend on the internet, you’ll capture the attention
of millions and be seen as a new and trending entity. Our approach taps into the
subconscious of the audience, making them aspire to follow your journey. (Add video
and 3D elements/animations; Developer note: Include video testimonials and interactive
elements showcasing PR success stories and media coverage.)
</p>
              
              {/* <a href="#" className="thm-btn cta-three__btn">
                Get Started
              </a> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default ServiceDetail