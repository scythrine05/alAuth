import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Docs.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>alAuht | Getting Started</title>
        <meta name="description" content="Setting up alAuth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {" "}
          <span>Getting</span> Started
        </h1>
        <div className={styles.description}>
          <p>Welcome to the alAuth documentation.</p>
          <br />
          <p>
            If you're new to Next.js we recommend that you start with the learn
            course.
          </p>
          <br />
          <p>
            The interactive course with quizzes will guide you through
            everything you need to know to use Next.js
          </p>
          <br />
          <p>
            If you have questions about anything related to Next.js, you're
            always welcome to ask our community on GitHub Discussions.
          </p>
        </div>

        <h1 className={styles.title}>
          {" "}
          <span>How it</span> works
        </h1>
        <div className={styles.description}>
          <p>Welcome to the alAuth documentation.</p>
          <br />
          <p>
            If you're new to Next.js we recommend that you start with the learn
            course.
          </p>
          <br />
          <p>
            The interactive course with quizzes will guide you through
            everything you need to know to use Next.js
          </p>
          <br />
          <p>
            If you have questions about anything related to Next.js, you're
            always welcome to ask our community on GitHub Discussions.
          </p>
        </div>
        <h1 className={styles.title}>
          {" "}
          <span>Setting </span> up API
        </h1>
        <div className={styles.description}>
          <p>Welcome to the alAuth documentation.</p>
          <br />
          <p>
            If you're new to Next.js we recommend that you start with the learn
            course.
          </p>
          <br />
          <p>
            The interactive course with quizzes will guide you through
            everything you need to know to use Next.js
          </p>
          <br />
          <p>
            If you have questions about anything related to Next.js, you're
            always welcome to ask our community on GitHub Discussions.
          </p>
        </div>
      </main>
    </>
  );
}
