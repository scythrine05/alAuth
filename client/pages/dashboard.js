import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Dashboard.module.css";

export default function Projects() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <Head>
        <title>alAuth | Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.profile}>
        <Image
          className="icon"
          src="/icons/profile-icon.png"
          height={37}
          width={37}
        />
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Your P</span>rojects
        </h1>
        <div className={styles.content}>
          <div className={styles.project}>
            <div className={styles.each}>
              <div className={styles.proHead}>
                <h1>Project-1</h1>
                <img
                  className={styles.del_icon}
                  src="/icons/delete-icon.png"
                  height={25}
                  width={25}
                />
              </div>

              <p>
                Status:<span> active </span>
              </p>
              <p>
                Created at<span> 21 May 2021 </span>
              </p>
              <span className={styles.show}>show</span>
            </div>
          </div>
          <div className={styles.option}>
            {" "}
            <span className={styles.new}>New Project</span>
            <Link href="/docs">
              <span className={styles.new}>Docs</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
