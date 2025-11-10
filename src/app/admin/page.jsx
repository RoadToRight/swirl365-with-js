"use client"
import React, { useState } from 'react';
import css from '../../styles/admin/admin.module.scss';
import { IoIosArrowDown } from "react-icons/io";

const Dashboard = () => {

    const [openPortfolio, setopenPortfolio] = useState(false)

    return (
        <section className={css.admin}>
            <div className={css.sidebar}>

                <div className={css.container_siderbar}>
                    <div className={css.upper_part}>

                        <div className={css.logo}><img src="/logo.png" alt="" /></div>
                        <div className={css.name_email}>
                            <h1 className={css.name}>Sohaib</h1>
                            <h3 className={css.gmail}>sohaib@gmail.com</h3>
                        </div>

                    </div>

                    <ul>
                        <li className={css.menuItem}>Blogs</li>
                        <li className={css.menuItem}>
                            <span onClick={() => setopenPortfolio((prev) => !prev)}> Potfolio  <IoIosArrowDown /></span>

                            <div className={css.portfolio_list} style={{ gridTemplateRows: `${openPortfolio ? "1fr" : "0fr"}`, padding: `${openPortfolio ? "15px 10px 10px 15px" : "0px 0px 0px 15px"}` }}>
                                <div>Web development</div>
                            </div>

                            <div className={css.portfolio_list} style={{ gridTemplateRows: `${openPortfolio ? "1fr" : "0fr"}`, padding: `${openPortfolio ? "15px 10px 10px 15px" : "0px 0px 0px 15px"}` }}>
                                <div>Web development</div>
                            </div>


                        </li>
                        <li className={css.menuItem}>Users</li>
                        <li className={css.menuItem}>Settings</li>
                    </ul>

                </div>

            </div>

            <div className={css.main}>

            </div>

        </section>
    )
}

export default Dashboard
