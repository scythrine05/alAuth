import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Dashboard.module.css";
export default function Projects() {
  const [modal, setModal] = useState("modalHide");

  const NewProject = () => {
    return (
      <>
        <div className={styles[modal]}>
          <div className={styles.newModal}>
            <form>
              <h2>New Project</h2>
              <input
                type="text"
                placeholder="Project Name"
                className={styles.modalForm}
              />
              <input
                type="password"
                placeholder="Project Password"
                className={styles.modalForm}
              />
              <div className={styles.modalOption}>
                {" "}
                <button disabled type="submit" className={styles.modalOpt}>
                  Create
                </button>
                <button
                  type="button"
                  onClick={() => setModal("modalHide")}
                  className={styles.modalOpt}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>alAuth | Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewProject class={modal} />
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
            <span
              className={styles.opt}
              onClick={() => {
                setModal("modal");
              }}
            >
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
