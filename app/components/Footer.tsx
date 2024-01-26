import Logo from "@/app/components/Logo";
import styles from "../styles/Footer.module.css";
import Container from "@/app/components/Container";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          [ソーシャル]
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
