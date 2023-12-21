import { useUser } from "@/src/hooks/useUser";

export const User = () => {
  const { data, error, isLoading } = useUser();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <div>
        <ul>
          <li>{data.name}</li>
          <li>{data.username}</li>
          <li>{data.phone}</li>
        </ul>
      </div>
    </>
  );
};
