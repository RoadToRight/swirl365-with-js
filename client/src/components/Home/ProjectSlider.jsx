"use client";
import React, { useRef, useState, useEffect, useEffectEvent } from 'react';
import css from "../../styles/Home/Projectslider.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaPlay } from "react-icons/fa";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import ProjectMarquee from './ProjectMarquee';
import { useDispatch } from 'react-redux';
import { handleVideoPlayer } from '@/store/slices/VideoSlice';
import useInnerWidth from '../CustomHooks/useInnerWidth';
import data from "../../data/projectSlider.json"

const Projectslider = () => {

  const dispatch = useDispatch();
  const innerWidth = useInnerWidth();
console.log("innerWidth",innerWidth)
  // const Slider1Image = [
  //   { image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267098/quickvila_swirl365_rzev04.webp", video: "", alt: "" },
  //   { image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267097/straw_boss_swirl365_pd00fy.webp", video: "", alt: "" },
  //   { image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267094/uncle_swirl365_myefwa.webp", video: "", alt: "" },
  //   { image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267092/Compassion_Video_swirl365_qv5zh5.webp", video: "", alt: "" },
  //   { image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267087/white_swirl365_sobv4q.webp", video: "", alt: "" },
  //   { image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267086/burners_swirl365_qal7yo.webp", video: "", alt: "" },
  // ]
  // const Slider2Image = [
  //   { image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267091/ai_swirl365_xo5ld0.webp", video: "", alt: "" },
  //   { image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267091/zycada_swirl365_k03ceo.webp", video: "", alt: "" },
  //   { image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267091/commitment_swirl365_hejvaa.webp", video: "", alt: "" },
  //   { image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267088/game_swirl365_rvqtmy.webp", video: "", alt: "" },
  //   { image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267088/sprinto_swirl365_zmoagl.webp", video: "", alt: "" },
  // ]
  // const Slider3Image = [
  //   { image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267086/zen_market_swirl365_ihegmb.webp", video: "", alt: "" },
  //   { image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267086/promise_Swirl365_w7d7p1.webp", video: "", alt: "" },
  //   { image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267085/TrustQuay_swirl365_svmxn1.jpg", video: "", alt: "" },
  //   { image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267085/Health_swirl365_djvig7.webp", video: "", alt: "" },
  //   { image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267085/cyber_swirl365_tupapk.webp", video: "", alt: "" },
  // ]






  return (
    <section className={css.projectslider}>

      <header>
        <h2>Powerful videos crafted through a tried-and-true creative production process</h2>
        <p>Creating great content repeatedly can be challenging and time-consuming. With swirl365, you get a team of creative strategists and video professionals who have perfected their craft through hundreds of projects. We'll be your comprehensive creative partner, managing everything from start to finish</p>
      </header>

      <Swiper
        className={css.swiper}
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={"auto"}
        centeredSlides={true}
        loop={true}
      // autoplay={true}  
      >


        {
          data.Slider1Image?.map((slide, index) => {
            return (
              <SwiperSlide className={css.project_slide} >
                <img src={slide.image} alt="" className={css.slider_img} />

                <div className={css.overlay}>
                  <FaPlay className={css.play_btn} size={35} color='white' onClick={() => dispatch(handleVideoPlayer(slide.url))} />
                </div>

              </SwiperSlide>
            )
          })
        }

      </Swiper>

      {
        innerWidth >= 767 ?
          <>
            <ProjectMarquee images={data.Slider2Image} direction='left' width={"360px"} gap="20px" HandleClickVideo={handleVideoPlayer} />
            <ProjectMarquee images={data.Slider3Image} direction='right' width={"360px"} gap="20px" HandleClickVideo={handleVideoPlayer} />
          </> : null
      }

      <div className={css.end_section}>
        <div className={`${css.btn}`}>
          <div className={"wrapper"}>
            <div className={`${"box_area"}`}>
              <div className={`${"size_one pink_bg_btn"} ${"box"}`}>See Portfolio</div>
              <div className={`${"size_two pink_bg_btn"} ${"box"}`}>See Portfolio</div>
            </div>
          </div>
        </div>
        <p>
          Discover a world of creativity in our videos, designs, and illustrations. Find the perfect spark for your next project!
        </p>
      </div>

    </section>
  );
};

export default Projectslider;


