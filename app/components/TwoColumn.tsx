import styles from "../styles/TwoColumn.module.css";

const TwoColumn = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.flexContainer}>{children}</div>;
};

const TwoColumnMain = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.main}>{children}</div>;
};

const TwoColumnSidebar = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.sidebar}>{children}</div>;
};

export { TwoColumn, TwoColumnMain, TwoColumnSidebar };
