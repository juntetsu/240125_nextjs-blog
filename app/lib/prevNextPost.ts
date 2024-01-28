type allSlugsType = {
  slug: string;
  title: string;
};

export default function prevNextPost(
  allSlugs: allSlugsType[],
  currentSlug: string
) {
  const numberOfPosts = allSlugs.length;

  const index = allSlugs.findIndex(
    ({ slug }: { slug: string }) => slug === currentSlug
  );

  const prevPost =
    index + 1 === numberOfPosts ? { title: "", slug: "" } : allSlugs[index + 1];

  const nextPost = index === 0 ? { title: "", slug: "" } : allSlugs[index - 1];

  return [prevPost, nextPost];
}
