import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-center border-bottom w-1/3 m-auto py-5 border-b gap-x-[60px] ">
      <Link href="/" className="hover:text-blue-300">
        Index
      </Link>
      <Link href="/posts" className="hover:text-blue-300">
        Posts
      </Link>
      <Link href="/users" className="hover:text-blue-300">
        Users
      </Link>
      <Link href="/comments" className="hover:text-blue-300">
        Comments
      </Link>
    </header>
  );
}

// display: flex;
//   column-gap: 60px;
//   justify-content: center;
//   border-bottom: 1px solid #eaeaea;
//   width: 30%;
//   padding: 20px 0;
//   margin: 0 auto;
