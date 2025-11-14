"use client"
import styles from "./page.module.css";
import Video from "@/components/Home/HomeVideo";
import Circle from "@/components/Home/HomeCircleSection";
import Marquee from "@/components/Marquee";
import Projectslider from "@/components/Home/ProjectSlider";
import ImageText from "@/components/Home/ImageTextHome";
import Counter from "@/components/Counter";
import VideoIframe from "@/components/VideoIframe";
import Quotes from "@/components/Home/HomeQuotesSection";
import Reviews from "@/components/Home/HomeCardsSection";

export default function Home() {

  return (
    <section className={`${styles.page} Home`}>
      <VideoIframe />
      <Video />
      <Marquee   direction={"left"}  HeaderText={true}/>
      <Circle />
      <Projectslider />
      <ImageText />
      <Counter />
      <Quotes />
      <Reviews />
    </section>
  );
}
