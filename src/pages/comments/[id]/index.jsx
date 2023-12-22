import { Header } from "@/src/components/Header/Header";

import { useComment } from "@/src/hooks/useComment";
import { PostByCommentId } from "@/src/components/Post/PostByCommentId";

const Comment = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="text-center p-24">
        <ul>
          <li>{data.name}</li>
          <li>{data.email}</li>
          <li>{data.body}</li>
        </ul>
        <h2>元の記事</h2>
        <PostByCommentId id={data.postId} />
      </div>
    </>
  );
};

export default Comment;
