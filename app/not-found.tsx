import Container from "@/app/components/Container";
import Hero from "@/app/components/Hero";

export default function NotFound() {
  return (
    <>
      <title>404: ページが見つかりません</title>
      <Container>
        <Hero title="404" subTitle="ページが見つかりません" />
      </Container>
    </>
  );
}
