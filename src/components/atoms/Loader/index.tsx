import React from "react";
import styles from "./styles.module.scss";
import { FC } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {}

export const Loader: FC<IProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};
