import Image from "next/image";
import Link from 'next/link';
import styles from "./home.module.css";
import HomePageContent from "@/component/section/HomePageContent";
import HomePageContact from "@/component/section/HomePageContact";
import HomePageWhatDo from "@/component/section/HomePageWhatDo";
import Testimonials from "@/component/section/Testimonials";
import HomePageBlog from "@/component/section/HomePageBlog";

const Home = () => {
  return (
    <>
    <section>
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Welcome to Gorakhpur Website Wala – Your Local Destination for Exceptional Web Solutions</h1>
        <p className={styles.desc}>
        Our team of expert designers and developers specializes in creating stunning,
         responsive websites tailored to your unique requirements. Whether you're a small business,
          a startup, or an established enterprise, we have the expertise to elevate your online presence and drive results.
        </p>
        <div className={styles.buttons}>
          <Link href='/about'><button className={styles.button}>Learn More</button></Link>
          <Link href="/contact">
            <button style={contactButtonStyles}>Contact</button>
          </Link>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
    </section>
    <section className={styles.sectionWho}>
    <HomePageContent/>
    </section>
    <section className={styles.sectionWho}>
    <HomePageContact/>
    </section>
    <section className={styles.sectionWho}>
    <HomePageWhatDo/>
    </section>
    <section className={styles.sectionWho}>
    <Testimonials/>
    </section>
    <section className={styles.sectionWho}>
    <HomePageBlog/>
    </section>
    </>
  );
};

export default Home

const contactButtonStyles = {
  backgroundColor: 'white', 
  color: 'black',
  padding: '20px',
  minWidth:'120px',
  border: 'none',
  cursor: 'pointer',
  textAlign: 'center',
  borderRadius:'5px',
};