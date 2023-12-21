import Head from "next/head";
import styles from "@/src/styles/Home.module.css";
import { Header } from "@/src/components/Header/Header";
import useSWR from "swr";
import { fetcher } from "@/src/utils/fetcher";
import { useRouter } from "next/router";

const Comment = () => {
  const router = useRouter();
  const { data: comment, error } = useSWR(
    router.query.id &&
      `https://jsonplaceholder.typicode.com/comments/${router.query.id}
    `,
    fetcher
  );
  console.log(router);

  if (!error && !comment) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <div className={styles.description}>
        <Header />
      </div>
      <lu>
        <li>{comment.name}</li>
        <li>{comment.email}</li>
        <li>{comment.body}</li>
      </lu>
    </>
  );
};

export default Comment;
