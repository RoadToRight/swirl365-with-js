"use client"
import React, { useRef, useState } from 'react'
import css from "../../styles/About/QuotesSlider.module.scss"
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const QuotesSlider = () => {
    const slide = useRef(null)

    const [ScrollX, setScrollX] = useState(0)

    const onSlide = (e, direction) => {

        if (slide.current) {

            let container = slide.current

            const itemWidth = container.offsetWidth;
            const maxScroll = container.scrollWidth - itemWidth;

            if (direction === "next") {
                if (container.scrollLeft < maxScroll) {
                    slide.current.scrollLeft += itemWidth;
                } else {
                    container.scrollLeft = 0;
                }
            } else if (container.scrollLeft == 0) {
                slide.current.scrollLeft += itemWidth;
            } else {
                slide.current.scrollLeft -= itemWidth;
            }



        }
    }

    const Quotes = [
        {
            quote: "“I can only repeat what I have already said about Swirl365 work, it is exceptional work, always punctual, and open to any proposal for improvement. Without a doubt, my trusted agency for these jobs. 1,000% recommended.”",
            img: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1759926872/Logo1_m6hhfp.webp"
        },
        {
            quote: "“Very professional. Very patient. Amazing job.”",
            img: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1759926893/logo_2_f76wgp.png"
        },
        {
            quote: "“Great to work on a project again. Quality you can depend on.”",
            img: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1759926655/little_squiggle_gamusf.webp"
        }
    ]

    return (
        <section className={css.QuoteSliderSection}>
            <div className={`${css.container_parent} container`}>
                <div className={css.left_section}>
                    <header>
                        <h2>And loved by our customers</h2>
                        <div className={css.arrows}>
                            <MdKeyboardArrowLeft size={50} cursor={"pointer"} color='rgb(199, 7, 228)' onClick={(e) => onSlide(e, "prev")} />
                                <MdKeyboardArrowRight cursor={"pointer"} size={50} color='rgb(199, 7, 228)' onClick={(e) => onSlide(e, "next")} />
                        </div>
                    </header>
                </div>
                <div className={css.right_section} ref={slide}>

                    {
                        Quotes?.map((quote, index) => {
                            return (
                                <div key={quote.quote} className={css.quote}>
                                    <blockquote>
                                       {quote.quote}
                                    </blockquote>
                                    <div className={css.img_review}>
                                        <img src={quote.img} alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }


    
                </div>
            </div>
        </section>
    )
}

export default QuotesSlider
