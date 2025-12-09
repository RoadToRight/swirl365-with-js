import React from 'react'
import css from "../../styles/Home/ProjectMarquee.module.scss"
import { FaPlay } from 'react-icons/fa'
import Link from 'next/link'

const ProjectMarquee = ({ HeaderText, images, direction, width, gap,HandleClickVideo }) => {
console.log(images)

    return (
        <section>

            {
                HeaderText && <header className={css.MarqueeText}>
                    <strong>Used by over 450+ of the world's best startups and established enterprises</strong>
                </header>
            }

            <div className={css.slider_Section}>

                <div style={{ "--gap": `${gap ? gap : "100px"}` }} className={`${css.container_parent} ${direction === "right" && `${css.marquee_right_Parent}`}`}>
                    <div style={{ "--gap": `${gap ? gap : "100px"}` }} className={`${css.track} ${direction === "right" ? `${css.marquee_right}` : `${css.marquee_left}`}`} >

                        {
                            images?.map((img, index) => {
                                return (
                                    <div key={img.image} className={css.images} style={{ width: `${width ? width : "360px"}`, position: "relative" }}>
                                        <img style={{ width: `${width ? width : "115px"}` }} src={img.image} alt={img.alt} />
                                        <div className={css.overlay}>
                                            <FaPlay className={css.play_btn} size={35} color='white' onClick={() => HandleClickVideo(img.url)}/>
                                        </div>
                                    </div>

                                )
                            })

                        }

                    </div>

                    <div style={{ "--gap": `${gap ? gap : "100px"}` }} className={`${css.track} ${direction === "right" ? `${css.marquee_right}` : `${css.marquee_left}`}`} >

                        {
                            images?.map((img, index) => {
                                return (
                                    <div key={img.images} className={css.images} style={{ width: `${width ? width : "360px"}`, position: "relative" }}>
                                        <img style={{ width: `${width ? width : "115px"}` }} src={img.images} alt={img.alt} />
                                        <div className={css.overlay}>
                                            <FaPlay className={css.play_btn} size={35} color='white' />
                                        </div>
                                    </div>

                                )
                            })

                        }

                    </div>

                </div>

            </div>
        </section>
    )
}

export default ProjectMarquee
