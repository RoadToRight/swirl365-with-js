import React from 'react'
import css from "../../styles/About/ThreeIconCards.module.scss"
// import Image from 'next/image'

const ThreeIconCards = () => {
    return (
        <section className={css.threeIconCards}>
            <div className={`${css.container} ${css.container_threeIconCard}`}>
                <div className={css.card}>
                    <div className="icon_img"><img src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1762710577/icon1_vr4cyb.png" alt="" /></div>
                    <h2>Maximize every dollar</h2>
                    <p>Don’t rely on a single video. We can easily turn each video into multiple assets—customized for different channels, resized for social platforms, and repurposed into shorter clips or visuals. You’ll get the most out of your budget with a high-quality bank of branded assets.</p>
                    <h3>Message us →</h3>
                </div>
                <div className={css.card}>
                    <div className="icon_img"><img  src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1762710577/icon2_agcgv8.png" alt="" /></div>
                    <h2>Creative built for results</h2>
                    <p>We’ve achieved the perfect blend of creative, production and marketing strategy across hundreds of projects. Join our strategy calls for guidance on your video marketing plan, or our creative idea jams so you can see us in action.</p>
                    <h3>Book strategy call →</h3>
                </div>
                <div className={css.card}>
                    <div className="icon_img"><img  src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1762710578/icon3_v9a6ez.png" alt="" /></div>
                    <h2>Flexible pricing models</h2>
                    <p>Whether it’s a single project or a long-term plan, we provide flexible pricing options. We’ll help you find the perfect fit for your budget and goals—making high-quality video content accessible and maximizing the value of your investment.</p>
                    <h3>Get pricing →</h3>
                </div>
            </div>
        </section>
    )
}

export default ThreeIconCards
