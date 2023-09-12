// import { createClient, type MicroCMSQueries } from 'microcms-js-sdk';

// const client = createClient({
//   serviceDomain: import.meta.env.SERVICE_DOMAIN,
//   apiKey: import.meta.env.API_KEY,
// });

// export const getBlogs = async (queries: MicroCMSQueries) => {
//   return await client.get({ endpoint: 'blogs', queries });
// };

// export const getBlogDetail = async (
//   blogId: string,
//   queries?: MicroCMSQueries,
// ) => {
//   return await client.getListDetail({
//     endpoint: 'blogs',
//     contentId: blogId,
//     queries,
//   });
// };

//SDK利用準備
import { createClient, type MicroCMSQueries } from 'microcms-js-sdk';
const client = createClient({
  serviceDomain: 'yakumo',
  apiKey: 'UiCu5hhMMF9iE4KtW0crFUAzR4WNYGR80VfS',
});

//型定義
export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
};
export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
};

//APIの呼び出し
export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.get<BlogResponse>({ endpoint: 'blogs', queries });
};
export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<Blog>({
    endpoint: 'blogs',
    contentId,
    queries,
  });
};
