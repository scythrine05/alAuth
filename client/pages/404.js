import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import docsStyles from "../styles/Docs.module.css";
import dashStyles from "../styles/Dashboard.module.css";
import homeStyles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no,initial-scale=1,maximum-scale=1"
        />
        <meta name="description" content="Setting up alAuth" />
        <title>alAuth | 404</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={homeStyles.main}>
        <h1 className={docsStyles.title}>
          {" "}
          <span style={{ opacity: 0 }}>.......</span>
          <span>You'</span>re Lost
        </h1>
        <div
          className={docsStyles.description}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            className="lost"
            src="/icons/404-icon.png"
            height={300}
            width={300}
          />
          <br />
          <Link href="/">
            <span className={dashStyles.show}>Go back</span>
          </Link>
        </div>
      </main>
    </>
  );
}
