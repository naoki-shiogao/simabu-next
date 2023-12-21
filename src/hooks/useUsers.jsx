import { fetcher } from "@/src/utils/fetcher";
import useSWR from "swr";

export const useUsers = () => {
  const { data: user, error: userError } = useSWR(
    "https://jsonplaceholder.typicode.com/users?",
    fetcher
  );

  return {
    data: user,
    error: userError,
    isLoading: !userError && !user,
    isEmpty: user && user.length === 0,
  };
};
