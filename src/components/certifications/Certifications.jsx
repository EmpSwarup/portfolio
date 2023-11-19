import React from "react";
import { Data } from "./Data";
import "./certifications.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Certifications = () => {
  return (
    <section className="certification container section" id="certifications">
      <h2 className="section__title" data-aos="fade-left">
        My Certifications
      </h2>
      <span
        className="section__subtitle"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        Certificates
      </span>

      <Swiper
        className="certifications__container"
        grabCursor={true}
        spaceBetween={24}
        pagination={{ clickable: true }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="certification__card" key={id}>
              <img src={image} alt="" className="certification__img" />
              <h3 className="certification__name">{title}</h3>
              <p className="certification__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Certifications;
