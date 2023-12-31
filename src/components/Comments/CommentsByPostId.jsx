import ListItem from "@/src/components/ListItem";
import { useCommentsByPostId } from "@/src/hooks/useFetchArray";

export const CommentsByPostsId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <>
      <ListItem datum={data} pathName="/comments" />
    </>
  );
};
