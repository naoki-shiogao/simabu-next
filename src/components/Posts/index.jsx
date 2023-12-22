import { usePosts } from "@/src/hooks/useFetchArray";
import Link from "next/link";

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

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
      <ul className="space-y-4">
        {data.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`} className="group ">
                <h1 className="font-bold group-hover:text-blue-500">
                  {post.title}
                </h1>
                <p className="text-gray-300 group-hover:text-blue-300">
                  {post.body}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
