import styles from "../styles/PostBody.module.css";

const PostBody = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.stack}>{children}</div>;
};

export default PostBody;
