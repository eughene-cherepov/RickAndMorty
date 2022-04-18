import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export const Title = ({ customStyle, children }: any) => {
  // const cx = cn.bind(styles.title);
  return <p className={cn([styles.title, customStyle])}>{children}</p>;
};
