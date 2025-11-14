
import React from 'react'
import css from "../../styles/Home/QuoteSectionHome.module.scss"

const Quotes = () => {
    return (
        <section className={css.section7}>
            <header>
                 <strong><small>Testimonials</small></strong>
            <h2>What Our clients say about us</h2>
            </header>
            <div className={css.Quotes}>
                <div className={css.quote_one_two}>
                    <figure  className={`${css.quote} ${css.quote1}`} style={{ gridArea: "quote-1" }}>
                        <blockquote  className={css.text}>I can only repeat what I have already said about Swirl365 work, it is exceptional work, always punctual, and open to any proposal for improvement. Without a doubt, my trusted agency for these jobs. 1,000% recommended.</blockquote>
                        <figcaption  className={css.img}><img src={"https://res.cloudinary.com/dp6b6emb9/image/upload/v1759926872/Logo1_m6hhfp.webp"}  alt='Review1 Image'  /></figcaption>
                    </figure>
                    <figure  className={`${css.quote} ${css.quote2}`} style={{ gridArea: "quote-2" }}>
                        <blockquote className="css.text">Very professional. Very patient. Amazing job.</blockquote>
                        <figcaption  className={css.img}><img src={"https://res.cloudinary.com/dp6b6emb9/image/upload/v1759926656/Psionic_Logo_uvbpjp.webp"}  alt='Review1 Image'  /></figcaption>
                    </figure>
                </div>
                <div className={css.quote_three_four_five}>
                    <figure  className={`${css.quote} ${css.quote3}`} style={{ gridArea: "quote-3" }}>
                        <blockquote className={css.text}>Great to work on a project again. Quality you can depend on.</blockquote>
                        <figcaption  className={css.img}><img src={"https://res.cloudinary.com/dp6b6emb9/image/upload/v1759926654/de_logo_ifrjc3.webp"}  alt='Review1 Image'  /></figcaption>
                    </figure>
                    <figure  className={`${css.quote} ${css.quote4}`} style={{ gridArea: "quote-4" }}>
                        <blockquote className={css.text}>Syed, it really looks great! Love the overall video!  TY TY TY!</blockquote>
                        <figcaption  className={css.img}><img src={"https://res.cloudinary.com/dp6b6emb9/image/upload/v1759926893/logo_2_f76wgp.png"}  alt='Review1 Image'  /></figcaption>
                    </figure>
                    <figure  className={`${css.quote} ${css.quote5}`} style={{ gridArea: "quote-5" }}>
                        <blockquote className={css.text}>Exceptional work. Always delivered on time and with good communication. Did all of his work custom made. Highly recommend Swirl365</blockquote>
                        <figcaption  className={css.img}><img src={"https://res.cloudinary.com/dp6b6emb9/image/upload/v1759926893/logo_3_joci1k.png"}  alt='Review1 Image'  /></figcaption>
                    </figure>
                </div>
                <figure  className={`${css.quote} ${css.quote6}`} style={{ gridArea: "css.quote-6" }}>
                    <blockquote className={css.text}>We had the pleasure of working with Swirl365 on creating animated videos, and the experience was absolutely fantastic. Swirl365 is a true professional agency with a rare talent for executing creative projects. From the very beginning, it was clear that he understood exactly what we were looking for and was able to translate our ideas into high-quality animated videos. Throughout the entire process, Swirl365 demonstrated a positive attitude, complete flexibility, and an impressive ability to grasp our needs. He delivered on time, was always open to feedback, and implemented every request with precision and professionalism. The quality of the work was outstanding, with smooth animations, visually captivating.</blockquote>
                    <figcaption  className={css.img}><img src={"https://res.cloudinary.com/dp6b6emb9/image/upload/v1759926673/logo6_zkx8rp.webp"}  alt='Review1 Image'  /></figcaption>
                </figure>
            </div>
        </section>
    )
}

export default Quotes
