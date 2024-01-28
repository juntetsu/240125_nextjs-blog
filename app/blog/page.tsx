import Container from "@/app/components/Container";
import Hero from "@/app/components/Hero";
import Posts from "@/app/components/Posts";
import { getAllPosts } from "@/app/lib/api";
import { eyecatchLocal } from "@/app/lib/constants";

const Blog = async () => {
  const posts = await getAllPosts();

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
  }

  return (
    <Container>
      <Hero title="Blog" subTitle="Blog Page" />

      <Posts posts={posts} />
    </Container>
  );
};

export default Blog;
