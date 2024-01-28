import Container from "@/app/components/Container";
import PostHeader from "@/app/components/PostHeader";
import Posts from "@/app/components/Posts";
import { getAllCategories, getAllPosts, getAllPostsByCategory } from "@/app/lib/api";
import { eyecatchLocal } from "@/app/lib/constants";

const Category = async ({ params }: { params: { slug: string } }) => {
  const catSlug = params.slug;
  const allCats = await getAllCategories();
  const cat = allCats.find(({ slug }: { slug: string }) => slug === catSlug);
  const { name } = cat;

  const posts = await getAllPostsByCategory(cat.id)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal;
    }
  }

  return (
    <Container>
      <PostHeader title={name} subtitle="Blog Category" />
      <Posts posts={posts} />
    </Container>
  );
};

export const dynamicParams = true;
export async function generateStaticParams() {
  const allCats = await getAllCategories();

  return allCats.map(({ slug }: { slug: string }) => {
    return { slug: slug };
  });
}

export default Category;
