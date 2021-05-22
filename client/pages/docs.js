import Head from "next/head";
import styles from "../styles/Docs.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no,initial-scale=1,maximum-scale=1"
        />
        <meta name="description" content="Setting up alAuth" />
        <title>alAuth | Getting Started</title>
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
