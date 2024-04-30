import funFactOne from "@/data/funFactOne";
import React , { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import VisibilityCountUp from "../Reuseable/VisibilityCountUp";
import ReactPlayer from 'react-player';


const VIDEO_PATH = 'https://youtu.be/0BIaDVnYp2A';
const { title, funFacts , video } = funFactOne;

const FunFactOne = () => {
  const playerRef = useRef(null);
  return (
    <section className="funfact-one">
    <Container>
      <div className="block-title text-center">
        <h2 className="block-title__title black-text-color">
          <TextSplit text={title} />
        </h2>
      </div>

      <Row>
        {funFacts.map(({ id, count, tagline }) => (
          <Col key={id} lg={3} md={6} sm={12}>
            <div className="funfact-one__single-outer">
              <div className="funfact-one__single">
                <span className="funfact-one__dot-1"></span>
                <span className="funfact-one__dot-2"></span>
                <span className="funfact-one__dot-3"></span>
                <h3 className="funfact-one__title counter">
                  <VisibilityCountUp count={count} />
                </h3>
                <p className="funfact-one__tag-line">{tagline}</p>
              </div>
            </div>
            
          </Col>
          
        ))}
       
       <div className="video-container">
  <h1 className="video-title">Past Compaigns</h1>
  <video className="video" loop autoPlay muted>
    <source src="/videooo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <h1 className="video-title">Behind The Scene</h1>
  <video className="video" loop autoPlay muted>
    <source src="/bts.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

 
      </Row>
      
    </Container>
  </section>
  );
};

export default FunFactOne;
