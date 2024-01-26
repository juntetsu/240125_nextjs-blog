import { getPostBySlug } from "@/app/lib/api";
import Container from "@/app/components/Container";

const Schedule = async () => {
  const slug = "schedule";
  const post = await getPostBySlug(slug);
  const { title, publish, content, eyecatch, categories } = post;

  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
};

export default Schedule;
