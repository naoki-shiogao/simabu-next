import { fetcher } from "@/src/utils/fetcher";
import useSWRImmutable from "swr/immutable";

export const UserByUserId = (props) => {
  const { data, error } = useSWRImmutable(
    props.id ? `https://jsonplaceholder.typicode.com/users/${props.id}` : null,
    fetcher
  );

  if (!data && !error) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>Created by {data.name}</div>;
};
