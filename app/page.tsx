import Container from "@/app/components/Container";
import Hero from "@/app/components/Hero";
import Posts from "@/app/components/Posts";
import { getAllPosts } from "@/app/lib/api";
import { eyecatchLocal } from "@/app/lib/constants";

const Home = async () => {
  const posts = await getAllPosts(4);

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
  }

  return (
    <>
      <Container>
        <Hero title="Pan" subTitle="next-blog" imageOn />

        <Posts posts={posts} />
      </Container>
    </>
  );
};

export default Home;
