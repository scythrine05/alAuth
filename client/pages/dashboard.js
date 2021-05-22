import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Dashboard.module.css";
import NewProject from "../components/NewProject";

export default function Projects() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no,initial-scale=1,maximum-scale=1"
        />
        <title>alAuth | Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewProject show={modalShow} onHide={() => setModalShow(false)} />
      <div className={styles.profile}>
        <Image
          className="icon"
          src="/icons/profile-icon.png"
          height={37}
          width={37}
        />
        <span>scythrine05</span>
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
              <span className={styles.show}>open</span>
            </div>
            <div className={styles.each}>
              <div className={styles.proHead}>
                <h1>Project-2</h1>
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
                Created at<span> 19 May 2021 </span>
              </p>
              <span className={styles.show}>open</span>
            </div>
          </div>
          <div className={styles.option}>
            {" "}
            <span className={styles.opt} onClick={() => setModalShow(true)}>
              New Project
            </span>
            <Link href="/docs">
              <span className={styles.opt}>Docs</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
