import styles from "./layout.module.css";

export default function Layout({ children }) {
  return <div> <h2> Welcome To Nextjs Learning Repositry</h2>
  <div className={styles.container}>
    {children}
    </div>
    </div>;
}
