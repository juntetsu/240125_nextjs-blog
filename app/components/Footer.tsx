import Logo from "@/app/components/Logo";
import styles from "../styles/Footer.module.css";
import Container from "@/app/components/Container";
import Social from "@/app/components/Social";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
