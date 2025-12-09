import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import css from "../../styles/Footer/footer.module.scss"
import ReadyTomake from './ReadyToMake';

const Footer = () => {
  return (
    <div>
        <ReadyTomake />
    <footer className={css.footer}>

      <div className={`${css.container_parent} container`}>
        <div className={`${css.item} ${css.item_logo}`}>
          <img src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1760203583/Swirl_White_Logo_ge4ejj.webp" alt="" />
          <p>The video production company you've been looking for.</p>
        </div>
        <div className={css.item}>
          <h3>Company</h3>
          <ul>
            <li>Work</li>
            <li>About</li>
            <li>Directors</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={`${css.item} ${css.item_nohead}`}>
          <ul>
            <li>Testinomials</li>
            <li>Careers</li>
            <li>Q&A</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className={css.item}>
          <h3>Capabilities</h3>
          <ul>
            <li>Brand,Product</li>
            <li>& Explainer Videos</li>
            <li>Video Series</li>
            <li>Illustrations</li>
          </ul>
        </div>
        <div className={`${css.item} ${css.item_nohead}`}>
          <ul>
            <li>Commercials</li>
            <li>Motion Design</li>
            <li>Character Design</li>
            <li>Digital animation</li>
          </ul>
        </div>
      </div>

      <div className={css.footer_bottom}>
        <div className={css.item}>All rights reserved © 2025 Swirl365</div>
        <div className={css.item_links}>
          <FaInstagram />
          <FaFacebook />
          <FaYoutube />
          <FaLinkedinIn />
        </div>
      </div>

    </footer>
    </div>
  )
}

export default Footer
