import React from 'react'
import css from "../../styles/Home/HomeReviewsCards.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Reviews = () => {
  return (
    <section className={css.reviewslideSection}>
      <div className={css.container}>
        <h2>Relied upon by global brands whose products you use daily</h2>

        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 0,
            slideShadows: false
          }}
          className={css.swiper}
        >

          {[1, 2, 3, 4].map((index) => (
            <SwiperSlide key={index}>
              <figure className={css.card}>
                <div className={css.img1}>
                  <img
                    src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1760203834/review_case_2_d5pklt.webp"
                    alt=""
                  />
                </div>
                <figcaption>
                  <div className={css.name}>Adam Harder</div>
                  <div className={css.designation}>Senior Video Operations Manager</div>
                </figcaption>
                <div className={css.img2}>
                  <img
                    src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1760204020/DNA_Logo_rbpsya.webp"
                    alt=""
                  />
                </div>
                <blockquote className={css.description}>
                  The ROI we were getting, the cost per acquisition and the ARPU just...
                </blockquote>
              </figure>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
};

export default Reviews;
