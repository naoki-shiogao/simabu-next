import Head from "next/head";
import styles from "@/src/styles/Home.module.css";
import { Header } from "@/src/components/Header/Header";
import { Post } from "@/src/components/Post";

const PostId = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.description}>
          <Header />
        </div>
        <Post />
      </main>
    </>
  );
};

export default PostId;