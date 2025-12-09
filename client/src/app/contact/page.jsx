import React from 'react'
import css from "../../styles/Contact/contact.module.scss"

const Contact = () => {
    return (
        <section className={css.contactSection}>
            <div className={`${css.container_parent} container`}>
                <header>
                    <h1>Ready to Partner up?</h1>
                    <h3>Contact us</h3>
                    <p>We are a leader video company that connects brands and people through tailor-made video content.</p>
                </header>

                <div className={css.two_section}>
                    <div className={css.text}>
                        <h2>Let's Connect! 👋</h2>
                        <p>
                            We are a leading explainer video company that connects brands and people through tailor-made video content.

                            Trusted by global brands, we cater to diverse clients, from small startups to Fortune 500 companies.

                            Let's talk about your project – whatever the challenge, we've got you covered. Fill out the form to get started!
                        </p>

                        <strong>Follow us</strong>

                        <address>
                            <h4>Miami</h4>
                            <p>1900 N Bayshore Dr., Suite 1A #136-12406
                                Miami, Florida, 33132, USA</p>
                        </address>
                    </div>

                    <div className={css.form}>
                        <form action="">

                            <div className={css.name}>
                                <input type="text" placeholder='Type your first name' />
                                <input type="text" placeholder='Type your last name' />
                            </div>

                            <div className={css.email_Section}>
                                <input type="text" placeholder='Type your email name' />
                            </div>

                            <div className={css.selection_input}>
                                <select name="" id="" >
                                    <option value="" disabled selected hidden>Select a project budget</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>

                                <select name="" id="" >
                                    <option value="" disabled selected hidden>Select your industry</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>



                            </div>

                            <div className={css.textarea}>
                                <textarea placeholder="Comments" cols={8} rows={8}></textarea>

                            </div>

                            {/* <div className={css.btn}>
                                <button>Get a Quote</button>
                            </div> */}

                            <div className={`${css.btn}`}>
                                <div className={"wrapper"}>
                                    <div className={`${"box_area"}`}>
                                        <div className={`${"size_one black_bg_btn"} ${"box"}`}>Get an estimate</div>
                                        <div className={`${"size_two black_bg_btn"} ${"box"}`}>Get an estimate</div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact
