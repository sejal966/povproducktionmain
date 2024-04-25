import brandOne from "@/data/brandOne";
import React from "react";
import { Container, Image } from "react-bootstrap";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay]);



const BrandOne = () => {
  return (
    <section className="brand-one">
      
      <Container>
        <Swiper modules={[Autoplay]} loop={true} autoplay={{delay:0}} slidesPerView={4} speed={1000} className="sampleslider">
          {brandOne.map((image, i) => (
            <SwiperSlide key={i}>
              
              <div className="item">
               
                <Image src={image.src} alt="Awesome Image" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};
// className="brand-one__carousel"

export default BrandOne;
