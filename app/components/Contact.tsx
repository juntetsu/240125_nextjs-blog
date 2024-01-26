import Social from "@/app/components/Social";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social iconSize="30px" />
      <address>Pan@example.com</address>
    </div>
  );
};

export default Contact;
