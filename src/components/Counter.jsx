"use client"
import React, { useEffect, useState } from 'react'
import css from "../styles/Counter.module.scss"
import { FaLongArrowAltRight } from "react-icons/fa";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
const Counter = () => {

 const {ref,inView} = useInView({
    triggerOnce:true,
    threshold:0.3
 })
  return (
    <section className={css.Counter} ref={ref}>

      <div className={`${css.container_parent} container`}>
        <header>
          <h2>SWIRL365 Flawless Track Record</h2>
          <p>Enjoy peace of mind with our proven track record in animation production, featuring hundreds of successful projects, satisfied clients, and industry-leading turnaround times.</p>
        </header>


        <ul className={css.stats}>

          <li className={css.stats_child}>
            <h3>{inView ? <CountUp  start={0} end={114} duration={5} suffix='+'/> : "0+"}</h3>
            <h4>Creative projects <FaLongArrowAltRight /></h4>
          </li>

          <li className={css.stats_child}>
            <h3>{inView ? <CountUp  start={0} end={10} duration={5} suffix='K'/> : "0+"}</h3>
            <h4>Project views <FaLongArrowAltRight /></h4>
          </li>

          <li className={css.stats_child}>
            <h3>{inView ? <CountUp  start={0} end={30} duration={5} suffix='+'/> : "0+"}</h3>
            <h4>Success stories <FaLongArrowAltRight /></h4>
          </li>

        </ul>

      </div>

    </section>
  )
}

export default Counter
