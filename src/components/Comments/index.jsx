import ListItem from "@/src/components/ListItem";
import { fetcher } from "@/src/utils/fetcher";
import useSWRImmutable from "swr/immutable";

export const CommentComponent = () => {
  const { data: comments, error } = useSWRImmutable(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher
  );

  if (!error && !comments) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (comments && comments.length === 0) {
    return <div>データは空です</div>;
  }

  return (
    <>
      <ListItem datum={comments} pathName="/comments" />
    </>
  );
};
