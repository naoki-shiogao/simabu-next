import { usePost } from "@/src/hooks/usePost";
import Link from "next/link";

export const PostByCommentId = (props) => {
  const { data, error, isLoading } = usePost(props.id);

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <div>
        <Link href={`/posts/${data.id}`}>{data?.title}</Link>
      </div>
    </>
  );
};
