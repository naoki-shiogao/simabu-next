import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./logo.module.css";

const inter = Inter({ subsets: ["latin"] });

export function Logo() {
  return (
    <div className={styles.center}>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>
  );
}
