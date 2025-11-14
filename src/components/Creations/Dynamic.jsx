"use client"
import React, { useState } from 'react'
import css from "../../styles/Creations/creations.module.scss";
import { useParams, useRouter } from 'next/navigation';
import { RxCaretDown } from "react-icons/rx";
import { useGetPortfolioQuery, useSpecificPortfolioQuery } from '@/store/Api/PortfolioAPi';
import { FaPlay } from 'react-icons/fa';
import { handleVideoPlayer } from '@/store/VideoSlice';

const Dynamic = () => {

    let slug = useParams();


    const [SelectOpen, setSelectOpen] = useState(false);
    const [page, setpage] = useState(0)

    let router = useRouter();
    const [options, setoptions] = useState(["All", "2D Animation", "3D Animation", "Motion Graphics"])

    const handleClick = () => {
        let formattedSelect = SelectValue.replace(/\s+/g, "-").toLowerCase();
        router.push(`/Creations/${formattedSelect}`)
    }


    const [SelectValue, setSelectValue] = useState(() => {

        if (slug && Object.keys(slug) !== 0) {
            let formattedSlug = slug?.type?.replace(/-/g, " ").toLowerCase().trim();

            const Value = options.find((option, index) => {
                option = option.toLowerCase();
                return option === formattedSlug;
            })

            return Value || "All"
        }

        return "All"

    })



    // const { data } = useSpecificPortfolioQuery(SelectValue.replace(/\s+/g, "-").toLowerCase().trim());
    const { data } = useGetPortfolioQuery({ skip: page * 20, limit: 20 })
    const dispatch = useDispatch();

    console.log(data)




    return (

        <div>
            <div className={css.input_btn}>

                <div className={css.select}>
                    <label>Choose a type of video</label>

                    <div className={css.select_box} onClick={() => setSelectOpen((prev) => !prev)}>
                        <div className={css.selected_icon}>
                            <span>{SelectValue}</span>
                            <span><RxCaretDown /></span>
                        </div>
                        <div className={css.options} style={{ height: `${SelectOpen ? "150px" : "0px"}`, padding: `${SelectOpen ? "15px" : "0px 15px"}` }}>
                            {options?.map((option, index) => {
                                return (
                                    option !== SelectValue ? <div className='option' key={index} onClick={() => setSelectValue(option)}>{option}</div> : null
                                )
                            })}
                        </div>


                    </div>

                </div>

                {/* <button className={css.btn}>Search Portfolio</button> */}

                <div className={`${css.btn}`} onClick={() => handleClick()}>
                    <div className={"wrapper"} style={{ maxWidth: "100%", width: "100%" }}>
                        <div className={`${"box_area"}`} style={{ maxWidth: "100%", width: "100%", height: "44px" }}>
                            <div className={`${"size_one pink_bg_btn"} ${"box"}`}>Search Portfolio</div>
                            <div className={`${"size_two pink_bg_btn"} ${"box"}`}>Search Portfolio</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className={css.grid_conatiner}>

                {
                    data?.Portfolio.map(({poster,video,name,_id}, index) => {
                        return (
                            <div key={_id} className={css.item} style={{backgroundImage:`url(${poster})`}}>
                                <div className={css.bg_black}>
                                    <div className={css.play_btn}>
                                             <FaPlay className={css.play_btn} size={35} color='white' onClick={() => dispatch(handleVideoPlayer(slide.url))} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


                {/* <div className={css.item}>
                    <div className={css.bg_pink}>
                        <div className={css.play_btn}></div>
                    </div>
                </div>
                <div className={css.item}>
                    <div className={css.bg_pink}>
                        <div className={css.play_btn}></div>
                    </div>
                </div>
                <div className={css.item}>
                    <div className={css.bg_pink}>
                        <div className={css.play_btn}></div>
                    </div>
                </div> */}

            </div>

        </div>

    )
}

export default Dynamic
