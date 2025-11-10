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
        <source src="https://res.cloudinary.com/diyha1kd9/video/upload/v1741212763/Swirl_Starting_Video_1_gyku2k.mp4" type="video/mp4" />
        <source src="https://res.cloudinary.com/diyha1kd9/video/upload/v1741212763/Swirl_Starting_Video_1_gyku2k.webm" type="video/webm" />
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
