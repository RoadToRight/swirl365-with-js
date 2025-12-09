import React, { useState } from 'react'
import css from "../../styles/Home/HomeReviewsCards.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { IoPlayCircleOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';


const ReviewCardss = [
  { name: "Adam Harder", designation: "Senior Video Operations Manager", review: "Great value, great service, and a consistently reliable outcome.", img1: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760203834/review_case_2_d5pklt.webp", img2: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760204020/DNA_Logo_rbpsya.webp" },

  { name: "Shonal Narayan", designation: "Marketing Manager", review: "A smooth, satisfying experience from start to finish.", img1: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760203833/review_case_1_xewzkr.webp", img2: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760204173/Capital_Research_Logo_zogok1.webp" },

  { name: "Ron Schniedermann", designation: "CEO", review: "Impressive performance that exceeded my expectations in every way.", img1: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760203861/review_case_3_emtbnr.webp", img2: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760204171/Tag_Logo_ulktvg.webp" },
]
const star = "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760203879/Star_o2qiai.webp"


const Reviews = () => {

  const [ReviewCards, setReviewCards] = useState(ReviewCardss);
  const dispatch = useDispatch()

  return (
    <section className={css.reviewslideSection}>
      <div className={`${css.container_parent} container`}>
        <h2>Relied upon by global brands whose products you use daily</h2>

        <Swiper
          // style={{ padding: "25px 0px" }}
          className={`${css.card_slider} css.swiper`}
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          initialSlide={1}
          spaceBetween={25}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev"
          }}
          pagination={{ clickable: true, el: ".pagination" }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            767: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}

        >

          {ReviewCards.map(({ name, designation, review, img1, img2 ,url}, index) => (
            <SwiperSlide key={index}>
              <figure className={css.card}>
                <div className={css.img1}>
                  <img
                    src={img1}
                    alt=""
                  />
                <div className={css.play_btn} onClick={() => dispatch(handleVideoPlayer(url))}><IoPlayCircleOutline size={30} /></div>

                </div>

                <div className={css.card_description}>
                  <figcaption>
                    <div className={css.name}>{name}</div>
                    <div className={css.designation}>{designation}</div>
                  </figcaption>
                  <div className={css.img2}>
                    <img
                      src={img2}
                      alt=""
                    />
                  </div>
                  <blockquote className={css.description}>
                    {review}
                  </blockquote>
                  <div className={css.stars}>
                    {[1, 2, 3, 4, 5].map(() => {
                      return (
                        <img src={star} alt="" />
                      )
                    })}
                  </div>
                </div>

              </figure>
            </SwiperSlide>
          ))}


          <div className={css.Navigations_Cards}>
            <div className={`${css.prev} prev`}><FaLongArrowAltLeft color='white' /></div>
            <div className={`${css.pagination} pagination`}></div>
            <div className={`${css.next} next`}><FaLongArrowAltRight color='white' /></div>
          </div>


        </Swiper>


      </div>
    </section>
  );
};

export default Reviews;
