import React from "react";
import { User } from "@/interfaces";
import Image from "next/image";
import styles from "@/styles/styles.module.css";

interface Props {
  data: User;
}

const ListItem = ({ data }: Props) => (
  <li className={`${styles["list-item"]} ${styles.card}`}>
    <Image
      className={`${styles.avatar} ${styles.skeleton}`}
      src={data.avatar}
      height={100}
      width={100}
      alt={data.first_name}
    />
    <span>{data.id}</span>
    <span>{data.email}</span>
    <span>
      {data.first_name} {data.last_name}
    </span>
  </li>
);

export default ListItem;
