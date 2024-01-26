import Logo from "@/app/components/Logo";
import Nav from "@/app/components/Nav";
import styles from "../styles/Header.module.css";
import Container from "@/app/components/Container";

const Header = () => {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
