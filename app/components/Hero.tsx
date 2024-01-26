import styles from "../styles/Hero.module.css";
import Image from "next/image";
import cube from "@/images/cube.jpg";

type HeroProps = {
  title: string;
  subTitle: string;
  imageOn?: boolean;
};

const Hero: React.FC<HeroProps> = ({ title, subTitle, imageOn = false }) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subTitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <Image
            src={cube}
            alt=""
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </figure>
      )}
    </div>
  );
};

export default Hero;
