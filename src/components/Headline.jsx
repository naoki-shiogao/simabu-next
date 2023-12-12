import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function Headline(props) {
  return (
    <>
      <p>
        Get started by editing&nbsp;
        {props.children}
      </p>
    </>
  );
}
