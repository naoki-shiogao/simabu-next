import { CommentsByPostsId } from "@/src/components/Comments/CommentsByPostId";
import { UserByUserId } from "@/src/components/User/UserByUserId";
import { usePost } from "@/src/hooks/usePost";
import Head from "next/head";
import { useRouter } from "next/router";

export const Post = () => {
  const router = useRouter();
  const { data, error, isLoading } = usePost(router.query.id);

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
        <div className="p-24 mx-auto max-w-[1200px] ">
          <h1>{data?.title}</h1>
          <p>{data?.body}</p>
          <UserByUserId id={data?.userId} />
        </div>
        <CommentsByPostsId id={data?.id} />
      </div>
    </>
  );
};
