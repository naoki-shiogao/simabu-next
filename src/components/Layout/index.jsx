import styles from "@/src/styles/Home.module.css";

export const Layout = (props) => {
  return <div className={`${styles.main}`}>{props.children}</div>;
};
