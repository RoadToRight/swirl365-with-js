"use client"
import React from 'react'
import css from "../../styles/Home/ImageTextHome.module.scss"


const ImageText = () => {
  return (
    <section className={`${css.Section_Four_Home}`} >

    <div className={`${css.container_parent} container`}>
      <div className={`${css.image_section}`}>

        <img
          src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1760203006/Purple_Section_img_yfs6cn.webp"
          alt="Top Tier Image"
          width={600}
          height={460}
        />

    


      </div>

      <div className={`${css.text_Section}`}>
        <header>
          <h2>Top-tier animation that</h2>
          <h2>stands out from the rest</h2>
        </header>
        <p>Effectively convey technical concepts and bridge the gap with your audience. Our team will manage the entire process for you, ensuring a seamless experience from start to finish. We&apos;ll begin with the initial concept, carefully crafting a storyboard that outlines the flow and key points of your message. Next, we'll develop a unique style that aligns with your brand and resonates with your audience.</p>



        <div className={`${css.btn}`}>
          <div className={"wrapper"}>
            <div className={`${"box_area"}`}>
              <div className={`${"size_one black_bg_btn"} ${"box"}`}>Get an estimate</div>
              <div className={`${"size_two black_bg_btn"} ${"box"}`}>Get an estimate</div>
            </div>
          </div>
        </div>

      </div>
</div>
    </section>
  )
}

export default ImageText
