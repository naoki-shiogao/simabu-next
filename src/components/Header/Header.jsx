import Link from "next/link";
import style from "./Header.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <Link href="/">Index</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/users">Users</Link>
      <Link href="/comments">Comments</Link>
    </header>
  );
}
