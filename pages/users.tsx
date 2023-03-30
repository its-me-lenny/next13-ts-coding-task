import { GetStaticProps } from "next";
import Link from "next/link";
import { useState } from "react";
import Layout from "@/components/Layout";
import List from "@/components/List";
import Loader from "@/components/Loader";
import { User } from "@/interfaces";
import styles from "@/styles/styles.module.css";

interface Props {
  users: User[];
  total: number;
}

interface Support {
  url: string;
  text: string;
}

interface FetchedData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
}

const Users = ({ users, total }: Props) => {
  const [page, setPage] = useState<number>(2);
  const [usersList, setUsersList] = useState<User[]>(users);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadMoreUsersHandler = async () => {
    setIsLoading(true);
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const data: FetchedData = await response.json();
    const users = data.data;
    setUsersList([...usersList, ...users]);
    setIsLoading(false);
    setPage(page + 1);
  };

  const isLoadMoreDisabled = usersList.length === total;

  return (
    <Layout
      title="Users | Next.js + TypeScript App"
      content="This is the list of users fetched from an API using Next.js and TypeScript."
    >
      <div className={styles.container}>
        <Link href="/">Home</Link>
        <List items={usersList} />
        <button
          className={styles.btn}
          onClick={loadMoreUsersHandler}
          disabled={isLoadMoreDisabled}
        >
          Load more
          {isLoading && <Loader />}
        </button>
      </div>
    </Layout>
  );
};

export default Users;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://reqres.in/api/users?page=1");
  const data: FetchedData = await response.json();
  const users = data.data;
  const total = data.total;
  return {
    props: {
      users: users,
      total: total,
    },
  };
};
