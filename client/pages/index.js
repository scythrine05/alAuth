import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>alAuth</title>
        <meta
          name="description"
          content="alAuth is a trusted AuthN and AuthZ providing service create for ambitious developers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Fade bottom>
          <h1 className={styles.title}>
            {" "}
            <span>alA</span> uth
          </h1>
        </Fade>
        <p className={styles.description}>
          <span> trusted AuthN/AuthZ </span> service for developers
        </p>
        <div className={styles.btn}>
          <Link href="/docs">
            <span className={styles.explore}>Get started</span>
          </Link>
          <span className={styles.signin}>
            <div>Sign in with</div>
            <Image
              className={styles.icon}
              src="/icons/github-icon.png"
              height={26}
              width={22}
            />
          </span>
        </div>
      </main>
    </div>
  );
}
