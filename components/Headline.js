import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Headline(props) {
  return (
    <>
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>{props.title}</code>
      </p>
    </>
  );
}
