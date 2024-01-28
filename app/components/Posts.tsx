import Image from "next/image";
import styles from "../styles/Posts.module.css";
import Link from "next/link";

type PostProps = {
  posts: [
    {
      title: string;
      slug: string;
      eyecatch: {
        url: string;
        width: number;
        height: number;
      };
    }
  ];
};

const Posts: React.FC<PostProps> = ({ posts }) => {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article className={styles.post} key={slug}>
          <Link href={`/blog/${slug}`}>
            <figure>
              <Image
                src={eyecatch.url}
                alt=""
                sizes="(min-width: 1152px) 576px, 50vw"
                fill
                style={{ objectFit: "cover" }}
              />
            </figure>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default Posts;
