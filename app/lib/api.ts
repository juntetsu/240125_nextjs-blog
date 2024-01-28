import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN!,
  apiKey: process.env.API_KEY!,
});

// 指定したスラッグの記事を取得する関数
export const getPostBySlug = async (slug: string) => {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    });
    return post.contents[0];
  } catch (error) {
    console.log("~~ getPostBySlug ~~");
    console.log(error);
  }
};

// 全ての記事のslugを取得する関数
export const getAllSlugs = async (limit = 100) => {
  try {
    const slugs = await client.get({
      endpoint: "blogs",
      queries: { fields: "title,slug", orders: "-publishedAt", limit: limit },
    });
    return slugs.contents;
  } catch (error) {
    console.log("~~ getAllSlugs ~~");
    console.log(error);
  }
};

// 全ての記事を取得する関数
export const getAllPosts = async (limit = 100) => {
  try {
    const posts = await client.get({
      endpoint: "blogs",
      queries: {
        fields: "title,slug,eyecatch",
        orders: "-publishedAt",
        limit: limit,
      },
    });
    return posts.contents;
  } catch (error) {
    console.log("~~ getAllPosts ~~");
    console.log(error);
  }
};

// 全てのカテゴリーを取得する関数
export const getAllCategories = async (limit = 100) => {
  try {
    const categories = await client.get({
      endpoint: "categories",
      queries: {
        fields: "name,id,slug",
        limit: limit,
      },
    });
    return categories.contents;
  } catch (error) {
    console.log("~~ getAllCategories ~~");
    console.log(error);
  }
};

// 指定したカテゴリーの記事を取得する関数
export const getAllPostsByCategory = async (catID: string, limit = 100) => {
  try {
    const posts = await client.get({
      endpoint: "blogs",
      queries: {
        filters: `categories[contains]${catID}`,
        fields: "title,slug,eyecatch",
        orders: "-publishedAt",
        limit: limit,
      },
    });
  } catch (error) {
    console.log("~~ getAllPostsByCategory ~~");
    console.log(error);
  }
};
