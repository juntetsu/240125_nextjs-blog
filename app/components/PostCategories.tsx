import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/PostCategories.module.css";
import Link from "next/link";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";

type PostCategoriesProps = {
  categories: {
    name: string;
    slug: string;
  }[];
};

const PostCategories: React.FC<PostCategoriesProps> = ({ categories }) => {
  return (
    <div className={styles.flexContainer}>
      <h3 className={styles.heading}>
        <FontAwesomeIcon icon={faFolderOpen} />
        <span className="sr-only">Categories</span>
      </h3>
      <ul className={styles.list}>
        {categories.map(({ name, slug }) => (
          <li key={slug}>
            <Link href={`/blog/category/${slug}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostCategories;
