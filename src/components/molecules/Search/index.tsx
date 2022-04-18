import React from "react";
import styles from "./styles.module.scss";
import { FC } from "react";
import { Button, Image } from "../../atoms";
import { images } from "../../../utils/constants";
interface IProps {}

export const Search: FC<IProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Image type={images.loop} className={styles.searchIcon} />
        <input className={styles.input} onChange={(e) => e} />
      </div>

      <Button
        className={styles.button}
        onClick={() => {
          console.log("search button click");
        }}
      >
        Submit
      </Button>
    </div>
  );
};
