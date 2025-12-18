"use client"
import styles from "./page.module.css";
import Video from "@/components/Home/HomeVideo";
import Circle from "@/components/Home/HomeCircleSection";
import Marquee from "@/components/Marquee";
import Projectslider from "@/components/Home/ProjectSlider";
import ImageText from "@/components/Home/ImageTextHome";
import Counter from "@/components/Counter";
import VideoIframe from "@/components/VideoIframe";
import Reviews from "@/components/Home/HomeCardsSection";
import QuotesSection from "@/components/Home/QuotesSection";


export default function Home() {



  return (
    <section className={`${styles.page} Home`}>
      <VideoIframe />
      <Video />
      <Marquee direction={"left"} HeaderText={true} />
      <Circle />
      <Projectslider />
      <ImageText />
      <Counter />
      <QuotesSection />
      <Reviews />
    </section>
  );
}
