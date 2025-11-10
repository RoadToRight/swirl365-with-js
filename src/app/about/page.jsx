import React from 'react'
import css from "../../styles/About/about.module.scss"
import ThreeIconCards from '@/components/About/ThreeIconCards'
import QuotesSlider from '@/components/About/QuotesSlider'
import Counter from '@/components/Counter'
import Marquee from '@/components/Marquee'
// import Image from 'next/image'

const Page = () => {
    return (
        <div>
            <section className={css.about}>
                <img src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1759613595/Ball_m4brjx.webp" alt="" className={css.ball} />
                <div className={`container ${css.container_about}`}>
                    <div className={css.upper_Text}>
                        <h1>We make videos that bring companies to life</h1>
                        <h2>Our Company</h2>
                        <p>Browse through our award-winning work for both live-action and animation, motion graphics and get your creative juices flowing for your next video project.</p>
                    </div>

                    <div className={css.imageTextParent}>
                        <div className={css.imagetext}>
                            <div className={css.text}>
                                <h3 className={css.head}>Who are we?</h3>
                                <p>
                                    At Swirl 365, we’re a team of forward-thinkers and problem-solvers dedicated to crafting exceptional digital experiences. From 2D and 3D animation to web and app development, social media marketing, and beyond, we specialize in providing tailored solutions to meet the unique needs of our clients. Our mission is to transform ideas into impactful outcomes, and we pride ourselves on delivering quality, innovation, and reliability in everything we do. Together, we are Swirl 365 — a hub where creativity and technology converge.
                                </p>
                            </div>
                            <div className={css.image}>
                                <img src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1762702728/about1_swirl365_ruclga.webp" alt="About us" width={900} height={500} />
                            </div>
                        </div>

                        <div className={css.imagetext}>

                            <div className={css.image}>
                                <img src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1762702730/about2_swirl365_omcczx.webp" alt="About us" width={900} height={500} />
                            </div>

                            <div className={css.text}>
                                <h3 className={css.head}>Who are we?</h3>
                                <p>
                                    At Swirl 365, we’re a team of forward-thinkers and problem-solvers dedicated to crafting exceptional digital experiences. From 2D and 3D animation to web and app development, social media marketing, and beyond, we specialize in providing tailored solutions to meet the unique needs of our clients. Our mission is to transform ideas into impactful outcomes, and we pride ourselves on delivering quality, innovation, and reliability in everything we do. Together, we are Swirl 365 — a hub where creativity and technology converge.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>



            </section>
            <Counter />
            <Marquee 
                direction={"left"}
                HeaderText={true}
            />
            <ThreeIconCards />
            <QuotesSlider />

        </div>
    )
}

export default Page
