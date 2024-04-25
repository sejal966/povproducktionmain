import React from "react";
import useActive from "@/hooks/useActive";
import { Col, Container, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import pricingOne from "@/data/pricingOne";
import SinglePricingOne from "@/components/PricingOne/SinglePricingOne";
const Aboutddetails = () => {
    const ref = useActive("/Aboutddetails");
    return (
<section >
    
        <Row>
          <Col lg={6}>
            <div className="cta-three__image">
              <Image src="/assets/images/111.png" alt="Awesome Image" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="cta-three__content">
              <div className="block-title text-left">
                <br></br>
                <h2 className="block-title__title black-text-color">
                  <TextSplit text="Organic reach made easy!"/>
                </h2>
              </div>
              <p className="cta-three__text"></p>
              <ul className="cta-three__list">
               
                  <li  className="cta-three__list-item">
                  Vision:  <br></br>
                  Fueling brands to reach millions organically, we redefine digital landscapes. Join us on a journey where growth has no limits.
                  </li>
                  <li  className="cta-three__list-item">
                  Mission: <br></br>
                   Guiding brands with precision, we craft strategic content journeys to amplift their unique narratives, sparking a revolution in the digital realm.
                  </li>
              
              </ul>
             
            </div>

          </Col>
       
        </Row>
        <Container>
        <div className="block-title text-center">
          <h2 className="block-title__title black-text-color">
            <br></br>
            <TextSplit text="Founders" />
          </h2>
        </div>
        <Row>
        <Col lg={4}>
      <div className="pricing-one__single popular">
        {/* <h3 className="pricing-one__amount">{image}</h3> */}
        <Image
          src="/assets/images/swapnil.png"
          className="imagestyle"
          alt="image"
        />
        <span className="pricing-one__month">MR. SWAPNIL GUPTA</span>

        <ul className="pricing-one__list">
          <p className="pricing-one__list-item">Mr. Swapnil Gupta leads our marketing efforts, crafting viral content campaigns and spearheading performance marketing strategies to drive engagement and brand growth.</p>
        </ul>
        <a href="https://www.linkedin.com/in/swapnilguptaa" className="thm-btn pricing-one__btn">
          Contact
        </a>
        <span className="pricing-one__tag-line">Marketing</span>
      </div>
    </Col>
        <Col lg={4}>
      <div className="pricing-one__single popular">
        {/* <h3 className="pricing-one__amount">{image}</h3> */}
        <Image
          src="/assets/images/dikshaa.png"
          className="imagestyle"
          alt="image"
        />
        <span className="pricing-one__month">MS. DIKSHA SINGH</span>

        <ul className="pricing-one__list">
          <p className="pricing-one__list-item">As our Creative Head, Ms. Diksha Singh is the driving force behind our innovative campaigns. She leads the team with her creative vision, ensuring each project exceeds expectations.</p>
        </ul>
        <a href="https://www.linkedin.com/in/diksha-singh-037a00203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="thm-btn pricing-one__btn">
          Contact
        </a>
        <span className="pricing-one__tag-line">Designing</span>
      </div>
    </Col>
        <Col lg={4}>
      <div className="pricing-one__single popular">
        {/* <h3 className="pricing-one__amount">{image}</h3> */}
        <Image
          src="/assets/images/prakhar.png"
          className="imagestyle"
          alt="image"
        />
        <span className="pricing-one__month">MR. PRAKHAR DIXIT</span>

        <ul className="pricing-one__list">
          <p className="pricing-one__list-item">With his expertise in film making and editing Mr. Prakhar Dixit brings storytelling to life. His excellence in visual storytelling enhances our content, captivating audiences and driving results.</p>
        </ul>
        <a href="https://www.linkedin.com/in/prakhar-kumar-dixit?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"className="thm-btn pricing-one__btn">
          Contact
        </a>
        <span className="pricing-one__tag-line">Editing</span>
      </div>
      
    </Col>
    
        </Row>
        
      </Container>
      <Container>
        <div className="block-title text-center">
          <h2 className="block-title__title black-text-color">
            <br></br>
            <TextSplit text="Team Members" />
          </h2>
        </div>
        <Row>
        <Col lg={4}>
      <div className="pricing-one__single popular">
        {/* <h3 className="pricing-one__amount">{image}</h3> */}
        <Image
          src="/assets/images/imgg1.png"
          className="imagestyle"
          alt="image"
        />
        <span className="pricing-one__month">MR. Sujeet</span>

        {/* <ul className="pricing-one__list">
          <p className="pricing-one__list-item">Mr. Swapnil Gupta leads our marketing efforts, crafting viral content campaigns and spearheading performance marketing strategies to drive engagement and brand growth.</p>
        </ul> */}
        {/* <a href="https://www.linkedin.com/in/swapnilguptaa" className="thm-btn pricing-one__btn">
          Contact
        </a>
        <span className="pricing-one__tag-line">Marketing</span> */}

        
      </div>
    </Col>
        <Col lg={4}>
      <div className="pricing-one__single popular">
        {/* <h3 className="pricing-one__amount">{image}</h3> */}
        <Image
          src="/assets/images/imgg2.png"
          className="imagestyle"
          alt="image"
        />
        <span className="pricing-one__month">MS. Vinesh</span>

        {/* <ul className="pricing-one__list">
          <p className="pricing-one__list-item">As our Creative Head, Ms. Diksha Singh is the driving force behind our innovative campaigns. She leads the team with her creative vision, ensuring each project exceeds expectations.</p>
        </ul> */}
        {/* <a href="https://www.linkedin.com/in/diksha-singh-037a00203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="thm-btn pricing-one__btn">
          Contact
        </a>
        <span className="pricing-one__tag-line">Designing</span> */}
      </div>
    </Col>
        <Col lg={4}>
      <div className="pricing-one__single popular">
        {/* <h3 className="pricing-one__amount">{image}</h3> */}
        <Image
          src="/assets/images/imgg3.png"
          className="imagestyle"
          alt="image"
        />
        <span className="pricing-one__month">MR. Kunal</span>

        {/* <ul className="pricing-one__list">
          <p className="pricing-one__list-item">With his expertise in film making and editing Mr. Prakhar Dixit brings storytelling to life. His excellence in visual storytelling enhances our content, captivating audiences and driving results.</p>
        </ul> */}
        {/* <a href="https://www.linkedin.com/in/prakhar-kumar-dixit?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"className="thm-btn pricing-one__btn">
          Contact
        </a>
        <span className="pricing-one__tag-line">Editing</span> */}
      </div>
      
    </Col>
        <Col lg={4}>
      <div className="pricing-one__single popular">
        {/* <h3 className="pricing-one__amount">{image}</h3> */}
        <Image
          src="/assets/images/imgg4.png"
          className="imagestyle"
          alt="image"
        />
        <span className="pricing-one__month">MR. Mohit</span>

        {/* <ul className="pricing-one__list">
          <p className="pricing-one__list-item">With his expertise in film making and editing Mr. Prakhar Dixit brings storytelling to life. His excellence in visual storytelling enhances our content, captivating audiences and driving results.</p>
        </ul> */}
        {/* <a href="https://www.linkedin.com/in/prakhar-kumar-dixit?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"className="thm-btn pricing-one__btn">
          Contact
        </a>
        <span className="pricing-one__tag-line">Editing</span> */}
      </div>
      
    </Col>
        <Col lg={4}>
      <div className="pricing-one__single popular">
        {/* <h3 className="pricing-one__amount">{image}</h3> */}
        <Image
          src="/assets/images/imgg5.jpg"
          className="imagestyle"
          alt="image"
        />
        <span className="pricing-one__month">MR. Sujal</span>

        {/* <ul className="pricing-one__list">
          <p className="pricing-one__list-item">With his expertise in film making and editing Mr. Prakhar Dixit brings storytelling to life. His excellence in visual storytelling enhances our content, captivating audiences and driving results.</p>
        </ul> */}
        {/* <a href="https://www.linkedin.com/in/prakhar-kumar-dixit?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"className="thm-btn pricing-one__btn">
          Contact
        </a>
        <span className="pricing-one__tag-line">Editing</span> */}
      </div>
      
    </Col>
    
        </Row>
        
      </Container>
    </section>
      );
    };
    export default Aboutddetails