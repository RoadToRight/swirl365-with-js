import React from 'react'
import css from "../../styles/Footer/ReadyTomake.module.scss"

const ReadyTomake = () => {
    return (
        <section className={css.ReadyToMake}>
            <div className={`${css.ready} ${css.container}`}>
                <header>
                    <h3 className={css.head}>Ready to make a video? 🎉</h3>
                    <p>New to swril365? You can try us out before formal engagement. Really!</p>
                </header>

                {/* <button className={css.btn}>Lets’ Talk</button> */}

                <div className={`${css.btn}`}>
                    <div className={"wrapper"}>
                        <div className={`${"box_area"}`}>
                            <div className={`${"size_one pink_bg_btn"} ${"box"}`}>Lets’ Talk</div>
                            <div className={`${"size_two pink_bg_btn"} ${"box"}`}>Lets’ Talk</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ReadyTomake
