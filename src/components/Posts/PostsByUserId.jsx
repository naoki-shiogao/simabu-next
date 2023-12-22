import { usePostsByUserId } from "@/src/hooks/useFetchArray";
import Link from "next/link";

export const PostsByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = usePostsByUserId(props.id);

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
      <ol>
        {data.map((item) => (
          <li key={item.id}>
            <Link href="/" className="hover:text-blue-300">
              {item.title}
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
};
