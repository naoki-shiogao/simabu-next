import { fetcher } from "@/src/utils/fetcher";
import { useRouter } from "next/router";
import useSWRImmutable from "swr/immutable";

export const useComment = () => {
  const router = useRouter();
  const { data, error } = useSWRImmutable(
    router.query.id &&
      `https://jsonplaceholder.typicode.com/comments/${router.query.id}
    `,
    fetcher
  );
  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
