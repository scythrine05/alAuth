import Head from "next/head";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>alAuth</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div>
          {" "}
          <Image
            className={styles.logo}
            src="/logo.png"
            height={70}
            width={60}
          />
        </div>
        <div className={styles.donate}>
          <Image
            className={styles.icon}
            src="/icons/donate-icon.png"
            height={35}
            width={35}
          />
        </div>
      </header>
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
          <span className={styles.explore}>Get started</span>
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
      <footer className={styles.footer}>
        <div className={styles.contribute}>
          <div>contribute to alAuth</div>
          <div>
            <Image
              className={styles.icon}
              src="/icons/github-icon.png"
              height={30}
              width={32}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
