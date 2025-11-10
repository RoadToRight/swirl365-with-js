import React from 'react'
import css from "../styles/marquee.module.scss"

const Marquee = ({ HeaderText,images, direction , width,gap }) => {
console.log(HeaderText)

  const Images = [
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760204173/Capital_Research_Logo_zogok1.webp", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760204171/Tag_Logo_ulktvg.webp", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1760204020/DNA_Logo_rbpsya.webp", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1759926893/logo_5_azhmqo.png", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1759926893/logo_3_joci1k.png", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1759926893/logo_4_rtyu6i.png", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1759926893/logo_2_f76wgp.png", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1759926872/Logo1_m6hhfp.webp", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1759926673/logo6_zkx8rp.webp", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1759926655/easy_reviews_iiobs4.webp", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1759926655/EuroDNS_dlec2o.webp", alt: "" },
    { images: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1759926654/EuroNMD_2_d5lxvz.webp", alt: "" },
  ]

  return (
    <section>
      {
        HeaderText && <header className={css.MarqueeText}>
          <strong>Used by over 450+ of the world's best startups and established enterprises</strong>
        </header>
      }

      <div className={css.slider_Section}>

        <div style={{"--gap":`${gap ? gap : "100px"}`}} className={`${css.container_parent} ${direction === "right" && `${css.marquee_right_Parent}`}`}>
          <div style={{"--gap":`${gap ? gap : "100px"}`}} className={`${css.track} ${direction === "right" ? `${css.marquee_right}` : `${css.marquee_left}`}`} >

             {
            
            images ? 

            images?.map((img, index) => {
              return (
                <img style={{ width:`${width ? width : "115px"}` }} key={img.images} src={img.images} alt={img.alt} />
              )
            }) : 

              Images?.map((img, index) => {
              return (
                <img style={{ width:`${width ? width : "115px"}` }} key={img.images} src={img.images} alt={img.alt} />
              )
            })
            
            }

          </div>

          <div style={{"--gap":`${gap ? gap : "100px"}`}} className={`${css.track} ${direction === "right" ? `${css.marquee_right}` : `${css.marquee_left}`}`} >

            {
            
            images ? 

            images?.map((img, index) => {
              return (
                <img style={{ width:`${width ? width : "115px"}` }} key={img.images} src={img.images} alt={img.alt} />
              )
            }) : 

              Images?.map((img, index) => {
              return (
                <img style={{ width:`${width ? width : "115px"}` }} key={img.images} src={img.images} alt={img.alt} />
              )
            })
            
            }

          </div>
        </div>

      </div>
    </section>
  )
}

export default Marquee
