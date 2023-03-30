import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/styles.module.css";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout
      title="Home | Next.js + TypeScript App"
      content="This is a Next.js app with TypeScript that demonstrates lazy loading behavior for a list of users fetched from an API."
    >
      <h1 className={styles.appear}>Hi!</h1>
      <p className={`${styles.description} ${styles.appear}`}>
        This is a Next.js app with TypeScript that demonstrates lazy loading
        behavior for a list of users fetched from an API.
      </p>
      <small className={`${styles.owner} ${styles.appear}`}>
        by: Leonard Chrisnor Ulanday
      </small>
      <Link className={styles.appear} href="/users">
        <button>View Users</button>
      </Link>
    </Layout>
  );
}
