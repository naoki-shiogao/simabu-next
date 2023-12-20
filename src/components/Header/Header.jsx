import Link from "next/link";
import style from "./Header.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <Link href="/posts">Posts</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
