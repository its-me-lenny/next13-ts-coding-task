import * as React from "react";
import ListItem from "./ListItem";
import { User } from "@/interfaces";
import styles from "@/styles/styles.module.css";

interface Props {
  items: User[];
}

const List = ({ items }: Props) => (
  <ul className={styles.list}>
    {items.map((user) => (
      <ListItem key={user.id} data={user} />
    ))}
  </ul>
);

export default List;
