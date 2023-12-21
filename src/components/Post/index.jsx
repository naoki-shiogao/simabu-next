import { CommentsByPostsId } from "@/src/components/Comments/CommentsByPostId";
import { UserByUserId } from "@/src/components/User/UserByUserId";
import { fetcher } from "@/src/utils/fetcher";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";

export const Post = () => {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );
  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <div>
        <Head>
          <title>{data?.title}</title>
        </Head>
        <h1>{data?.title}</h1>
        <p>{data?.body}</p>
        <UserByUserId id={data?.userId} />
        <CommentsByPostsId id={data?.id} />
      </div>
    </>
  );
};
