import styles from "../styles/Hero.module.css";

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
      {imageOn && <figure>[画像]</figure>}
    </div>
  );
};

export default Hero;
