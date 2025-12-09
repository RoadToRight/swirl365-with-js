import React from 'react';
import css from "../../styles/Home/HomeVideo.module.scss"

const Video = () => {
  return (
    <section className={css.video_div} aria-label="Hero Section">
      <video
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        className={css.video}
      >
        <source src="https://res.cloudinary.com/dp6b6emb9/video/upload/v1762913266/Swirl_Starting_Video_1_gyku2k_online-video-cutter.com_online-video-cutter.com_1_rbtp8j.mp4" type="video/mp4" />
        {/* <source src="https://res.cloudinary.com/dp6b6emb9/video/upload/v1762913266/Swirl_Starting_Video_1_gyku2k_online-video-cutter.com_online-video-cutter.com_1_rbtp8j.webm" type="video/webm" /> */}
        <track
          src="captions.vtt"
          kind="captions"
          srcLang="en"
          label="English"
          default
        />
      </video>
    </section>
  );
};

export default Video;
