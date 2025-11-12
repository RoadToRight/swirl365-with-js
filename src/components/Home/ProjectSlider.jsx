"use client";
import React, { useRef, useState, useEffect } from 'react';
import css from "../../styles/Home/Projectslider.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaPlay } from "react-icons/fa";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Marquee from '../Marquee';
import ProjectMarquee from './ProjectMarquee';
import { MdCancel } from "react-icons/md";



const Projectslider = () => {
  const containerRef = useRef(null);
  const [OpenVideo, setOpenVideo] = useState(false);
  const [VideoUrl, setVideoUrl] = useState("")

  const [images, setImages] = useState([
    "/IMAGE (5).png",
    "/IMAGE (6).png",
    "/IMAGE (7).png",
    "/IMAGE (5).png",
    "/IMAGE (6).png",
    "/IMAGE (7).png"
  ]);

  const Slider1Image = [
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267098/quickvila_swirl365_rzev04.webp", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267097/straw_boss_swirl365_pd00fy.webp", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267094/uncle_swirl365_myefwa.webp", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267092/Compassion_Video_swirl365_qv5zh5.webp", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267087/white_swirl365_sobv4q.webp", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267086/burners_swirl365_qal7yo.webp", alt: "" },
  ]
  const Slider2Image = [
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267091/ai_swirl365_xo5ld0.webp", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267091/zycada_swirl365_k03ceo.webp", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267091/commitment_swirl365_hejvaa.webp", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267088/game_swirl365_rvqtmy.webp", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267088/sprinto_swirl365_zmoagl.webp", alt: "" },
    // { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267087/store_swirl365_fapn39.webp", alt: "" },
  ]
  const Slider3Image = [
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267086/zen_market_swirl365_ihegmb.webp", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267086/promise_Swirl365_w7d7p1.webp", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267085/TrustQuay_swirl365_svmxn1.jpg", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267085/Health_swirl365_djvig7.webp", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267085/cyber_swirl365_tupapk.webp", alt: "" },
    // { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267085/rixius_swirl365_ug0pzu.webp", alt: "" },
  ]

  const HandleClickVideo = (url) => {
    setOpenVideo((prev) => !prev);
    if(url){
      setVideoUrl(url)
    }
  }


  return (
    <section className={css.projectslider}>

      {OpenVideo ?
        <>
          <div className={css.close_btn} onClick={() => HandleClickVideo()}><MdCancel size={40} color='#c707e4' /></div>
          <iframe className={css.video} width="95%" height="85%" src={VideoUrl} title="Swirl365 Youtube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </> : null
      }


      <header>
        <h2>Powerful videos crafted through a tried-and-true creative production process</h2>
        <p>Creating great content repeatedly can be challenging and time-consuming. With swirl365, you get a team of creative strategists and video professionals who have perfected their craft through hundreds of projects. We'll be your comprehensive creative partner, managing everything from start to finish</p>
      </header>

      <Swiper
        className={css.swiper}
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={2.5}
        centeredSlides={true}
        loop={true}
      // autoplay={true}
      >


        {
          Slider1Image?.map((slide, index) => {
            return (
              <SwiperSlide className={css.project_slide}>
                <img src={slide.images} alt="" className={css.slider_img} />

                <div className={css.overlay}>
                  <FaPlay className={css.play_btn} size={35} color='white' onClick={() => HandleClickVideo(slide.url)} />
                </div>

              </SwiperSlide>
            )
          })
        }

      </Swiper>

      <ProjectMarquee images={Slider2Image} direction='left' width={"360px"} gap="20px" HandleClickVideo={HandleClickVideo} />
      <ProjectMarquee images={Slider3Image} direction='right' width={"360px"} gap="20px"  HandleClickVideo={HandleClickVideo}/>



      <div className={`${css.btn}`}>
        <div className={"wrapper"}>
          <div className={`${"box_area"}`}>
            <div className={`${"size_one pink_bg_btn"} ${"box"}`}>See Portfolio</div>
            <div className={`${"size_two pink_bg_btn"} ${"box"}`}>See Portfolio</div>
          </div>
        </div>
      </div>

      <div className={css.end_section}>

        <p>
          Discover a world of creativity in our videos, designs, and illustrations. Find the perfect spark for your next project!
        </p>
      </div>
    </section>
  );
};

export default Projectslider;


