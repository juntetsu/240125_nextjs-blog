import styles from "../styles/Container.module.css";

type ContainerProps = {
  children: React.ReactNode;
  large?: boolean;
};

const Container: React.FC<ContainerProps> = ({ children, large = false }) => {
  return (
    <div className={large ? styles.large : styles.default}>{children}</div>
  );
};

export default Container;
