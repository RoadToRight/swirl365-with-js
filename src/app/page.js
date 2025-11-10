"use client"
import { useGetPortfolioQuery } from "@/store/Api/PortfolioAPi";
import styles from "./page.module.css";
import Video from "@/components/Home/HomeVideo";
import Circle from "@/components/Home/HomeCircleSection";
import Marquee from "@/components/Marquee";
import Projectslider from "@/components/Home/ProjectSlider";

export default function Home() {

  const a = useGetPortfolioQuery();
  console.log(a)

  return (
    <section className={`${styles.page} Home`}>
      <Video />
      <Marquee   direction={"left"}  HeaderText={true}/>
      <Circle />
      <Projectslider />
    </section>
  );
}
