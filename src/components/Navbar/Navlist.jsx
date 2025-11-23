"use client"
// import { useMediaQuery } from '@react-hook/media-query';
import React, { useState } from 'react'
import css from "../../styles/Navbar/NavBar.module.scss"
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '@/store/darkModeSlice';

const Navlist = () => {
  const [ToggleNav, setToggleNav] = useState(false);
  const [checked, setChecked] = React.useState(false);
  // const [DarkLight, setDarkLight] = useState(true)
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode)
  const ModeChanger = () => {
    dispatch(toggleDarkMode())
    // setDarkLight((props) => !props);
  };
  return (
    <div>
      <ul className={css.list} data-mobileul={ToggleNav} data-darkmode={isDarkMode} >
        <button aria-label="Close menu" className={css.lines} onClick={() => setToggleNav(false)}>
          <span className={`${css.line} ${css.line1}`} ></span>
          <span className={`${css.line} ${css.line2}`}></span>
        </button>


        <Link href={"/webdevelopment"}><li className={css.purple_webdev}>WEB DEVELOPMENT</li></Link>
        <Link href={"/Creations"}> <li>CREATIONS</li></Link>
        <Link href={"/Pricing"}><li>PRICING</li></Link>
        <Link href={"/About"}><li>ABOUT</li></Link>
        <Link href={"/Contact"}><li>CONTACT</li></Link>
        <li>
          <div>
            <label className={css.switch} htmlFor="switch" onClick={() => ModeChanger()}>
              <input
                id={css.switch}
                type="checkbox"
                className={css.circle}
                onChange={() => setChecked(isDarkMode)}
                checked={checked}
              />
              <svg
                viewBox="0 0 384 512"
                xmlns="http://www.w3.org/2000/svg"
                className={`${css.moon} ${css.svg}`}
              >
                <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
              </svg>
              <div className={`${css.sun} ${css.svg}`}>
                <span className={css.dot}></span>
              </div>
            </label>

          </div>
        </li>
      </ul>

      <button aria-label="Open menu" className={`${css.hamburger}`} onClick={() => setToggleNav(true)}>
        <GiHamburgerMenu className={css.hamicon} />
      </button>



    </div>
  )
}

export default Navlist
