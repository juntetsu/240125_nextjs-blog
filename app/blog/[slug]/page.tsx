import { getPostBySlug } from "@/app/lib/api";
import Container from "@/app/components/Container";
import PostHeader from "@/app/components/PostHeader";
import Image from "next/image";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "@/app/components/TwoColumn";
import PostBody from "@/app/components/PostBody";
import ConvertBody from "@/app/components/ConvertBody";
import PostCategories from "@/app/components/PostCategories";
import { eyecatchLocal } from "@/app/lib/constants";
import { getAllSlugs } from "@/app/lib/api";
import prevNextPost from "@/app/lib/prevNextPost";
import Pagination from "@/app/components/Pagination";

const Post = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const post = await getPostBySlug(slug);
  const { title, publishDate: publish, content, categories } = post;

  const eyecatch = post.eyecatch ?? eyecatchLocal;

  const allSlugs = await getAllSlugs();
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug);

  return (
    <Container>
      <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />

        <figure>
          <Image
            src={eyecatch.url}
            alt=""
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width: 1152px) 1152px, 100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>

        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  );
};

export async function generateStaticParams() {
  const allSlugs = await getAllSlugs();

  return allSlugs.map(({ slug }: { slug: string }) => {
    return { slug: slug };
  });
}

export default Post;
