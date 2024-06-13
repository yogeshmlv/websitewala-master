import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};


const AboutPage = () => {

  // console.log("lets check where it works")
  return (
    <div className={styles.container} style={{marginBottom:'56px'}}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Gorakhpur Website Wala</h2>
        <h1 className={styles.title}>
        Your Trusted Partner for Expert Web Solutions
        </h1>
        <p className={styles.desc}>
        At Gorakhpur Website Wala, we are passionate about empowering businesses
         with cutting-edge digital solutions that drive growth and foster success.
          With a focus on excellence, innovation, and customer satisfaction, 
          we have established ourselves as a premier destination for web design and development 
          services in Gorakhpur and beyond.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>5 +</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>20 +</h1>
            <p>Project Completed</p>
          </div>
          <div className={styles.box}>
            <h1>30 +</h1>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;