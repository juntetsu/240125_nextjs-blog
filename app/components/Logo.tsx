import Link from "next/link";
import styles from "../styles/Logo.module.css";

type LogoProps = {
  boxOn?: boolean;
};

const Logo = ({boxOn = false}) => {
  return (
    <Link href="/" className={boxOn ? styles.box : styles.basic}>Pan</Link>
  )
}

export default Logo;