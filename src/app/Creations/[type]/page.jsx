
import React from 'react'
import css from "../../../styles/Creations/creations.module.scss";
import Link from 'next/link';
import Dynamic from '@/components/Creations/Dynamic';


const Creations = () => {
 

    return (
        <section className={`${css.Creations}`}>
            <div className={`container`}>

                    <div className={`${css.text_section}`}>
                    <h1>Find the right style for your video.</h1>
                    <Link href={"/Creations"}>hello </Link>
                    <br />
                    <strong>Our work</strong>
                    <p>
                        Browse through our award-winning work for both live-action and
                        animation, motion graphics and get your creative juices flowing for
                        your next video project.
                    </p>
                </div>

                <Dynamic />

              
            </div>
        </section>
    )
}

export default Creations;
