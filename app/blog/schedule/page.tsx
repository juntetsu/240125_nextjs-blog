import { getPostBySlug } from "@/app/lib/api";
import Container from "@/app/components/Container";
import PostHeader from "@/app/components/PostHeader";
import Image from "next/image";
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/app/components/TwoColumn";
import PostBody from "@/app/components/PostBody";
import ConvertBody from "@/app/components/ConvertBody";
import PostCategories from "@/app/components/PostCategories";

const Schedule = async () => {
  const slug = "schedule";
  const post = await getPostBySlug(slug);
  const { title, publishDate: publish, content, eyecatch, categories } = post;

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
      </article>
    </Container>
  );
};

export default Schedule;
