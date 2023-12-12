import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/src/styles/Home.module.css";
import { Footer } from "@/src/components/Footer/Footer";
import { Logo } from "@/src/components/logo/logo";
import { Headline } from "@/src/components/Headline";
import { Headerlogo } from "@/src/components/Headerlogo";
import { Header } from "@/src/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>about page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <Headline title="About page">
            <code className={styles.code}>about</code>
          </Headline>
          <Header />
          <Headerlogo />
        </div>
        <Logo />

        <Footer />
      </main>
    </>
  );
}