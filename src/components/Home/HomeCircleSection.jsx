"use client"
import React, { useState } from 'react'
import css from "../../styles/Home/HomeCircleSection.module.scss"
import Link from 'next/link'
import {  useSelector } from 'react-redux'

const Circle = () => {



    const [tilts, settilts] = useState({
        firstCircle: { rotateX: 0, rotateY: 0, scale3d: "1,1,1" },
        secondCircle: { rotateX: 0, rotateY: 0, scale3d: "1,1,1" },
        thirdCircle: { rotateX: 0, rotateY: 0, scale3d: "1,1,1" },
        fourthCircle: { rotateX: 0, rotateY: 0, scale3d: "1,1,1" },
        fifthCircle: { rotateX: 0, rotateY: 0, scale3d: "1,1,1" },
        sixthCircle: { rotateX: 0, rotateY: 0, scale3d: "1,1,1" },
        sevenCircle: { rotateX: 0, rotateY: 0, scale3d: "1,1,1" },
        eightCircle: { rotateX: 0, rotateY: 0, scale3d: "1,1,1" },
    })

    const CircleMove = (e, circle) => {

        const box = (e.target).getBoundingClientRect();
        const centerX = box.left + box.width / 2;
        const centerY = box.top + box.height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateX = -(mouseY / box.height) * 35;
        const rotateY = (mouseX / box.width) * 35;

        // Update the tilt state for the specific circle
        settilts((prev) => ({
            ...prev,
            [circle]: { rotateX, rotateY },
        }));
    };
    const handleMouseLeave = (circle) => {
        settilts((prev) => ({
            ...prev,
            [circle]: { rotateX: 0, rotateY: 0 },
        }));
    };


    const isDarkMode= useSelector((state) => state.darkMode.isDarkMode);
   
        console.log(isDarkMode)

    return (
        <section className={css.HomeCircleSection} style={{background:`${isDarkMode ? "black" : "yellow"}`}}>

            <div className={`${css.animationCircle} container`}>
                <div className={css.circleDiv}>
                    <div className={css.imgBg}>
                        <img
                            src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1760204302/Circle_Animation_yeigmq.webp"
                            width={"100%"}
                            height={"100%"}
                            alt="Circle Animation"
                        />
                    </div>
                    <div className={css.labels}>
                        <div className={`${css.labelsCircle} ${css.labelsCircle1}`}
                            style={{
                                transform: `perspective(150px) rotateX(${tilts.firstCircle.rotateX}deg) rotateY(${tilts.firstCircle.rotateY}deg) `,
                                transition: `all 120ms ease`,
                            }}
                            onMouseMove={(e) => CircleMove(e, "firstCircle")}
                            onMouseLeave={() => handleMouseLeave("firstCircle")}><span className={css.circle_text}>Motion Graphics</span></div>
                        <div className={`${css.labelsCircle} ${css.labelsCircle2}`}
                            style={{
                                transform: `perspective(150px) rotateX(${tilts.secondCircle.rotateX}deg) rotateY(${tilts.secondCircle.rotateY}deg) `,
                                transition: `all 120ms ease`,
                            }}
                            onMouseMove={(e) => CircleMove(e, "secondCircle")}
                            onMouseLeave={() => handleMouseLeave("secondCircle")}
                        >
                            <span className={css.circle_text}>Motion Graphics</span>
                        </div>
                        <div className={`${css.labelsCircle} ${css.labelsCircle3}`}
                            style={{
                                transform: `perspective(150px) rotateX(${tilts.thirdCircle.rotateX}deg) rotateY(${tilts.thirdCircle.rotateY}deg) `,
                                transition: `all 120ms ease`,
                            }}
                            onMouseMove={(e) => CircleMove(e, "thirdCircle")}
                            onMouseLeave={() => handleMouseLeave("thirdCircle")}
                        ><span className={css.circle_text}>3D/2D Animations</span></div>
                        <div className={`${css.labelsCircle} ${css.labelsCircle4}`}
                            style={{
                                transform: `perspective(150px) rotateX(${tilts.fourthCircle.rotateX}deg) rotateY(${tilts.fourthCircle.rotateY}deg) `,
                                transition: `all 120ms ease`,
                            }}
                            onMouseMove={(e) => CircleMove(e, "fourthCircle")}
                            onMouseLeave={() => handleMouseLeave("fourthCircle")}
                        ><span className={css.circle_text}>Video Editing</span></div>
                    </div>
                </div>

                <div className={css.text}>
                    <header className={css.heading}>
                        <h2> Ignite Creativity with Expert Animation Video Services</h2>
                    </header>
                    <p>
                        What makes our custom video animation services unique? It&apos;s straightforward! Our video animation company is passionate about storytelling and committed to delivering top-notch animation video services. We believe that every animation should not only look fantastic but also resonate with your audience. That&apos;s why we invest time in understanding your brand, message, and audience to create tailored animation video services.
                    </p>
                    {/* <div className={css.btn}>
                      <button> <Link href="#">Get an estimate</Link></button>
                    </div> */}

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


            <div className={`${css.animationCircle} ${css.animationCircle2} container`}>

                <div className={css.text}>
                    <header className={css.heading}>
                        <h2>Unlock Your Business's Full Potential with Expert Web Development</h2>
                    </header>
                    <p>
                        Transform your business with Swirl365's groundbreaking web solutions. Our expertise in website development helps you establish a dominant online presence and stay ahead of the curve
                    </p>
                    {/* <div className={css.
                    
                    }>
                       <Link href="#"><button>Get an estimate</button></Link>
                    </div> */}

                    <div className={`${css.btn}`}>
                        <div className={"wrapper"}>
                            <div className={`${"box_area"}`}>
                                <div className={`${"size_one black_bg_btn"} ${"box"}`}>Get an estimate</div>
                                <div className={`${"size_two black_bg_btn"} ${"box"}`}>Get an estimate</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={css.circleDiv}>
                    <div className={css.imgBg}>
                        <img
                            src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1760202792/Circle_Web_aqenuz.webp"
                            width={"100%"}
                            height={"100%"}
                            alt="Circle Animation"
                        />
                    </div>
                    <div className={css.labels}>

                        <div className={`${css.labelsCircle} ${css.labelsCircle5}`}
                            style={{
                                transform: `perspective(150px) rotateX(${tilts.fifthCircle.rotateX}deg) rotateY(${tilts.fifthCircle.rotateY}deg) `,
                                transition: `all 120ms ease`,
                            }}
                            onMouseMove={(e) => CircleMove(e, "fifthCircle")}
                            onMouseLeave={() => handleMouseLeave("fifthCircle")}
                        ><span className={css.circle_text}>Static Website</span></div>

                        <div className={`${css.labelsCircle} ${css.labelsCircle6}`}
                            style={{
                                transform: `perspective(150px) rotateX(${tilts.sixthCircle.rotateX}deg) rotateY(${tilts.sixthCircle.rotateY}deg) `,
                                transition: `all 120ms ease`,
                            }}
                            onMouseMove={(e) => CircleMove(e, "sixthCircle")}
                            onMouseLeave={() => handleMouseLeave("sixthCircle")}
                        ><span className={css.circle_text}>Responsive Website</span></div>
                        <div className={`${css.labelsCircle} ${css.labelsCircle7}`}
                            style={{
                                transform: `perspective(150px) rotateX(${tilts.sevenCircle.rotateX}deg) rotateY(${tilts.sevenCircle.rotateY}deg) `,
                                transition: `all 120ms ease`,
                            }}
                            onMouseMove={(e) => CircleMove(e, "sevenCircle")}
                            onMouseLeave={() => handleMouseLeave("sevenCircle")}
                        ><span className={css.circle_text}>Stores</span></div>
                        <div className={`${css.labelsCircle} ${css.labelsCircle8}`}
                            style={{
                                transform: `perspective(150px) rotateX(${tilts.eightCircle.rotateX}deg) rotateY(${tilts.eightCircle.rotateY}deg) `,
                                transition: `all 120ms ease`,
                            }}
                            onMouseMove={(e) => CircleMove(e, "eightCircle")}
                            onMouseLeave={() => handleMouseLeave("eightCircle")}
                        ><span className={css.circle_text}>CMS Website</span></div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Circle
