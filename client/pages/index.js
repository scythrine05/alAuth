import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no,initial-scale=1,maximum-scale=1"
        />
        <meta
          name="description"
          content="trusted authenication service provided for ambitious developers"
        />
        <title>alAuth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.donate}>
        <Image
          className="icon"
          src="/icons/donate-icon.png"
          height={35}
          width={35}
        />
      </div>
      <main className={styles.main}>
        <Fade bottom>
          <h1 className={styles.title}>
            {" "}
            <span>alA</span> uth
          </h1>
        </Fade>
        <p className={styles.description}>
          <span> trusted authentication </span> service for developers
        </p>
        <div className={styles.btn}>
          <Link href="/docs">
            <span className={styles.explore}>Get started</span>
          </Link>
          <Link href="/dashboard">
            <span className={styles.signin}>
              <div>Sign up with</div>
              <Image
                className={styles.icon}
                src="/icons/github-icon.png"
                height={26}
                width={22}
              />
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}
