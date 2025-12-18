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
import { useFeaturedPortfolioQuery } from '@/store/Api/PortfolioAPi';

const Projectslider = () => {

  const dispatch = useDispatch();
  const innerWidth = useInnerWidth();
  const [Projects, setProjects] = useState([])


  const { data: FeaturedPortfolioQuery } = useFeaturedPortfolioQuery();


  useEffect(() => {
    let divide = Math.ceil(FeaturedPortfolioQuery?.projects.length / 3);

    const result = [
      { Slide1: FeaturedPortfolioQuery?.projects.slice(0, divide) },
      { Slide2: FeaturedPortfolioQuery?.projects.slice(divide, divide * 2) },
      { Slide3: FeaturedPortfolioQuery?.projects.slice(divide * 2) }
    ]
    setProjects(result)
    console.log("result:", result[0]);
  }, [FeaturedPortfolioQuery]);


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
          Projects[0]?.Slide1?.map((slide, index) => {
            return (
              <SwiperSlide className={css.project_slide} >
                <img src={slide.poster.url} alt="" className={css.slider_img} />

                <div className={css.overlay}>
                  <FaPlay className={css.play_btn} size={35} color='white' onClick={() => dispatch(handleVideoPlayer(slide.video))} />
                </div>

              </SwiperSlide>
            )
          })
        }

      </Swiper>

      {
        innerWidth >= 767 ?
          <>
            <ProjectMarquee images={Projects[2]?.Slide2} direction='left' width={"360px"} gap="20px" HandleClickVideo={handleVideoPlayer} />
            <ProjectMarquee images={Projects[3]?.Slide3} direction='right' width={"360px"} gap="20px" HandleClickVideo={handleVideoPlayer} />
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


