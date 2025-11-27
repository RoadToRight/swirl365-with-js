import React from 'react'
import css from "../../styles/Pricing/pricing.module.scss"
import { RxCross2 } from "react-icons/rx";
import QuotesSlider from '@/components/About/QuotesSlider';
import Marquee from '@/components/Marquee';

const Pricing = () => {
    return (
        <div>
        <section className={css.Pricing_section}>
            <div className={`${css.container_parent} container`}>
                <header>
                    <h1>Pricing Plans</h1>
                    <h3>Our Plans includes:</h3>
                    <ul>
                        <li><img src="/tick.png" className={css.tick} alt="" />Custom Illustrations & Custom Characters</li>
                        <li><img src="/tick.png" className={css.tick} alt="" />Unlimited number of projects</li>
                        <li><img src="/tick.png" className={css.tick} alt="" />Music library</li>
                        <li><img src="/tick.png" className={css.tick} alt="" />Upto 4K Resolution</li>
                        <li><img src="/tick.png" className={css.tick} alt="" />Download as MP4</li>
                    </ul>
                    <h4>save up to 64% on an annual plan</h4>
                </header>

                <div className={css.plans}>

                    <div className={css.basic}>
                        <div className={css.plan}>
                            <h3><strong>Basic</strong></h3>
                            <h3><strong>$499.00</strong></h3>
                            <div className={css.divider}></div>
                            <ul>
                                <li>
                                    <img src="/tick.png" className={css.tick} alt="" /><h4>30 second duration</h4>
                                </li>
                                <li>
                                    <img src="/tick.png" className={css.tick} alt="" /><h4>Ai Voiceover</h4>
                                </li>
                                <li>
                                    <img src="/tick.png" className={css.tick} alt="" /><h4>Licensed free music and sfx</h4>
                                </li>
                                <li>
                                    <img src="/tick.png" className={css.tick} alt="" /><h4>HD Quality</h4>
                                </li>
                                <li>
                                    <img src="/tick.png" className={css.tick} alt="" /><h4>5 revisions</h4>
                                </li>
                                <li>
                                    <img src="/tick.png" className={css.tick} alt="" /><h4>Dedicated support</h4>
                                </li>
                                <li>
                                    <RxCross2 /> <h4>4K Quality</h4>
                                </li>
                                <li>
                                    <RxCross2 /> <h4>Custom Illustration</h4>
                                </li>
                                <li>
                                    <RxCross2 /><h4>Custom Characters</h4>
                                </li>
                                <li>
                                    <RxCross2 /> <h4>Script Writing</h4>
                                </li>
                            </ul>
                        </div>

                        <div className={css.example}>
                            <h5>For Examples</h5>
                            <div className={css.divider}></div>
                            <div className={css.three_ex}>
                                <div className={css.video_sm}>
                                    <img src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267087/Haive_swirl365_uo8wdv.webp" alt="" />
                                    <div className={css.play_btn}></div>
                                </div>
                                <div className={css.video_sm}>
                                    <img src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267085/property_swirl365_up2l4a.webp" alt="" />
                                    <div className={css.play_btn}></div>
                                </div>
                                <div className={css.video_sm}>
                                    <img src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267086/promise_Swirl365_w7d7p1.webp" alt="" />
                                    <div className={css.play_btn}></div>
                                </div>
                            </div>
                        </div>

                        {/* <div className={css.getabtn}>
                            <button>Get a Quote</button>
                        </div> */}

                        <div className={`${css.btn}`}>
                            <div className={"wrapper"}>
                                <div className={`${"box_area"}`}>
                                    <div className={`${"size_one purple_bg_btn"} ${"box"}`}>Get an estimate</div>
                                    <div className={`${"size_two purple_bg_btn"} ${"box"}`}>Get an estimate</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={css.standard}>
                        <div className={css.plan}>
                            <div className={css.best}><strong>Best Choice</strong></div>
                            <h3><strong>Standard</strong></h3>
                            <h3><strong>$999.00</strong></h3>
                            <div className={css.divider}></div>
                            <ul>
                                <li>
                                    <img src="/tick white.png" className={css.tick} alt="" /><h4>60 second duration</h4>
                                </li>
                                <li>
                                    <img src="/tick white.png" className={css.tick} alt="" /><h4>Ai Voiceover</h4>
                                </li>
                                <li>
                                    <img src="/tick white.png" className={css.tick} alt="" /><h4>Licensed free music and sfx</h4>
                                </li>
                                <li>
                                    <img src="/tick white.png" className={css.tick} alt="" /><h4>HD Quality</h4>
                                </li>
                                <li>
                                    <img src="/tick white.png" className={css.tick} alt="" /><h4>8 revisions</h4>
                                </li>
                                <li>
                                    <img src="/tick white.png" className={css.tick} alt="" /><h4>Dedicated support</h4>
                                </li>
                                <li>
                                    <RxCross2 /> <h4>4K Quality</h4>
                                </li>
                                <li>
                                    <RxCross2 /> <h4>Custom Illustration</h4>
                                </li>
                                <li>
                                    <RxCross2 /><h4>Custom Characters</h4>
                                </li>
                                <li>
                                    <RxCross2 /> <h4>Script Writing</h4>
                                </li>
                            </ul>
                        </div>

                        <div className={css.example}>
                            <h5>For Examples</h5>
                            <div className={css.divider}></div>
                            <div className={css.three_ex}>
                                <div className={css.video_sm}>
                                    <img src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267091/zycada_swirl365_k03ceo.webp" alt="" />
                                    <div className={css.play_btn}></div>
                                </div>
                                <div className={css.video_sm}>
                                    <img src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267088/sprinto_swirl365_zmoagl.webp" alt="" />
                                    <div className={css.play_btn}></div>
                                </div>
                                <div className={css.video_sm}>
                                    <img src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267088/game_swirl365_rvqtmy.webp" alt="" />
                                    <div className={css.play_btn}></div>
                                </div>
                            </div>
                        </div>

                        {/* <div className={css.getabtn}>
                            <button>Get a Quote</button>
                        </div> */}

                        <div className={`${css.btn}`}>
                            <div className={"wrapper"}>
                                <div className={`${"box_area"}`}>
                                    <div className={`${"size_one purple_bg_btn"} ${"box"}`}>Get an estimate</div>
                                    <div className={`${"size_two purple_bg_btn"} ${"box"}`}>Get an estimate</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className={css.premium}>
                        <div className={css.plan}>
                            <h3><strong>Premium</strong></h3>
                            <h3><strong>$1499.00</strong></h3>
                            <div className={css.divider}></div>
                            <ul>
                                <li>
                                    <img src="/tick.png" className={css.tick} alt="" /><h4>90 second duration</h4>
                                </li>
                                <li>
                                    <img src="/tick.png" className={css.tick} alt="" /><h4>Ai Voiceover</h4>
                                </li>
                                <li>
                                    <img src="/tick.png" className={css.tick} alt="" /><h4>Licensed free music and sfx</h4>
                                </li>
                                <li>
                                    <img src="/tick.png" className={css.tick} alt="" /><h4>HD Quality</h4>
                                </li>
                                <li>
                                    <img src="/tick.png" className={css.tick} alt="" /><h4>Unlimited revisions</h4>
                                </li>
                                <li>
                                    <img src="/tick.png" className={css.tick} alt="" /><h4>Dedicated support</h4>
                                </li>
                                <li>
                                    <img src="/tick.png" className={css.tick} alt="" /> <h4>4K Quality</h4>
                                </li>
                                <li>
                                    <img src="/tick.png" className={css.tick} alt="" /> <h4>Custom Illustration</h4>
                                </li>
                                <li>
                                    <img src="/tick.png" className={css.tick} alt="" /><h4>Custom Characters</h4>
                                </li>
                                <li>
                                    <img src="/tick.png" className={css.tick} alt="" /> <h4>Script Writing</h4>
                                </li>
                            </ul>
                        </div>

                        <div className={css.example}>
                            <h5>For Examples</h5>
                            <div className={css.divider}></div>
                            <div className={css.three_ex}>
                                <div className={css.video_sm}>
                                    <img src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267085/TrustQuay_swirl365_svmxn1.jpg" alt="" />
                                    <div className={css.play_btn}></div>
                                </div>
                                <div className={css.video_sm}>
                                    <img src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267098/zoomprop_swirl365_dyzetc.webp" alt="" />
                                    <div className={css.play_btn}></div>
                                </div>
                                <div className={css.video_sm}>
                                    <img src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1760267091/commitment_swirl365_hejvaa.webp" alt="" />
                                    <div className={css.play_btn}></div>
                                </div>
                            </div>
                        </div>

                        {/* <div className={css.getabtn}>
                            <button>Get a Quote</button>
                        </div> */}

                        <div className={`${css.btn}`}>
                            <div className={"wrapper"}>
                                <div className={`${"box_area"}`}>
                                    <div className={`${"size_one purple_bg_btn"} ${"box"}`}>Get an estimate</div>
                                    <div className={`${"size_two purple_bg_btn"} ${"box"}`}>Get an estimate</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <h6>OR</h6>

                <div className={css.custom_plan}>
                    <div className={css.text}>
                        <h3><strong>Custom Crafted</strong></h3>
                        <p>Want every pixel customized to perfection? Contact us today to schedule a call and bring your vision to life!</p>
                    </div>

                    {/* <div className={css.btn}><button>Contact Now</button></div> */}

                    <div className={`${css.btn}`}>
                        <div className={"wrapper"}>
                            <div className={`${"box_area"}`}>
                                <div className={`${"size_one white_bg_btn"} ${"box"}`}>Get an estimate</div>
                                <div className={`${"size_two white_bg_btn"} ${"box"}`}>Get an estimate</div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </section>

         <Marquee 
                direction={"left"}
                HeaderText={true}
            />             
        <QuotesSlider />
        </div>
    )
}

export default Pricing
